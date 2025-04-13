import React from 'react'

function FeelLikeCard({feellike, unit}) {
  return (
    <>
     <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-sm font-semibold">Feel like</h3>
          <p className="text-2xl font-bold text-blue-600">
            {/* Can add dynamic value like good, normal, bad but need to add if-statement */}
            {feellike}° <span className="text-sm text-gray-400"></span></p>
          <div className="flex justify-between text-sm mt-2">
            <span>0°</span>
            <span>50°</span>
            <span>100°</span>
          </div>
          <div className="relative w-full bg-gray-200 h-2 mt-1 rounded-full">
            <div className="absolute bg-blue-400 h-2 rounded-full" style={{ width: `${feellike}%`}}></div>
          </div>
        </div>
    </>
  )
}

export default FeelLikeCard