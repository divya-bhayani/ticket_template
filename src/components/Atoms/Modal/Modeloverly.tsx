import React, { useState } from 'react';
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
}
interface information{
    title:string,
    support_status:string|[],
}

const Modeloverly: React.FC<ModalProps> = ({ open, onClose }) => {
    const[tab,setTab]=useState(0)
    
    const [information,setInformation]=useState<information>({
        title:'',
        support_status:[],
    })
    const[text,setText]=useState('')

    const handletitle=(e:any)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            setInformation({...information,title:text})
            return;
          }
       
    }
    console.log("title--------------------------",information.title);
    
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
                    <span>{information.title}</span>
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
                                <input type='text' value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={handletitle} placeholder='Enter' />
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
                               <React_quill/>
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
                             <React_rating/>
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
                            <React_date/>
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
                            <input type='text' placeholder='Add' disabled className='disabled'/>
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
                                <React_single_select />
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
