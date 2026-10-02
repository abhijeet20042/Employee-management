import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/createTask'
import AllTask from '../../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='w-full bg-black min-h-screen'>
    
    <Header />
    <div className='bg-[#1c1c1c] p-5 mt-7 rounded'>
    <CreateTask />
    <AllTask />

</div>
</div>
  )
}

export default AdminDashboard
