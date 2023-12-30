import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import './Style.scss'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if (window.scrollY > 300) {
        setVisible(true)
      } else { setVisible(false) }
    })
  }, [])

  return (
    <a  className={`btnToTop ${visible? "apear" :"hide"}`} href='#Header' >
    <IoIosArrowUp className='btn' />
  </a>
  );
};

export default ScrollButton;
