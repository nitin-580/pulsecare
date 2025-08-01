import TotalCopiesCard from '@/component/Card1'
import ReportsCard from '@/component/Card3'
import StaffAvailability from '@/component/PathalogyStaffAvail'
import PatientLabData from '@/component/PatientLabData'
import TestCard from '@/component/TestCard'
import React from 'react'

const page = () => {
  return (
    <div>
         <div className='flex gap-x-2 mt-5 ml-2'>
        <TotalCopiesCard
            title="Total Appointments"
            totalCopies={98} 
             changePercentage={5.3} 
             subtitle="20 more than yesterday"
             icons=""
      />
      <TotalCopiesCard 
            title="Confirmed"
            totalCopies={56} 
             changePercentage={5.3} 
             subtitle="20 more than yesterday"
             icons=""
      />
      <TotalCopiesCard 
            title="Pending"
            totalCopies={42} 
             changePercentage={5.3} 
             subtitle="20 more than yesterday"
             icons=""
      />
      <TotalCopiesCard 
            title="Total Revenue"
            totalCopies={5600} 
             changePercentage={5.3} 
             subtitle="20 more than yesterday"
             icons=""
      />
        </div>
        <div className='mt-5 ml-2 flex gap-x-2'>
        <PatientLabData />
        <TestCard />
        </div>
        <div className='mt-5 ml-2 flex gap-x-4'>
        <StaffAvailability />
        <ReportsCard />
        </div>
    </div>
  )
}

export default page