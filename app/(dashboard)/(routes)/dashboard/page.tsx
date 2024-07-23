import { UserButton } from "@clerk/nextjs";
import React from "react"

const DashboardPage = () => {
  return (
     <div>
        <p>Dashboard Page (Protected)</p>
        <UserButton afterSignOutUrl="/"/>
     </div>
  );
}

export default DashboardPage;