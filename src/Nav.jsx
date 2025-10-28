import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='dark:bg-[#776205fd] py-5 dark:text-white border-b-2 border-gray-700 '>
        <nav className='container mx-auto flex justify-between'>
            <Link to="/">علي التكيف احسن من المروحه </Link>
            <Link to="/fan">لا ياعم الجو ساقعه المروحه احسن </Link>
        </nav>
    </div>
  )
}
