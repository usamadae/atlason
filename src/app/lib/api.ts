// lib/api.ts

import { Course, Recommendation, User } from "../types";
export const fetchDashboardData = async () => {
  return {
    user: {
      name: "Alaston",
      role: "Software Developer",
      avatar: "/avatar.jpg",
      stats: [10, 20, 30, 40, 50],
      courseHistory: [
        { id: "1", title: "Lorem Ipsum", instructor: "Alaston", status: "open", imageUrl: "/img1.png", progress: 60 },
        { id: "2", title: "Course 2", instructor: "Alaston", status: "completed", imageUrl: "/img2.png", progress: 100 },
      ],
    } as User,
    inProgress: [
      {
        id: "1",
        title: "Lorem Ipsum Is Simply Dummy Text",
        instructor: "Good Morning Alaston",
        status: "open",
        imageUrl: "/img1.png",
        progress: 60,
      },
    ] as Course[],
    recommendations: [
      {
        id: "2",
        title: "Lorem Ipsum",
        instructor: "Kevin Gilbert",
        status: "open",
        imageUrl: "/img3.png",
        rating: 5.0,
        students: 265700,
        level: "Beginner",
        duration: "6 hours",
        progress: 0,
      },
    ] as Recommendation[],
  };
};
