

const Button = ({text, bgColor, textColor}: {text: string, bgColor: string, textColor: string}) => {
  return (
    <button className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 relative z-10 rounded-full`}>
      {text}
    </button>
  )
}

export default Button