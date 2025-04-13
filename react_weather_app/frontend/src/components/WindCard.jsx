import React from 'react'

function WindCard({wind_speed}) {
  return (
    <>
      {/* Wind Card */}
      <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-sm font-semibold">Wind</h3>
          <p className="text-2xl font-bold text-blue-600">{wind_speed} km/h</p>
          <div className="flex justify-center mt-2">
            {/* Wind gauge design */}
            {/* <div className="relative w-24 h-12 border-b-2 border-blue-400 rounded-t-full"></div> */}
          </div>
        </div>
    </>
  )
}

export default WindCard