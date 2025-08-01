"use client";
import { useState } from "react";
import { 
  Users, Calendar, LayoutDashboard, Settings, LogOut, 
  ArrowLeftCircle, ChevronRight, ChartLine, IndianRupee, 
  PersonStanding, Building, Star,Bed, TestTubeDiagonal,Cross
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Overview", icon: LayoutDashboard, link: "/homepage" },
  { name: "Patients", icon: Users, link: "/patients" },
  { name: "Billing & Invoices", icon: Settings, link: "/billing" },
  { name: "Clinicians", icon: Building, link: "/clinicians" },
  { name: "Appointments", icon: Calendar, link: "/appointments" },
  { name: "Finance", icon: IndianRupee, link: "/revenue" },
  { name: "Pathalogy", icon: TestTubeDiagonal, link: "/pathalogy" },
  { name: "Pharmacy", icon: Cross, link: "/pharmacy" },
  { name: "Analytics", icon: ChartLine, link: "/analytics" },
  { name: "User Management", icon: PersonStanding, link: "/user-management" },
  { name: "PulseCare AI", icon: Star, link: "/ai" },
  { name: "OT Management", icon: Bed, link: "/otmanagement" },
  { name: "Settings", icon: Settings, link: "/settings" },
  
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-screen bg-white border-r shadow-lg transition-all duration-300 z-30 ${isOpen ? "w-56" : "w-20"} flex flex-col`}
      >
        {/* Logo & Toggle Button */}
        <div className="flex items-center justify-between p-4">
          <span className={`text-xl font-bold text-red-500 transition-all ${isOpen ? "block" : "hidden"}`}>
            PulseCare
          </span>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition"
            aria-label="Toggle Sidebar"
          >
            {isOpen ? <ArrowLeftCircle size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.link} 
              className="flex items-center gap-2 p-3 text-gray-700 hover:bg-blue-100 transition rounded-lg mx-2 text-sm"
            >
              <item.icon className="w-5 h-5 text-blue-500" />
              <span className={`${isOpen ? "block" : "hidden"} transition-all`}>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4">
          <button 
            className="flex items-center gap-4 p-3 text-red-600 hover:bg-red-100 transition rounded-lg w-full text-sm"
          >
            <LogOut className="w-5 h-5" />
            <span className={`${isOpen ? "block" : "hidden"}`}>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className={`flex-1 transition-all duration-300 ${isOpen ? "ml-44" : "ml-24"} p-6`}
      >
        {children}
      </div>
    </div>
  );
}
