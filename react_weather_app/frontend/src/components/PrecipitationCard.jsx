import React from 'react'

function PrecipitationCard({precipitation}) {
  const precipitate = Math.round(precipitation/10)
  return (
    <>
    {/* Precipitation Card */}
    <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-sm font-semibold">Precipitation</h3>
          <p className="text-2xl font-bold text-blue-600">{precipitation} %</p>
          <div className="flex justify-between text-sm mt-2">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i < precipitate ? "bg-blue-400" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
    </>
  )
}

export default PrecipitationCard