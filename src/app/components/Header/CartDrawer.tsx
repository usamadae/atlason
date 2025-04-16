// components/CartDrawer.tsx
'use client';

import { useCart } from '../../../context/CartContext';
import { FaTimes, FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { state, removeFromCart } = useCart();

  const subtotal = state.items.reduce(
    (acc: number, item: any) => acc + (item.price.new || item.price),
    0
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#00000080] bg-opacity-40 z-[999]"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[1000] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold font-inter">Your Cart</h2>
          <button onClick={onClose} className='cursor-pointer'>
            <FaTimes size={20} />
          </button>
        </div>

        <div className="p-4 overflow-y-auto font-inter font-semibold md:h-[calc(100vh-250px)] h-[calc(100vh-300px)] ">
          {state.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            state.items.map((item: any) => (
              <div key={item.id} className="flex items-center gap-4 mb-4 border-b pb-4">
                <Image src={item.image} alt={item.title} width={70} height={70} className="rounded" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-[#3DB765] font-semibold">
                    €{item.price.new || item.price}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item)} className="text-gray-500 hover:text-red-500 cursor-pointer">
                  <FaTrashAlt />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between font-inter font-semibold mb-4">
            <span>Subtotal</span>
            <span>€{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex font-inter font-semibold flex-col gap-3">
            <Link
              href="/cart"
              className="text-center bg-gray-200 py-2 rounded-md hover:bg-gray-300 transition"
              onClick={onClose}
            >
              View Cart
            </Link>
            <Link
              href="/checkout"
              className="text-center bg-[#3DB765] text-white py-2 rounded-md hover:bg-black transition"
              onClick={onClose}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
