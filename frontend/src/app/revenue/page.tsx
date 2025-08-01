import { div } from 'framer-motion/client'
import React from 'react'
import AppointmentForm from '@/component/PatientBillColumn'
import PatientRevenueChart from '@/component/PatientBillColumn'
import UtilityBillsSection from '@/component/UtilityBillColumn'
import SalaryDetailsCard from '@/component/SalaryColumn'
import FinancePieChart from '@/component/HospitalFinancePie'
import TotalCopiesCard from '@/component/Card1'
import RevenueChart from '@/component/RevenueChart'

const page = () => {
  return (
    <div className='mt-5 ml-4 mb-4'>
        <div className='flex mb-5 gap-x-4'>
            <TotalCopiesCard  title="Revenue" totalCopies={101398} changePercentage={5.3} subtitle='Updated this month' icons=''/>
            <TotalCopiesCard  title="Expenses" totalCopies={1139} changePercentage={5.3} subtitle='Updated this month' icons=''/>
            <TotalCopiesCard  title="Net Profit" totalCopies={15598} changePercentage={5.3} subtitle='Updated this month' icons=''/>
            <TotalCopiesCard  title="Pending Payments" totalCopies={13445} changePercentage={5.3} subtitle='Updated this month' icons=''/>
        </div>
        <div className='flex gap-x-4'>
        <FinancePieChart />
        <RevenueChart />
        </div>
         <div className='mt-5 flex gap-x-4 '>
        <PatientRevenueChart />
        <UtilityBillsSection />
    </div>
    <div className='mt-5 flex gap-x-4'>
            <SalaryDetailsCard />
            <UtilityBillsSection/>
        </div>
    </div>
  )
}

export default page