import React from 'react'

const BookingListTabs = (props) => {
    const {setActiveStatusTab,activeStatusTab} = props
  return (
    
    <div className='grid grid-cols-5 py-4 font-semibold'>
        <div className={"p-3 text-center " + (activeStatusTab ==="All"? "text-red-400 active":"")} onClick={()=>setActiveStatusTab("All") }>All</div>
        <div className={"p-3 text-center " + (activeStatusTab ==="Confirmed"?"text-red-400 active":"")} onClick={()=>setActiveStatusTab("Confirmed")}>Confirmed</div>
        <div className={"p-3 text-center " + (activeStatusTab ==="Pending"?"text-red-400 active":"")} onClick={()=>setActiveStatusTab("Pending")}>Pending</div>
        <div className={"p-3 text-center " + (activeStatusTab ==="Cancelled"?"text-red-400 active":"")} onClick={()=>setActiveStatusTab("Cancelled")}>Cancelled</div>
        <div className={"p-3 text-center " + (activeStatusTab ==="Completed"?"text-red-400 active":"")} onClick={()=>setActiveStatusTab("Completed")}>Completed</div>
    </div>
  )
}

export default BookingListTabs