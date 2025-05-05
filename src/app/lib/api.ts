// lib/api.ts

import { Course, Recommendation, User } from "../types";
// import {imge} from '../../../public/images/hero-avatar.png';
export const fetchDashboardData = async () => {
  return {
    user: {
      name: "Alaston",
      role: "Software Developer",
      avatar: "/avatar.jpg",
      stats: [10, 20, 30, 40, 50],
      courseHistory: [
        { id: "1", title: "Lorem Ipsum is simply dummy", instructor: "Lorem Ipsum", status: "open", imageUrl: "/img2.png", progress: 60 },
        { id: "2", title: "Lorem Ipsum is simply dummy", instructor: "Lorem Ipsum", status: "completed", imageUrl: "/img2.png", progress: 100 },
        { id: "3", title: "Lorem Ipsum is simply dummy", instructor: "Lorem Ipsum", status: "completed", imageUrl: "/img2.png", progress: 100 },
        { id: "4", title: "Lorem Ipsum is simply dummy", instructor: "Lorem Ipsum", status: "completed", imageUrl: "/img2.png", progress: 100 },
      ],
    } as User,
    inProgress: [
      {
        id: "1",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        instructor: "Good Morning Alaston",
        status: "open",
        imageUrl:  "/images/dummmy.png",
        progress: 60,
        instructorAvatar :"/images/testimg.png"
      },
      {
        id: "2",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        instructor: "Good Morning Alaston",
        status: "open",
        imageUrl: "/images/dummmy.png",
        progress: 60,
        instructorAvatar :"/images/testimg.png"
      },
      {
        id: "3",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        instructor: "Good Morning Alaston",
        status: "open",
        imageUrl: "/images/dummmy.png",
        progress: 60,
        instructorAvatar :"/images/testimg.png"
      },
      {
        id: "4",
        title: "Lorem Ipsum tested",
        instructor: "Good Morning Alaston",
        status: "open",
        imageUrl: "/images/dummmy.png",
        progress: 60,
        instructorAvatar :"/images/testimg.png"
      },
    ] as Course[],
    recommendations: [
      {
        id: "1",
        title: "Lorem Ipsum is simply dummy text of the printing  industry ",
        instructor: "Kevin Gilbert",
        status: "open",
        imageUrl: "/images/slidedummy.png",
        rating: 5.0,
        students: 265700,
        level: "Beginner",
        duration: "6 hours",
        progress: 0,
      },
      {
        id: "2",
        title: "Lorem Ipsum is simply dummy text of the printing industry",
        instructor: "Kevin Gilbert",
        status: "open",
        imageUrl: "/images/slidedummy.png",
        rating: 5.0,
        students: 265700,
        level: "Beginner",
        duration: "6 hours",
        progress: 0,
      },
      {
        id: "3",
        title: "Lorem Ipsum is simply dummy text of the printing  industry",
        instructor: "Kevin Gilbert",
        status: "open",
        imageUrl: "/images/slidedummy.png",
        rating: 5.0,
        students: 265700,
        level: "Beginner",
        duration: "6 hours",
        progress: 0,
      },
      {
        id: "4",
        title: "Lorem Ipsum is simply dummy text of the printing  industry",
        instructor: "Kevin Gilbert",
        status: "open",
        imageUrl: "/images/slidedummy.png",
        rating: 5.0,
        students: 265700,
        level: "Beginner",
        duration: "6 hours",
        progress: 0,
      },
    ] as Recommendation[],
  };
};
