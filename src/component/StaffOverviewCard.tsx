import { Users, Stethoscope, Briefcase, User } from "lucide-react";

const staffData = {
  doctors: 45,
  nurses: 80,
  administrative: 25,
  supportStaff: 50,
};

const totalStaff = Object.values(staffData).reduce((a, b) => a + b, 0);

const StaffOverviewCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 w-full max-w-sm border">
      <h2 className="text-md font-semibold flex items-center gap-2">
        <Users className="text-blue-500 text-xs" />
        Staff Overview
      </h2>
      <p className="text-2xl font-bold text-gray-800 mt-2">{totalStaff} Total Staff</p>
      <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
        <div className="flex items-center gap-2">
          <Stethoscope className="w-5 h-5 text-green-500" /> Doctors: {staffData.doctors}
        </div>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-purple-500" /> Nurses: {staffData.nurses}
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-orange-500" /> Admin: {staffData.administrative}
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-gray-500" /> Support Staff: {staffData.supportStaff}
        </div>
      </div>
    </div>
  );
};

export default StaffOverviewCard;
