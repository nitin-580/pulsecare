"use client";
import { Bell, Search, Moon, Sun, UserCircle,Plus } from "lucide-react";
import Link from "next/link";

export default function TopNavigation({ isOpen }: { isOpen: boolean }) {
  return (
    <header className={`fixed top-0 ${isOpen ? "left-56 w-[calc(100%-224px)]" : "left-16 w-[calc(100%-64px)]"} h-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between px-6 z-10 transition-all`}>
      {/* Left Section - Title */}
      <div className="text-2xl font-bold text-gray-900 dark:text-white"></div>

      {/* Center - Search Bar */}
      <div className="relative w-1/3 ml-10 hidden md:block">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-10 text-gray-700 dark:text-white bg-white border dark:bg-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 border-b text-sm"
        />
        <Search className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" size={18} />
      </div>
      <Link href="/booking">
      <div className="bg-indigo-500 p-2 rounded-lg font-Roboto text-white flex gap-x-2 hover:bg-blue-400">
        <Plus />
        New Appointment
      </div>
      </Link>
      {/* Right Section - Icons */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
        </button>

        <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-100 rounded-lg transition">
          <Moon size={20} />
        </button>

        <button className="p-2 flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-lg transition">
          <UserCircle size={20} />
          <span className="hidden md:block text-sm">Dr. John Doe</span>
        </button>
      </div>
    </header>
  );
}
