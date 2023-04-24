import React from 'react'
import "./navbarLoginForm.scss"

export default function NavBarLoginForm() {
  return (
    <div className="lg:hidden flex flex-row mt-[10px] gap-[28px]">
        <p className="new-user-text text-[12px] lg:text-[14px] m-auto">
            New to here?
        </p>
        <button className="create-account-button py-[10px] px-[20px]">
            Create an account
        </button>
    </div>
  )
}
