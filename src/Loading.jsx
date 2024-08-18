import React from 'react'

import loadingSvg from '../public/Double Ring@1x-1.0s-200px-200px.svg'

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={loadingSvg} alt="" />
    </div>
  )
}

export default Loading

