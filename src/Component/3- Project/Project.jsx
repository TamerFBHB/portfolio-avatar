import { useState } from "react";
import "./Project.scss";

import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Data } from "./Data";

import { motion } from "framer-motion"

const Project = () => {

    // to add class active to butoon
    const [currentActive, setcurrentActive] = useState("all");
    // to do filter to Data
    const [arr, setArr] = useState(Data);

    const handleClick = (buttonCategory) => {
        setcurrentActive(buttonCategory);

        const newArr = Data.filter((item) => {
            return item.category === buttonCategory ||
            item.category2 === buttonCategory
            
        });
        setArr(newArr);
    };

    return (
        <div className="Projects" id="Project">
            <div className="buttons ">
                <button onClick={() => { setcurrentActive("all"); setArr(Data); }}
                    className={`${currentActive === "all" ? "active" : null}`}>
                    all projects
                </button>
                <button onClick={() => { handleClick("css") }}
                    className={`${currentActive === "css" ? "active" : null}`}>
                    html & css
                </button>
                <button onClick={() => { handleClick("java") }}
                    className={`${currentActive === "java" ? "active" : null}`}>
                    javaScript
                </button>
                <button onClick={() => { handleClick("react") }}
                    className={`${currentActive === "react" ? "active" : null}`}>
                    react & mui
                </button>
                <button onClick={() => { handleClick("node") }}
                    className={`${currentActive === "node" ? "active" : null}`}>
                    node & express
                </button>
            </div>
            <div className="my-Project">

                {arr.map((item) => {
                    return (
                        <motion.div 
                        layout
                        initial={{ transform: "scale(0.4)" }}
                        animate={{ transform: "scale(1)" }}
                        transition={{ type: "spring", damping: 8, stiffness: 50 }}

                        className="card "
                            key={item.image}>
                            <img src={item.image} alt="" />
                            <div className="body-card ">
                                <h3>{item.title}</h3>
                                <p className="">Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.</p>
                                <div className="links ">
                                    <div className=" ">
                                        <FaLink className="icon-social" />
                                        <FaGithub className="icon-social" />
                                    </div>
                                    <div className="more icon-social">
                                        more
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default Project;
