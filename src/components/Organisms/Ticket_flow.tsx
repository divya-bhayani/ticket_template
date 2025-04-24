import React, { useState } from 'react'
import { GoColumns } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Modeloverly from '../Atoms/Modal/Modeloverly';
import Rating from 'react-rating'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BiSolidCheckbox } from "react-icons/bi";
import Modal from 'react-responsive-modal';


interface information{
    title:string,
    support_status:any,
    Additional_info:string,
    importance:any,
    created_at:any,
    ticket_type:any,
    Additional_Link:any
}


export default function Ticket_flow() {
    const[down,setDown]=useState(true)
    
    const menuItem=[  { label: "Coloums", icon: <GoColumns /> },
        { label: "Filter", icon: <GoColumns /> },
        { label: "Grouped by Support Status", icon: <GoColumns /> },
        { label: "Sort", icon: <GoColumns /> },
        { label: "Customize", icon: <GoColumns /> },
        { label: "AI", icon: <GoColumns /> },
        { label: "Quick Search", icon: <GoColumns /> },
    ]
    const [information,setInformation]=useState<information>({
            title:'',
            support_status:[],
            Additional_info:"",
            Additional_Link:""  ,
            importance:"",
            created_at:"",
           ticket_type:"",
    })
    const[ticket,setTickets]=useState([information])
    console.log("information+++++++++++++++++++++++",ticket);
    
  
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
                                        {information.support_status.map((item:any)=>{return(
                                           <span>{item.label}</span>
                                        )})}
                                    </div>
                                    <div className='ticket_total'>
                                        <span>1</span>
                                     </div>
                                </div>
                            </div>
                         
                            {down? <div className='ticket_desc'>
                                <div className='ticket_desc_inner'>
                                    title:{information.title}<br/>
                                    Addtional Info: {information.Additional_info}<br/>
                                    Ticket_type: {information.ticket_type.label}<br/>
                                    Additional_Link:{information.Additional_Link}<br/>
                                    importance:<Rating
                                            initialRating={information.importance}
                                            onChange={(rate) => setInformation({...information,importance:rate})}
                                            emptySymbol={<MdOutlineCheckBoxOutlineBlank size={20} color="#ccc" />}
                                            fullSymbol={<BiSolidCheckbox size={20} color="#1eb9c8" />}
                                            stop={10}
                                          />
                                   created_at: <p>{information.created_at}</p>
                                  
                                </div>
                            </div>:""}
                           
                            <div className='ticket_add' onClick={()=> setIsModalOpen(true)} >
                                <div className='ticket_add_inner'>
                                    <span>+</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='add_box'>
                        <div className='add_box_inner'>
                            <div className='add_btn'>
                                <div className='add_btn_inner'>
                                    <button>+ Add Item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Modeloverly open={isModalOpen} onClose={() => setIsModalOpen(false)} information={information} setInformation={setInformation}   />
    </>
  )
}
