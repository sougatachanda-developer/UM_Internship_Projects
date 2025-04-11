import React from "react"
import HomePage from "./pages/HomePage"
import HomeLayoutUi from "./pages/HomeLayoutUi"

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-700 text-white">
        <HomePage />

        {/* Later will focus on ui */}
        {/* <HomeLayoutUi /> */}
      </div>
    </>
  )
}

export default App
