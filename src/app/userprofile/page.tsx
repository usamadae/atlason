"use client";

import { useEffect, useState } from "react";

export default function UserProfile() {
  const [userData, setUserData] = useState({
    email: "",
    userId: "",
    userName: "",
    roleName: "",
    roleDescription: "",
  });

  useEffect(() => {
    const email = localStorage.getItem("Email") || "";
    const userId = localStorage.getItem("UserId") || "";
    const userName = localStorage.getItem("UserName") || "";
    const roleName = localStorage.getItem("RoleName") || "";
    const roleDescription = localStorage.getItem("RoleDescription") || "";

    setUserData({
      email,
      userId,
      userName,
      roleName,
      roleDescription,
    });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Inter, sans-serif" }}>
      <h1 className="lg:text-[60px]">
        User <span style={{ color: "#4CAF50", textDecoration: "underline" }}>Profile</span>
      </h1>

      <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
        {/* Left Image Section */}
        <div>
          <img
            src="/images/profileimage.png"
            alt="Profile"
            style={{ width: "300px", borderRadius: "10px" }}
          />
        </div>

        {/* User Info Section */}
        <div>
          <h2 className="margin-bottom:0.5rem  font-semibold  lg:text-[65px]" >{userData.userName || "Your Name"}</h2>
          <p className="font-medium lg:text-[24px] lg:leading-[55px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p className="font-medium   lg:text-[28px] " style={{ color: "#4CAF50" }}>{userData.email}</p>


        </div>

      </div>
      <div style={{ marginTop: "2rem" }}>
        <h3 className="lg:text-[65px]  font-semibold lg:mb-10 " >Account  <span className="lg:text-[65px]  font-semibold " style={{ color: "#4CAF50" }}> Details</span></h3>
        {/* <div  className="mainProfile" ><p><strong>User ID:</strong></p><p> {userData.userId}</p></div> */}
        <div className="mainProfile   flex justify-between font-medium  lg:w-[70%] lg:mb-10 items-start"    ><div className=" w-[100%]"><p className="lg:text-[22px]  w-[100%]"><strong>User Name:</strong></p></div><div  className=" w-[100%]"><p className=" w-[100%] font-bold  lg:text-[22px]   bg-[#F9F9F9]  px-6  py-2 " >{userData.userName || "Your Name"}</p></div> </div>
        <div className="mainProfile   flex justify-between  font-medium  lg:w-[70%] lg:mb-10"    ><div className=" w-[100%]"><p className="lg:text-[22px]"><strong>Email:</strong></p></div><div  className=" w-[100%]"> <p className=" w-[100%] font-bold  lg:text-[22px]   bg-[#F9F9F9]  px-6  py-2 " >{userData.email}</p></div></div>
        <div className="mainProfile   flex justify-between  font-medium  lg:w-[70%] lg:mb-10"    ><div className=" w-[100%]"> <p className="lg:text-[22px]"><strong>Role Name:</strong></p></div><div  className=" w-[100%]"><p className=" w-[100%] font-bold  lg:text-[22px]   bg-[#F9F9F9]  px-6  py-2 " >{userData.roleName}</p></div> </div>
        <div className="mainProfile flex justify-between font-medium  lg:w-[70%] lg:mb-10" ><div className=" w-[100%]"> <p className="lg:text-[22px]"><strong>Role Description:</strong> </p></div><div  className=" w-[100%]"><p className=" w-[100%] font-bold bg-[#F9F9F9]  lg:text-[22px] px-6  py-2">{userData.roleDescription}</p></div></div>
      </div>
      {/* Optional Upload Section */}
      {/* <div
        style={{
          marginTop: "2rem",
          border: "2px dashed #ccc",
          borderRadius: "8px",
          padding: "2rem",
          textAlign: "center",
          width: "400px"
        }}
      >
        <span style={{ fontSize: "2rem", color: "#4CAF50" }}>⬆</span>
        <p>Upload something here</p>
      </div> */}
    </div>
  );
}
