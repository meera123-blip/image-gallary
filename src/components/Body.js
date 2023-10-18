import React from 'react'
import SearchBarHeader from './searchBarHeader'
import { Outlet, useLocation } from 'react-router-dom'


const Body = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div>
      {!location.pathname.startsWith('/image/') && <SearchBarHeader />}
     <Outlet/>
    </div>
  )
}

export default Body