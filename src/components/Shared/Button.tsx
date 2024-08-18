import React from 'react'

const Button = ({text, bgColor, textColor, handler}: {text: string, bgColor: string, textColor: string, handler: () => void}) => {
  return (
    <button className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 relative z-10 rounded-full`}>
      {text}
    </button>
  )
}

export default Button