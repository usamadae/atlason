'use client';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';

export default function CartPage() {
  const { state, removeFromCart } = useCart();

  // Calculate totals
  const subtotal = state.items.reduce(
    (acc: number, item: any) => acc + (item.price.new || item.price),
    0
  );

  return (
    <div className="container mx-auto px-4 py-[80px] pt-[140px] font-inter">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h1 className="xl:text-[72px] lg:text-[52px] md:text-[42px] text-[26px] font-semibold mb-2 font-inter">Cart</h1>
          <p className="text-gray-500 mb-6 font-inter lg:text-[22px] md:text-[20px] text-[18px] font-light">Sign in for better experience</p>

          {state.items.length === 0 ? (
            <p className='text-[24px] font-semibold text-[#3DB765]'>Your cart is empty.</p>
          ) : (
            <div className="space-y-6 mt-10">
              {state.items.map((item: any) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  {/* Item Info */}
                  <div className="flex md:items-center gap-4 w-full md:flex-row flex-col items-baseline">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={150}
                      height={150}
                      className="rounded-md"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-[16px] md:text-[18px] leading-[34px]">{item.title}</p>
                     
                    </div>
                    {/* Quantity Selector */}
                    <div className="flex items-center border rounded px-4 py-1">
                      <button className="px-2 py-1">-</button>
                      <span className="px-3">1</span>
                      <button className="px-2 py-1">+</button>
                    </div>
                    {/* Price */}
                    <div className="text-right">
                      {item.price.old && (
                        <p className="line-through text-xs text-gray-400">
                          €{item.price.old}
                        </p>
                      )}
                      <p className="text-[#3DB765] text-[20px] font-semibold">
                        €{item.price.new || item.price}
                      </p>
                    </div>
                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item)}
                      className="text-gray-500 cursor-pointer hover:text-red-500 ml-4"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="bg-gray-50 p-6 rounded-md shadow-sm h-fit md:mt-10 mt-2 font-inter">
          <h3 className="text-lg font-semibold mb-4 text-[24px]">Summary</h3>
          <label className="block text-sm font-medium mb-2 text-[18px]">
            Gift card or discount code?
          </label>
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Please enter code"
              className="flex-1 border px-3 py-2 rounded-l-md"
            />
            <button className="bg-black text-[18px] text-white px-4 py-2 rounded-r-md">
              Apply
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className='text-[18px] font-semibold'>Subtotal</span>
              <span className='text-[18px] font-semibold'>€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className='text-[18px] font-semibold'>Shipping</span>
              <span className='text-[18px] font-semibold'>€0.00</span>
            </div>
            <div className="flex justify-between">
              <span className='text-[18px] font-semibold'>Taxes</span>
              <span className='text-[18px] font-semibold'>€0.00</span>
            </div>
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>€{subtotal.toFixed(2)}</span>
          </div>

          <button className="mt-6 w-full bg-[#3DB765] cursor-pointer hover:bg-black text-white py-3 rounded-md hover:opacity-90 transition">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
