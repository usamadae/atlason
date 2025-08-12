'use client';

import { useState } from 'react';

export default function CourseSubmissionPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    price: '',
    title: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here
  };

  return (
    <div className="bg-white  bg-gray-100  w-full pb-11 ">
        <div className=' container bg-white rounded-xl  px-8  pt-8 w-[100%] flex sm:justify-center lg:justify-start  gap-10 mx-auto'>
        <h1 className="xl:text-[82px] lg:text-[62px]   md:text-[42px] sm:text-[32px] text-[20px] font-medium   md:text-start sm:text-center">
            Course <span className="text-green-500 underline">Submission</span> <span className="text-black">form</span>
          </h1>
          </div>
      <div className=" container bg-white rounded-xl  px-8  pt-3 w-[100%] flex  md:flex-row flex-col gap-6 mx-auto items-center">
        {/* Left side - Form */}
        <form onSubmit={handleSubmit} className=" space-y-4 md:w-[50%] w-full ">
          
          <p className="text-start text-sm text-gray-800 font-inter font-medium lg:text-[18px]  leading-loose mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-black-800 lg:text-[14px]">First Name</label>
              <input
                type="text"
                name="firstName"
                className="w-full border-2 px-2 py-1 rounded border-black"
                value={formData.firstName}
                onChange={handleChange}
                placeholder='Enter Full Name'
              />
            </div>
            <div>
              <label className="text-xs text-black-800 lg:text-[14px]">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-full border-2 px-2 py-1 rounded border-black"
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Enter Last Name'
              />
            </div>
            <div>
              <label className="text-xs text-black-800 lg:text-[14px]">Price</label>
              <input
                type="text"
                name="price"
                className="w-full border-2 px-2 py-1 rounded border-black"
                value={formData.price}
                onChange={handleChange}
                placeholder='Enter Price'
              />
            </div>
            <div>
              <label className="text-xs text-black-800 lg:text-[14px]">Title</label>
              <input
                type="text"
                name="title"
                className="w-full border-2 px-2 py-1 rounded border-black"
                value={formData.title}
                onChange={handleChange}
                placeholder='Enter Course Title'
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-black-800 lg:text-[14px]">Description</label>
            <textarea
              name="description"
              className="w-full border-2 px-2 py-1 rounded border-black"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white font-semibold px-8 py-2 rounded w-full"
          >
            Submit
          </button>
        </form>

        {/* Right side - Preview Card */}
        <div className="md:w-[45%] w-full  bg-white rounded-xl  p-6 flex flex-col items-center justify-center shadow-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" className='  xl:w-][50%] xl:w-[50%] lg:w-[50%] lg:h-[50%]  md:w-[40%] md;h-[40%] h-22 w-22 '   viewBox="0 0 295 242" fill="none">
<path d="M13.9611 194.29C12.8969 203.7 21.3681 213.327 31.1966 214.224C32.9645 214.383 34.7492 214.366 36.5256 214.366C76.8786 214.366 117.232 214.366 157.585 214.383C158.942 214.383 160.316 214.349 161.648 214.567C165.025 215.129 167.329 217.818 167.371 221.036C167.413 224.253 165.142 226.985 161.799 227.63C160.785 227.823 159.721 227.848 158.682 227.848C117.491 227.856 76.3005 227.898 35.1179 227.839C14.5727 227.814 0.135791 213.394 0.119033 192.882C0.0687589 140.288 0.06038 87.693 0.119033 35.0983C0.144169 14.5951 14.6314 0.267041 35.1766 0.258662C105.535 0.241904 175.884 0.241904 246.242 0.258662C266.695 0.258662 281.049 14.461 281.116 34.8721C281.199 59.6571 281.116 84.4336 281.157 109.219C281.157 111.967 280.713 114.43 278.275 116.106C273.993 119.047 268.279 116.265 267.868 110.97C267.709 108.992 267.818 106.998 267.818 105.012C267.818 81.8026 267.818 58.5845 267.818 35.3749C267.818 22.0104 259.464 13.598 246.117 13.598C175.868 13.5812 105.618 13.5812 35.3609 13.598C21.9294 13.598 13.6091 21.8764 13.6008 35.2575C13.5756 82.7327 13.5924 130.199 13.5924 177.675C13.5924 178.613 13.5924 179.551 13.5924 180.968C14.9414 180.968 16.148 180.968 17.3545 180.968C62.4082 180.968 107.47 180.968 152.524 180.968C157.844 180.968 160.819 183.481 160.718 187.83C160.643 191.19 158.322 193.804 154.979 194.19C153.739 194.332 152.474 194.298 151.217 194.298C106.783 194.298 62.3579 194.298 17.9243 194.298C16.5921 194.298 15.2514 194.298 13.9611 194.298V194.29Z" fill="#3DB765"/>
<path d="M237.871 127.485C268.991 127.46 294.714 153.158 294.605 184.169C294.505 215.548 269.158 241.145 238.148 241.179C206.333 241.221 180.844 215.866 180.794 184.135C180.744 152.915 206.341 127.51 237.871 127.477V127.485ZM281.124 184.37C281.065 160.23 261.684 140.766 237.754 140.816C213.522 140.866 194.192 160.314 194.276 184.562C194.36 208.535 213.958 227.965 237.947 227.856C261.726 227.756 281.182 208.158 281.124 184.37Z" fill="#3DB765"/>
<path d="M97.1811 100.42C97.1811 87.768 97.156 75.1158 97.1811 62.4636C97.2062 50.8587 107.278 45.0689 117.383 50.8838C139.377 63.5361 161.355 76.2134 183.317 88.9327C193.397 94.7728 193.472 106.428 183.442 112.26C161.322 125.105 139.168 137.908 116.972 150.627C107.227 156.216 97.2146 150.275 97.1895 138.997C97.156 126.135 97.1811 113.274 97.1811 100.412V100.42ZM176.831 100.646C154.518 87.768 132.758 75.1996 110.797 62.5222V138.787C132.867 126.043 154.527 113.533 176.831 100.646Z" fill="#3DB765"/>
<path d="M244.433 178.119C244.433 187.185 244.449 196.242 244.416 205.308C244.416 206.657 244.366 208.04 244.047 209.339C243.31 212.422 240.788 214.282 237.654 214.274C234.545 214.265 232.032 212.363 231.303 209.28C231.018 208.082 230.968 206.8 230.959 205.56C230.934 197.415 230.942 189.263 230.942 181.118C230.942 180.113 230.942 179.099 230.942 177.23C228.999 179.124 227.65 180.481 226.25 181.789C222.991 184.847 218.944 184.998 216.221 182.207C213.581 179.493 213.699 175.496 216.707 172.429C221.969 167.058 227.281 161.729 232.66 156.484C235.844 153.376 239.456 153.342 242.656 156.442C248.128 161.746 253.515 167.151 258.828 172.614C261.785 175.647 261.785 179.778 259.096 182.409C256.406 185.04 252.367 184.922 249.309 181.939C247.91 180.574 246.787 178.931 245.53 177.406C245.153 177.641 244.785 177.884 244.407 178.119H244.433Z" fill="#3DB765"/>
</svg>
          <p className="text-center text-sm text-gray-800 font-inter font-medium lg:text-[18px] md:text-[16px] text-[14px] mt-[10px] ">
           Lorem Ipsum is simply dummy text of the printing and <br></br>
            typesetting industry.
          </p>
        </div>
      </div>
    </div>
  );
}
