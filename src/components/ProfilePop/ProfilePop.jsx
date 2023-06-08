import Cookies from 'js-cookie';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./style.scss";

const ProfilePop = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch()
    function logout() {
        Cookies.remove("TOKEN");
        localStorage.removeItem("userDetails")
        dispatch({type:"ADMIN_SUCCESS", payload: null})
        navigate("/");
    };

    

  const { userDetails } = useSelector((state) => state.userLogin);
  const userName = userDetails?.data?.userDetails.userName;
  const userType = userDetails?.data?.userDetails.userType;
  const UserId = userDetails?.data?.userDetails._id;
//   const UserId=id.slice(1,10)
  
    return (
        <>
         <div className='bg-[#F5F9FF] z-30  w-[15rem] rounded-lg h-[15rem] absolute  right-8 top-12'>
            <div className='arrow-up absolute right-[80px] top-[-10px]
            '></div>
            
            <div className='flex text-center  flex-col sjustify-center items-center space-y-2 p-2'>
            <h2> Your Profile:
            </h2>
            <h3 className=''> Name: {userName}</h3>
            <h3 className=''> Id: {UserId}</h3>
            <h3 className=''> UserType: {userType}</h3>
            <button  className=" w-[80%] bg-[#E75C54] p-1 rounded-md text-white ">Edit Profile</button>
            <button  className=" w-[80%] bg-[#E75C54] p-1 rounded-md text-white " onClick={()=>{
             logout()
            }}>Log Out</button>
            
            </div>
           
        </div>
        </>
       
    );
}

export default ProfilePop;
