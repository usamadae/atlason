'use client';
import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import toast from 'react-hot-toast';

export interface Course {
  price: number;
  image: string;
  id: number;
  title: string;
  quantity?: number; // ✅ added quantity
}

interface CartState {
  items: Course[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Course }
  | { type: 'REMOVE_FROM_CART'; payload: Course }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } };

const initialState: CartState = { items: [] };

const CartContext = createContext<any>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { ...action.payload, quantity: 1 }] };
    }

    case 'REMOVE_FROM_CART': {
      return {
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    }

    case 'UPDATE_QUANTITY': {
      return {
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, initializer => {
    if (typeof window !== 'undefined') {
      const persisted = localStorage.getItem('cart');
      return persisted ? JSON.parse(persisted) : initializer;
    }
    return initializer;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (course: Course) => {
    dispatch({ type: 'ADD_TO_CART', payload: course });
    toast.success('Added to cart!');
  };

  const removeFromCart = (course: Course) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: course });
    toast.error('Removed from cart.');
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
