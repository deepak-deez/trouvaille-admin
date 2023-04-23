import React from 'react'
import "./footer.scss";

export default function footer() {
  return (
    <div className="2xl:h-[20vh] xl:h-[15vh] lg:h-[1vh] footer flex flex-col-reverse px-[71px] lg:flex-row justify-between items-end lg:items-start">
    <footer>Copyright © 2023 The Trouvaille.</footer>
    <ul className='flex flex-wrap gap-4 lg:gap-8 justify-center'>
      <li>Terms of Use</li>
      <li>Cookie Policy</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
  )
}
