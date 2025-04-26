import React, { useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { BsArrowsFullscreen } from "react-icons/bs";
import { CiFolderOn } from "react-icons/ci";
import { LuRefreshCcw } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
import { RiLinksFill } from "react-icons/ri";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

import { IoMdStarOutline } from "react-icons/io";
import React_select from '../React-select/React_select';
import React_quill from '../React-quill/React_quill';
import React_rating from '../React-rating/React_rating';
import React_date from '../React_datepicker/React_date';
import React_single_select from '../React_select_single/React_single_select';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  information:any,
  setInformation:any
  
}

const Modeloverly: React.FC<ModalProps> = ({ open, onClose ,information,setInformation}) => {
    const[tab,setTab]=useState(0)
    
<<<<<<< HEAD
     const [formdata,setFormdata]=useState(information)
     useEffect(()=>{
        setFormdata(information)
     },[information])

    // console.log("information",information);
=======
   
    const[text,setText]=useState('')
>>>>>>> cc4165bcd30979060b5fc107bdf7c9dd920174eb

    const handletitle=(e:any)=>{
       
        if (e.key === "Enter") {
            e.preventDefault();
<<<<<<< HEAD
            setInformation(formdata);
=======
            setInformation({...information,...information.title,title:text})
>>>>>>> cc4165bcd30979060b5fc107bdf7c9dd920174eb
            return;
          }
       
    }
<<<<<<< HEAD
=======
   
    
>>>>>>> cc4165bcd30979060b5fc107bdf7c9dd920174eb
  return (
    <Modal open={open} onClose={onClose}>
     <div className='model'>
        <div className='model_inner'>
            <div className='model_first_section'>
                <div className='model_first_section_inner'>
                    <div className='first_left'>
                        <div className='first_left_inner'>
                                <BsArrowsFullscreen size={20}/>
                                <CiFolderOn size={20} style={{fill:"#00a6ed"}}/>
                                <LuRefreshCcw size={20} style={{fill:"#00a6ed"}}/>
                                <span style={{color:"#00a6ed"}}>Ticket Flow</span>
                        </div>
                    </div>
                    <div className='first_right'>
                        <div className='first_right_inner'>
                            <FaAngleLeft/>
                            <FaAngleRight/>
                            <BsThreeDotsVertical/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='model_second_section'>
                <div className='model_second_section_inner'>
                    {/* <span>{information.title}</span> */}
                </div>
            </div>
            <div className='model_third_section'>
                <div className='model_third_section_inner'>
                    <div className='model_third' onClick={()=>setTab(0)}>
                        <div className={tab==0?'model_third_inner':""}>
                            <span>Attributes</span>
                        </div>
                    </div>
                    <div className='model_third' onClick={()=>setTab(1)}>
                       <div className={tab==1?'model_third_inner':""}>
                            <span>Comments</span>
                        </div>
                    </div>
                    <div className='model_third' onClick={()=>setTab(2)}>
                    <div className={tab==2?'model_third_inner':""}>
                            <span>Activity Log</span>
                        </div>
                    </div>
                </div>
            </div>
         {tab===0? 
         <div className='model_attributes'>
                <div className='model_attributes'>
                    <div className='model_attribute_add'>
                        <div className='model_attribute_add_inner'>
                            <button>+ Add Attribute</button>
                        </div>

                    </div>
                    <div className='model_desc'>
                        <div className='model_desc_inner'>
                            <div className='field'>
                                <div className='field_inner'>
                                    <CiEdit/>
                                    <span>Name</span>
                                </div>
                            </div>
                            <div className='model_description'>
                                <input type='text' value={formdata.title} onChange={(e)=>setFormdata({...formdata,title:e.target.value})} onKeyDown={handletitle} placeholder='Enter' />
                            </div>
                           
                        </div>
                    </div>
                    <div className='model_desc'>
                        <div className='model_desc_inner'>
                            <div className='field'>
                                <div className='field_inner'>
                                    <GoTag/>
                                    <span>Support Status</span>
                                </div>
                            </div>
                            <div className='model_description'>
                                <React_select informations={information} setInformation={setInformation}/>
                            </div>
                           
                        </div>
                    </div>
                    <div className='model_desc'>
                        <div className='model_desc_inner'>
                            <div className='field'>
                                <div className='field_inner'>
                                    <RiEditLine/>
                                    <span>Additional Info</span>
                                </div>
                            </div>
                            <div className='model_description'>
                               <React_quill  informations={information} setInformation={setInformation}/>
                            </div>
                           
                        </div>
                    </div>
                    <div className='model_desc'>
                        <div className='model_desc_inner'>
                            <div className='field'>
                                <div className='field_inner'>
                                    <IoMdStarOutline/>
                                    <span>Importance</span>
                                </div>
                            </div>
                            <div className='model_description'>
                             <React_rating  informations={information} setInformation={setInformation}/>
                            </div>
                           
                        </div>
                    </div>
                    <div className='model_desc'>
                        <div className='model_desc_inner'>
                            <div className='field'>
                                <div className='field_inner'>
                                    <CiUser/>
                                    <span>Created At</span>
                                </div>
                            </div>
                            <div className='model_description'>
                            <React_date informations={information} setInformation={setInformation}/>
                            </div>
                           
                        </div>
                    </div>
                    <div className='model_desc'>
                        <div className='model_desc_inner'>
                            <div className='field'>
                                <div className='field_inner'>
                                    <CiEdit/>
                                    <span>Created By</span>
                                </div>
                            </div>
                            <div className='model_description'>
                           <input type='text' placeholder='guest' disabled className='disabled'/>
                            </div>
                           
                        </div>
                    </div>
                    <div className='model_desc'>
                        <div className='model_desc_inner'>
                            <div className='field'>
                                <div className='field_inner'>
                                    <RiLinksFill/>
                                    <span>Additional Links</span>
                                </div>
                            </div>
                            <div className='model_description'>
<<<<<<< HEAD
                            <input type='text' placeholder='Add' value={formdata.Addition_Link} onChange={(e)=>{
                                setFormdata({...formdata,Addition_Link:e.target.value})
                                setInformation(formdata)
                                }} className='disabled'/>
=======
                            <input type='text' placeholder='Add'  className='disabled' onChange={(e)=>setInformation({...information,Additional_Link:e.target.value})}/>
>>>>>>> cc4165bcd30979060b5fc107bdf7c9dd920174eb
                            </div>
                           
                        </div>
                    </div>
                    <div className='model_desc'>
                        <div className='model_desc_inner'>
                            <div className='field'>
                                <div className='field_inner'>
                                    <GoTag/>
                                    <span>Ticket Type</span>
                                </div>
                            </div>
                            <div className='model_description'>
                                <React_single_select informations={information} setInformation={setInformation}/>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>:""}  
        </div>
     </div>
    </Modal>
  );
};

export default Modeloverly;
