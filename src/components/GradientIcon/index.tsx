import React from 'react'

interface IGradientIconProps {
    children: React.ReactElement;
    color1?: string;
    color2?: string;
}

export const GradientIcon = ({children, color1, color2}: IGradientIconProps) => {
  return (
    <>
        <svg width="0" height="0">
            <linearGradient id="icon-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop stopColor={color1 ?? "#7928CA"} offset="20%" />
                <stop stopColor={color2 ?? "#FF0080"} offset="80%" />
            </linearGradient>
        </svg>
        {React.cloneElement(children, {style: {fill: "url(#icon-gradient)"}})}
    </>
  )
}
