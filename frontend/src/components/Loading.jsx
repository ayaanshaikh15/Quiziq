import React from 'react'

function Loading() {
  return (
    <div className="flex items-center justify-center p-4 h-screen">
      <img src='./loading.gif' className="md:w-18 md:h-18 h-12 w-12" />
    </div>
  )
}

export default Loading