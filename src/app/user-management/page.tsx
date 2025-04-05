import DoctorDetailsChart from '@/component/DoctorDetailsColumn'
import CustomerSatisfactionCard from '@/component/DoctorDetailsColumn'
import StaffDetailsChart from '@/component/StaffDetailsColumn'
import StaffOverviewCard from '@/component/StaffOverviewCard'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='flex'>
        <div className='mt-20 ml-2'>
            <StaffDetailsChart/>
        <div className='mt-5'>
            <DoctorDetailsChart/>
        </div>
        </div>
        <div className='mt-20 ml-2'>
            <StaffOverviewCard/>
        </div>
        </div>
    </div>
  )
}

export default page