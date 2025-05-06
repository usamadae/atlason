// lib/courseActivity.ts
export async function fetchCourseProgress(type: 'progress' | 'inprogress') {
    // Static mock, replace with actual API
    // lib/courseActivity.ts

    // const res = await fetch(`/api/course-activity?status=${status}`);
    // if (!res.ok) throw new Error('Failed to fetch progress');
    // return await res.json(); 
  
    if (type === 'progress') {
      return { progress: 75 };
    } else {
      return { progress: 40 };
    }
  }
  