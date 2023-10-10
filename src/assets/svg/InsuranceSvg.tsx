import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgSearch = (props: SVGProps<SVGSVGElement>) => {
  let color = props.color ? props.color : 'currentColor'
  return (
<svg xmlns="http://www.w3.org/2000/svg" 
width="1em"
height="1em"
viewBox="0 0 24 25" fill="none"
{...props}>
  <g clipPath="url(#clip0_398_118)">
    <path d="M11.902 0.495026C5.42282 0.504059 0.104492 5.82856 0.104492 12.3148C0.104492 18.8011 5.42467 24.1274 11.9001 24.1382C18.4089 24.1509 23.7681 18.783 23.7477 12.2733C23.7273 5.79965 18.383 0.495026 11.902 0.495026ZM17.4651 13.7439H15.3678C13.3539 13.7439 13.3539 13.7439 13.3539 15.8036V17.8615H10.4889V15.7585C10.4889 13.7439 10.4889 13.7439 8.44914 13.7439H6.37781V10.8893H8.56782C10.4889 10.8893 10.4889 10.8893 10.4889 8.91811V6.77169H13.3539V8.87114C13.3539 10.8893 13.3539 10.8893 15.4123 10.8893H17.4706L17.4651 13.7439Z" fill={color}/>
  </g>
  <defs>
    <clipPath id="clip0_398_118">
      <rect width="23.6432" height="23.6432" fill={color} transform="translate(0.104492 0.495026)"/>
    </clipPath>
  </defs>
</svg>
)}
const Memo = memo(SvgSearch)
export default Memo
