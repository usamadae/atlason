// types/index.ts
export interface Course {
    id: string;
    title: string;
    instructor: string;
    status: 'open' | 'completed';
    imageUrl: string;
    progress: number;
    instructorAvatar: string;
  }
  
  export interface Recommendation extends Course {
    rating: number;
    students: number;
    level: string;
    duration: string;
  }
  
  export interface User {
    name: string;
    role: string;
    avatar: string;
    stats: number[];
    courseHistory: Course[];
  }
  