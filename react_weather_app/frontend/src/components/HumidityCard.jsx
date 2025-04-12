import React from 'react'

function HumidityCard({humidity}) {
  return (
    <>
    {/* Humidity Card */}
      <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-sm font-semibold">Humidity</h3>
          <p className="text-2xl font-bold text-blue-600">
            {/* Can add dynamic value like good, normal, bad but need to add if-statement */}
            {humidity}% <span className="text-sm text-gray-400"></span></p>
          <div className="flex justify-between text-sm mt-2">
            <span>Good</span>
            <span>Normal</span>
            <span>Bad</span>
          </div>
          <div className="relative w-full bg-gray-200 h-2 mt-1 rounded-full">
            <div className="absolute bg-blue-400 h-2 rounded-full" style={{ width: `${humidity}%`}}></div>
          </div>
        </div>
    </>
  )
}

export default HumidityCard