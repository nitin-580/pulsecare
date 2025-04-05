import React from 'react'

const AiDashboard = () => {
  return (
    <div>
        <div className='flex gap-x-2 items-center justify-center mr-5'>
        <div className='border rounded-lg p-6'>
            <h2 className='text-lg font-semibold'>Risk Analysis based on Medical History</h2>
        </div>
        <div className='border rounded-lg p-6'>
            <h2 className='text-lg font-semibold'>Financial Analysis based on Performance</h2>
        </div>
        <div className='border rounded-lg p-6'>
            <h2 className='text-lg font-semibold'>Competitor Based Performance</h2>
        </div>
        </div>
    </div>
  )
}

export default AiDashboard