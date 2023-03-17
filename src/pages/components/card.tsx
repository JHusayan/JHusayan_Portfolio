import React from 'react'
interface ICardProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}
const Card = (props:ICardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-neutral-900 h-[300px] flex justify-center items-center">
        <div className="px-6 py-4">
            {props.children}
        </div>
    </div>
  )
}

export default Card