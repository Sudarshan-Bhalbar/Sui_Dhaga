import React from 'react'

const loading = () => {
  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>
    </div>
  )
}

export default loading