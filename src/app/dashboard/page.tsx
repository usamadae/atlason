import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Banner from "./components/Banner";
import InProgressCourses from "./components/InProgressCourses";
import Recommendations from "./components/Recommendations";
import ProfileCard from "./components/ProfileCard";
import { fetchDashboardData } from "../lib/api";

export default async function DashboardPage() {
  const { user, inProgress, recommendations } = await fetchDashboardData();

  return (
    <>
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-4">
        <TopBar />
        <Banner />
        <InProgressCourses courses={inProgress} />
        <Recommendations data={recommendations} />
      </main>
      <ProfileCard user={user} />
    </div>
    </>
  );
}