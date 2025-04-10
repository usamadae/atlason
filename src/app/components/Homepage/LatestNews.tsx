import React from 'react';
import Image from 'next/image';

const LatestNews = ({ 
  title = "Lastest News and Resources",
  subtitle = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  mainArticle = {
    image: "/images/n1.png",
    category: "News",
    title: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    excerpt: "Class launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    readMoreLink: "#"
  },
  sideArticles = [
    {
      image: "/images/n2.png",
      title: "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      excerpt: "Class Technologies Inc., the company that created Class...",
      category: "Press Release"
    },
    {
      image: "/images/n3.png",
      title: "Zoom's earliest investors are betting millions on a better Zoom for schools",
      excerpt: "Zoom was never created to be a consumer product. Nonetheless, the...",
      category: "News"
    },
    {
      image: "/images/n4.png",
      title: "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      excerpt: "This year, investors have reaped big financial returns from betting on Zoom...",
      category: "News"
    }
  ]
}) => {
  return (
    <div className="container mx-auto px-4 pt-[80px] md:pb-[100px] pb-[50px]">
      {/* Header Section */}
      <div className="text-center mb-2">
          <div className="text-center mb-5">
                       <h2 className="xl:text-[52px] lg:text-[42px] md:text-[32px] text-[26px] font-bold font-inter inline-block">
                       Lastest<span className="text-[#3DB765] relative"> {" "}News{" "}
                               <div className="absolute bottom-[1px] left-0 w-full h-1 ">
                                   <Image
                                       src="/images/heading-line.png"
                                       alt="Student with tablet"
                                       width={260}
                                       height={23}
                                       className=""
                                   />
       
                               </div>
                           </span>
                           and {" "}
                           <span className="text-[#3DB765] relative">Resources {" "}
                               <div className="absolute bottom-[1px] left-0 w-full h-1 ">
                                   <Image
                                       src="/images/heading-line.png"
                                       alt="Student with tablet"
                                       width={260}
                                       height={23}
                                       className=""
                                   />
       
                               </div>
                           </span>
                       </h2>
                   </div>
      </div>
      
      {/* Subtitle */}
      <p className="text-center text-black xl:text-[20px] text-[18px] font-inter xl:mb-8 mb-2">
        {subtitle}
      </p>

      {/* News Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-10 gap-5 mt-5">
        {/* Main Article */}
        {mainArticle && (
          <div className="rounded-[30px] overflow-hidden shadow-md cursor-pointer">
            <div className="relative xl:p-10 md:p-3 p-5">
              <Image 
                src={mainArticle.image} 
                alt={mainArticle.title} 
                width={600} 
                height={350} 
                className="w-full h-auto mt-5"
              />
            </div>
            <div className="xl:p-8 md:p-3 p-5">
              <div className="inline-block bg-[#3DB765] text-white px-3 py-1 text-[16px] font-inter uppercase font-medium rounded my-3">
                {mainArticle.category}
              </div>
              <h3 className="font-bold  xl:text-[24px] lg:text-[20px] font-inter my-3">{mainArticle.title}</h3>
              <p className="text-black font-poppins font-normal xl:text-[18px] lg:text-[16px] leading-[28px] mb-4">
                {mainArticle.excerpt}
              </p>
              <a href={mainArticle.readMoreLink} className="text-[#3DB765] underline font-medium xl:text-[26px] lg:text-[22px] font-poppins">Read more</a>
            </div>
          </div>
        )}

        {/* Right Column Articles */}
        <div className="space-y-4">
          {sideArticles.map((article, index) => (
            <div key={index} className="flex md:flex-row flex-col bg-white rounded-[20px] overflow-hidden shadow-md p-5 cursor-pointer">
              <div className="md:w-1/3 w-full">
                <Image 
                  src={article.image} 
                  alt={article.title} 
                  width={150} 
                  height={150} 
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              <div className="md:w-2/3 w-full p-4">
                <h3 className="font-bold font-inter text-[18px] mb-1">{article.title}</h3>
                <p className="text-black text-[17px] font-poppins my-3">
                  {article.excerpt}
                </p>
                <div className="inline-block bg-[#3DB765] text-white px-3 py-1 text-[16px] font-inter uppercase font-medium rounded my-3">
                  {article.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;