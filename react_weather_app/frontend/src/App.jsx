import React from "react"
import HomeLayoutUi from "./pages/HomeLayoutUi"

function App() {
  return (
    <>
      <div 
      className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-700 text-white overflow-hidden">
        {/* Homepage layout */}
        <HomeLayoutUi />
      </div>
    </>
  )
}

export default App
