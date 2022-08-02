import React, { useEffect, useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading]);

  return (
    <>
      <div className="card justify-center h-60 bg-base-200 m-4">
        <div className="hero-content text-center mx-auto">
          <h1 className="text-5xl font-bold">Welcome, {user.email}</h1>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
