import React from 'react'
interface TitleProps extends React.HtmlHTMLAttributes<HTMLHeadingElement>{}
const Title = (props:TitleProps) => {
  return (
    <h1 className="text-5xl md:mb-6 font-medium mb-0 leading-none tracking-tight text-standard-red md:text-5xl lg:text-6xl select-none underline underline-offset-8 decoration-2 decoration-standard-white">
        {props.children}
    </h1>
  )
}

export default Title