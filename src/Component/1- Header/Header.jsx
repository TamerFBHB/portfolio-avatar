import { useState } from "react";
import "./Header.scss";
import { IoClose } from "react-icons/io5";
import DarkMode from "../../Component/00- dark-mode/DarkMode";

const Header = () => {

    const [showModel , setShowModel] =useState(false)
    
    return (
        <header id="Header">
            <div className="barMenu" onClick={()=>{setShowModel(true)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
                {showModel&&( <div className={`bg-modal`} onClick={()=>{setShowModel(false)}}>
                    <div className="modal">
                        
                        <ul>
                            <li onClick={()=>{setShowModel(false)}}>
                                <IoClose className="close" />
                            </li>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Project">Project</a></li>
                            <li><a href="">Speaking</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>)}
            
            <nav>
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Project">Project</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
            <DarkMode />
        </header>
    );
}

export default Header;
