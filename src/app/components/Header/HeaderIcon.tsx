'use client';
import { useState } from 'react';
import { useCart } from '../../../context/CartContext';
import CartDrawer from './CartDrawer'; // Make sure this path is correct
import { useCartDrawer } from '../../../context/CartDrawerContext';
import Link from 'next/link';

const HeaderIcon = () => {
  const { state } = useCart(); // `state` has the `items` array
  const cartCount = state.items.length;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { openCart } = useCartDrawer(); // use global openCart

  return (
    <>
      <div className="flex justify-center items-center gap-5">
        <a href="#">
          <svg
            width="18"
            height="21"
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.26855 7.74994C2.26731 6.86045 2.44213 5.97951 2.78294 5.1579C3.12375 4.33628 3.62381 3.59025 4.25429 2.9628C4.88476 2.33535 5.6332 1.83889 6.45644 1.50204C7.27968 1.16519 8.16145 0.994607 9.05093 1.00013C12.7625 1.02772 15.7312 4.11275 15.7312 7.83468V8.49994C15.7312 11.8577 16.4337 13.8061 17.0524 14.871C17.1191 14.9848 17.1546 15.1142 17.1553 15.246C17.156 15.3779 17.1219 15.5076 17.0565 15.6221C16.991 15.7366 16.8966 15.8318 16.7826 15.8982C16.6686 15.9645 16.5392 15.9996 16.4073 15.9999H1.59173C1.45985 15.9996 1.33038 15.9645 1.2164 15.8981C1.10242 15.8318 1.00795 15.7366 0.942524 15.622C0.877099 15.5075 0.843033 15.3778 0.843761 15.2459C0.84449 15.114 0.879988 14.9846 0.946673 14.8709C1.56573 13.8059 2.26855 11.8575 2.26855 8.49994L2.26855 7.74994Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 16V16.75C6 17.5456 6.31607 18.3087 6.87868 18.8713C7.44129 19.4339 8.20435 19.75 9 19.75C9.79565 19.75 10.5587 19.4339 11.1213 18.8713C11.6839 18.3087 12 17.5456 12 16.75V16"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="#">
          <i className="fa-regular fa-heart text-[18px]"></i>
        </a>

        {/* Updated Cart Drawer Toggle Button */}
        <button onClick={openCart} className="relative cursor-pointer">
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5  h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 18.25C8.25 18.6642 7.91421 19 7.5 19C7.08579 19 6.75 18.6642 6.75 18.25C6.75 17.8358 7.08579 17.5 7.5 17.5C7.91421 17.5 8.25 17.8358 8.25 18.25Z"
              fill="black"
              stroke="black"
              strokeWidth="1.5"
            />
            <path
              d="M17.25 19.75C18.0784 19.75 18.75 19.0784 18.75 18.25C18.75 17.4216 18.0784 16.75 17.25 16.75C16.4216 16.75 15.75 17.4216 15.75 18.25C15.75 19.0784 16.4216 19.75 17.25 19.75Z"
              fill="black"
            />
            <path
              d="M3.96429 4.75H20.7857L18.3108 13.4121C18.2213 13.7255 18.0321 14.0012 17.7718 14.1975C17.5116 14.3938 17.1945 14.5 16.8685 14.5H7.88145C7.55549 14.5 7.23839 14.3938 6.97816 14.1975C6.71793 14.0012 6.52872 13.7255 6.43917 13.4121L3.04827 1.54396C3.0035 1.38725 2.90889 1.24939 2.77878 1.15124C2.64866 1.05309 2.49011 1 2.32713 1H0.75"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Drawer Component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default HeaderIcon;
