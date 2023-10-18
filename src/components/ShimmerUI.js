import React from 'react'

const ShimmerUI = () => {
  return (
    <div className="w-full p-5 pb-10 mx-auto mb-4 gap-5 columns-3 space-y-3 ">
      {[...Array(10)].map((_, index) => (
        <div key={index}>
           <div className="relative overflow-hidden">
      <div className="w-full h-20 animate-pulse bg-gray-300"></div>
    </div>
        </div>
      ))}
    </div>
  )
}

export default ShimmerUI