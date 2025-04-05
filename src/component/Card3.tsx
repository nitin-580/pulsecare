// src/components/TotalCopiesCard.tsx
import { FileText, Bell } from 'lucide-react';

const ReportsCard: React.FC = () => {
  const notifications = [
    "Scheduled hospital cleaning at 5 PM",
    "Oxygen cylinders need replacement by tomorrow",
    "Routine maintenance check-up at 10 AM",
    "New medical supplies arriving today",
  ];

  return (
    <div className="w-[250px] h-[350px] p-4 bg-white border rounded-xl mt-0">
      <div className="text-xl font-semibold text-black">Reports</div>
      <p className="text-gray-500 text-sm">According to availability</p>
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold text-gray-500"></h3>
      </div>
      <div className='px-7'>
        <h1 className="text-3xl font-bold text-black items-center flex justify-right mt-1"></h1>
        <p className="text-sm text-black"></p>
      </div>
      
      {/* Notifications Section */}
      <div className="mt-4 border-t pt-2">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="text-yellow-500" size={18} />
          <h2 className="text-md font-semibold text-black">Notifications</h2>
        </div>
        <ul className="text-sm text-gray-600">
          {notifications.map((notification, index) => (
            <li key={index} className="border-b py-1">{notification}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReportsCard;