"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
interface stylingTypes {
  containerStyles: string,
  btnStyles: string,
  iconsStyles: string
}
const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}:stylingTypes) => {
    const swiper = useSwiper()
  return  <div className={containerStyles}>
      <button onClick={() => swiper.slidePrev()} className={btnStyles}><PiCaretLeftBold className={iconsStyles}/></button>
      <button onClick={() => swiper.slideNext()} className={btnStyles}><PiCaretRightBold className={iconsStyles}/></button>
    </div>
}

export default WorkSliderBtns
