import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./navbarLoginForm.scss"

export default function NavBarLoginForm() {
  return (
    <div className="lg:hidden flex flex-row mt-[10px] gap-[28px]">
        <p className="new-user-text text-[12px] lg:text-[14px] m-auto">
            New to here?
        </p>
        <Link className="create-account-button py-[9px] m-auto px-[20px]" to="/signup">
                Create an account
        </Link>
    </div>
  )
}
