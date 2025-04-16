// components/CartDrawerContainer.tsx
'use client';

import { useCartDrawer } from '../../../context/CartDrawerContext';
import CartDrawer from './CartDrawer';
const CartDrawerContainer = () => {
  const { isOpen, closeCart } = useCartDrawer();

  return <CartDrawer isOpen={isOpen} onClose={closeCart} />;
};

export default CartDrawerContainer;
