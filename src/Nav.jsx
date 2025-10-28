import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='dark:bg-gray-950 py-5 dark:text-white bg-gray-50 border-b-2 border-gray-700 text-black '>
        <nav className='container mx-auto flex justify-between'>
            <Link to="/">علي التكيف احسن من المروحه </Link>
            <Link to="/fan">لا ياعم الجو ساقعه المروحه احسن </Link>
        </nav>
    </div>
  )
}
