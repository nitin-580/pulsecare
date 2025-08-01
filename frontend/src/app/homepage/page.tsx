import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SideNav from "@/component/SideNavigation";
import TopNavigation from "@/component/TopNavigation";
import TotalCopiesCard from "@/component/Card1";
import PatientOverviewChart from "@/component/PatientOverviewChart";
import RevenueChart from "@/component/RevenueChart";
import DoctorOverviewChart from "@/component/Card2";
import ReportsCard from "@/component/Card3";
import { FileText,Bed } from 'lucide-react';
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
        <div>
        <div className="flex-col flex-1">
          <div className=" p-5 z-8 flex gap-x-3">
            <TotalCopiesCard 
            title="Total Patients"
            totalCopies={1298} 
             changePercentage={5.3} 
             subtitle="20 more than yesterday"
             icons=""
      />
      <TotalCopiesCard 
      title="Total Invoices"
            totalCopies={1567} 
             changePercentage={14.8} 
             subtitle="50 more than yesterday"
             icons=""
      />
      <TotalCopiesCard 
      title="Emergency"
            totalCopies={98} 
             changePercentage={5.3} 
             subtitle="20 more than yesterday"
             icons=""
      /><TotalCopiesCard 
      title="Available Beds"
      totalCopies={123} 
       changePercentage={5.3} 
       subtitle="20 more than yesterday"
       icons=""
/>
</div>

  <div className=" p-4 flex gap-x-2">
          <PatientOverviewChart/>
          <RevenueChart />
          </div>
          <div className="p-4 flex gap-x-2">
          <DoctorOverviewChart date="23/02/2025"/>
          <ReportsCard />
          <ReportsCard />
          </div>
    </div>
    </div>
</div>
  );
}

export default page;