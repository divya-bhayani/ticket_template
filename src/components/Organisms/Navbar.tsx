import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import '../../assets/CSS/Navbar.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { LuTableProperties } from "react-icons/lu";
import { BsLightbulbFill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoBugSharp } from "react-icons/io5";


export default function Navbar() {
    const [actives,setActive]=useState("ticket flow")
    console.log("active==================",actives);
    
    return (
        <div className="main_navbar">
            <div className="main_navbar_inner">
                <div className="top_section">
                    <div className="top_section_inner">
                        <div className="navbar_box">
                            <div className="navbar_box_inner">
                                <div className="searchbar_box">
                                    <div className="seachrbar_box_inner">
                                        <div className="search_display">
                                            <div className="search_display_inner">
                                                <div className="search_icon">
                                                    <CiSearch />
                                                </div>
                                                <div className="search_text">
                                                    <span>Search</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mode_play_box">
                                    <div className="mode_play_inner">
                                        <div className="playground">
                                            <div className="playground_inner">
                                                <span>Playground Mode</span>
                                            </div>
                                        </div>
                                        <div className="help">
                                            <div className="help_inner">
                                                <div className="help_icon">
                                                    <IoHelpCircleOutline />
                                                </div>
                                                <div className="help_text">
                                                    <span>Help</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom_section">
                    <div className="bottom_section_inner">
                        <div className="navbar_section">
                            <div className="navbar_section_inner">
                                <ul className="navbar_ul">
                                    <li>
                                        <div className="navbar_menu">
                                            <div className="navbar_menu_inner">
                                                 <MdKeyboardDoubleArrowRight size={25}/>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={`navbar_menu ${actives=="ticket flow"?"navbar_menu_active":""}`}>
                                            <div className="navbar_menu_inner "onClick={()=>setActive("ticket flow")}>
                                                <div className="navbar_icon">
                                                     <LuTableProperties/>
                                                 </div> 
                                                 <div className="navbar_title">
                                                    <span>Ticket Flow</span>
                                                 </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={`navbar_menu ${actives==="ticket form"?"navbar_menu_active":""}`} >
                                            <div className="navbar_menu_inner"  onClick={()=>setActive("ticket form")}>
                                                <div className="navbar_icon">
                                                     <LuTableProperties/>
                                                 </div> 
                                                 <div className="navbar_title">
                                                    <span>Ticket From</span>
                                                 </div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                    <li>
                                        <div className={`navbar_menu ${actives==="suggest"?"navbar_menu_active":""}`}>
                                            <div className="navbar_menu_inner" onClick={()=>setActive("suggest")}>
                                                <div className="navbar_icon">
                                                     <LuTableProperties/>
                                                     <BsLightbulbFill size={13} style={{fill:"yellow", padding:" 0px 6px"}}/>
                                                 </div> 
                                                 <div className="navbar_title">
                                                    <span>Suggestions</span>
                                                 </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={`navbar_menu ${actives==="refund"?"navbar_menu_active":""}`}>
                                            <div className="navbar_menu_inner" onClick={()=>setActive("refund")}>
                                                <div className="navbar_icon">
                                                     <LuTableProperties/>
                                                     <FaMoneyCheckAlt size={13} style={{fill:"green",padding:" 0px 6px"}}/>
                                                 </div> 
                                                 <div className="navbar_title">
                                                    <span>Refunds</span>
                                                 </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={`navbar_menu ${actives=="bugs"?"navbar_menu_active":""}`}>
                                            <div className="navbar_menu_inner" onClick={()=>setActive("bugs")}>
                                                <div className="navbar_icon">
                                                     <LuTableProperties />
                                                     <IoBugSharp size={13} style={{fill:"red",padding:" 0px 6px"}}/>
                                                 </div> 
                                                 <div className="navbar_title">
                                                    <span>Bugs</span>
                                                 </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
