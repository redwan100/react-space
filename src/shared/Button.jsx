import React from 'react'

const Button = ({text}) => {
  return (
      <button className='border-2 border-blue-400 py-1 px-4 text-xs md:text-sm lg:text-lg text-blue-300 rounded'>{ text}</button>
  )
}

export default Button