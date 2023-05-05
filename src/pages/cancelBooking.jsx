import React from 'react';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar';
import Sidebar from '../component/Sidebar/Sidebar';
import CancelDialog from '../component/CancelDialog/cancelDialog';

const CancelBooking = () => {
    return (
       <div className="relative">
       
        <div className="flex">
        <Sidebar />
        <div className="w-full bg-[#f5f7f7] ">
          <Navbar heading="All Users" />
          <div className="md:h-[90vh]">
          <CancelDialog className="absolute"/>
          </div>
          <Footer />
        </div>
      </div>
    
       </div>
    );
}

export default CancelBooking;
