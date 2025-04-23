import React, { useState } from 'react'
import { GoColumns } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Modeloverly from '../Atoms/Modal/Modeloverly';
import Modal from 'react-responsive-modal';


export default function Ticket_flow() {
    const[down,setDown]=useState(true)
    const[open,setOpen]=useState(false)
    const menuItem=[  { label: "Coloums", icon: <GoColumns /> },
        { label: "Filter", icon: <GoColumns /> },
        { label: "Grouped by Support Status", icon: <GoColumns /> },
        { label: "Sort", icon: <GoColumns /> },
        { label: "Customize", icon: <GoColumns /> },
        { label: "AI", icon: <GoColumns /> },
        { label: "Quick Search", icon: <GoColumns /> },
    ]
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (<>
    <div className='ticket_flow'>
        <div className='ticket_flow_inner'>
            <div className='ticket_flow_top_section'>
                <div className='ticket_flow_top_section_inner'>{menuItem.map((item)=>{
                    return(
                    <div className='top_section_box'>
                        <div className='top_section_box_inner'>
                            <div className='top_icon'>
                                        {item.icon}  
                            </div>
                            <div className='top_title'>
                        <li>{item.label}</li>
                            </div>
                        </div>
                    </div>
                    )
                })}
                    
                </div>
            </div>
            <div className='ticket_flow_bottom_section'>
                <div className='ticket_flow_bottom_section_inner'>
                    <div className='ticket_box'>
                        <div className='ticket_box_inner'>
                            <div className='ticket_top'>
                                <div className='ticket_top_inner'>
                                    <div className='ticket_icon' onClick={()=>setDown(!down)}>
                                         {down?<IoIosArrowDown/>:<IoIosArrowForward/>}
                                    </div>
                                    <div className='ticket_name'>
                                        <span>Uncategorized</span>
                                    </div>
                                    <div className='ticket_total'>
                                        <span>1</span>
                                     </div>

                                </div>
                            </div>{down? <div className='ticket_desc'>
                                <div className='ticket_desc_inner'>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                    <p>hello</p>
                                </div>
                            </div>:""}
                           
                            <div className='ticket_add' onClick={()=> setIsModalOpen(true)} >
                                <div className='ticket_add_inner'>
                                    <span>+</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modeloverly open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
