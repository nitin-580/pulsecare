// src/components/TotalCopiesCard.tsx
import { FileText,Bed } from 'lucide-react';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';

interface TotalCopiesCardProps {
  totalCopies: number;
  changePercentage: number; // Positive or negative percentage change
  subtitle: string;
  title: string;
  icons:string;
}

const TotalCopiesCard: React.FC<TotalCopiesCardProps> = ({
  totalCopies,
  changePercentage,
  subtitle,
  title,
  icons,
}) => {
  // Determine if the change is positive or negative for styling/icon
  const isIncrease = changePercentage >= 0;
  const changeSign = isIncrease ? '+' : '-';
  const changeArrow = isIncrease ? '↑' : '↓';

  return (
    <div className="w-[250px] h-[120px] bg-white from-dashboard-purple to-dashboard-dark-purple rounded-lg border hover:bg-blue-100 duration-50 p-1 text-white flex flex-col justify-between relative font-roboto mt-14">
      <div className="absolute  right-2 text-black cursor-pointer text-2xl  ">...</div>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 text-gray-500">
        < FileText className="w-5 h-5 text-gray-500" />
        </div>
        <h3 className="text-lg font-bold text-gray-500">{title}</h3>
      </div>
      <div className='px-7'>
      <h1 className="text-3xl font-bold text-black items-center flex justify-right mt-1">{totalCopies.toLocaleString()}</h1>
      <div className="text-sm text-green-500">
        {changeSign}
        {Math.abs(changePercentage).toFixed(1)}% {changeArrow}
      </div>
      <p className="text-sm text-black">{subtitle}</p>
      </div>
    </div>
  );
};

export default TotalCopiesCard;