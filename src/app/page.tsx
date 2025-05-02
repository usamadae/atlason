'use client';
import { GetServerSideProps } from "next";
import Image from "next/image";
import Hero from "./components/Homepage/Hero";
import GeneralInstruction from "./components/Homepage/GernalInstruction";
import FeaturedCourses from "./components/Homepage/FeaturedCourses";
import RecommendedCourses from "./components/Homepage/RecommendedCourses";
import Learner from "./components/Homepage/Learner";
import Testimonial from "./components/Homepage/Testimonial";
import FocusOnYourGoal from "./components/Homepage/FocusOnYourGoal";
import StartLearning from "./components/Homepage/StartLearning";
import LatestNews from "./components/Homepage/LatestNews";
// import GoogleTranslate from './components/Homepage/GernalInstruction'; 
export default function Home() {
  return (
    <>
      <Hero />
      <GeneralInstruction />
      <FeaturedCourses />
      <RecommendedCourses />
      <Learner />
      <Testimonial />
      <FocusOnYourGoal />
      <StartLearning />
      <LatestNews />
      {/* <GoogleTranslate/> */}
    </>
  );
}
