import TotalCopiesCard from '@/component/Card1';
import CustomerSatisfactionCard from '@/component/CustomerSatisfaction';
import StaffDetailsChart from '@/component/StaffDetailsColumn';
import PatientDemographicsMap from '@/component/StaffDetailsColumn';
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='flex gap-x-2 mt-5 ml-2'>
        <TotalCopiesCard 
            title="Total Patients"
            totalCopies={1298} 
             changePercentage={5.3} 
             subtitle="20 more than yesterday"
             icons=""
      />
      <TotalCopiesCard 
            title="Total Patients"
            totalCopies={1298} 
             changePercentage={5.3} 
             subtitle="20 more than yesterday"
             icons=""
      />
      <TotalCopiesCard 
            title="Total Patients"
            totalCopies={1298} 
             changePercentage={5.3} 
             subtitle="20 more than yesterday"
             icons=""
      />
      <TotalCopiesCard 
            title="Total Patients"
            totalCopies={1298} 
             changePercentage={5.3} 
             subtitle="20 more than yesterday"
             icons=""
      />
        </div>
        <div className='flex'>
        <div className='w-screen max-w-3xl ml-2 items-end'>
        <CustomerSatisfactionCard />
        </div>
        </div>
    </div>
  )
}

export default page;