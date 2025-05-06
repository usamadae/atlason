import Sidebar from '../dashboard/components/Sidebar';
import TopBar from "../dashboard/components/TopBar";
import StudentMessage from "../instructorDashboard/component/Studentmessage";
import CourseActivity from './component/CourseActivity';
import ActivityGraph from './component/ActivityGraph';
import SubmissionsTable from './component/Submission';
import InstructorList from './component/InstructorList';
import BestInstructorSimple from './component/BestInstructor';
// import Banner from "./components/Banner";
// import InProgressCourses from "./components/InProgressCourses";
// import Recommendations from "./components/Recommendations";
// import ProfileCard from "./components/ProfileCard";
import { fetchDashboardData } from "../lib/api";

export default async function DashboardPage() {
//   const { user, inProgress, recommendations } = await fetchDashboardData();

  return (
    <>
    <div className="flex min-h-screen ">
      <Sidebar />
      <main className="flex-1 bg-[#EBEBEB] p-4 w-full">
      <TopBar />
        <div  className='flex justify-between w-[100%] mt-5' > 
        
          <div className='flex flex-col w-[78%] justify-between '>
           <div  className='flex   w-[100%] justify-between '>
            <StudentMessage/>
            <CourseActivity/>
            <ActivityGraph/>
            </div>
            <div className=' mt-10'>
            <SubmissionsTable/>
            </div>
        </div>
        <div className='flex flex-col w-[20%] justify-between'>
          <div>
          <BestInstructorSimple/>
          </div>
          <div>
          <InstructorList/>

          </div>
          
        </div>
        </div>
        {/* <Banner />
        <InProgressCourses courses={inProgress} />
        <Recommendations data={recommendations} />  */}
      </main>
      {/* <ProfileCard user={user} /> */}
    </div>
    </>
  );
}