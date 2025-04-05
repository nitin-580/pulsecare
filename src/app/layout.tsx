import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNav from "@/component/SideNavigation";
import TopNavigation from "@/component/TopNavigation";
import TotalCopiesCard from "@/component/Card1";
import PatientOverviewChart from "@/component/PatientOverviewChart";
import RevenueChart from "@/component/RevenueChart";
import DoctorOverviewChart from "@/component/Card2";
import ReportsCard from "@/component/Card3";
import { FileText,Bed } from 'lucide-react';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PulseCare",
  description: "Centralised HealthCare System",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <SideNav children={undefined} />
        <div className="flex-col">
          <TopNavigation isOpen={false} />
    </div>
          <main className="">{children}</main>
      </body>
    </html>
  );
}
