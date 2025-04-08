import Image from "next/image";
import Hero from "./components/Homepage/Hero";
import GeneralInstruction from "./components/Homepage/GernalInstruction";
import FeaturedCourses from "./components/Homepage/FeaturedCourses";
import RecommendedCourses from "./components/Homepage/RecommendedCourses";
import Learner from "./components/Homepage/Learner";

export default function Home() {
  return (
<>
<Hero/>
<GeneralInstruction/>
<FeaturedCourses/>
<RecommendedCourses/>
<Learner/>
</>
  );
}
