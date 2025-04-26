import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Rating from 'react-rating';
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BiSolidCheckbox } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import Modeloverly from '../Atoms/Modal/Modeloverly';
import { Action_creator } from '../../Store/ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { menuItem } from '../../Utils/Const';

interface Ticket {
  title: string;
  support_status: any;
  Additional_info: string;
  importance: any;
  created_at: any;
  ticket_type: any;
  Addition_Link: any;
}

interface TicketBox {
  // boxTitle: string;
  tickets: Ticket[];
}

export default function Ticket_flow() {
  const dispatch = useDispatch();
  const[addinput,setAddinput]=useState(false)
  const[addinputtext,setAddinputtext]=useState("")

  const [box, setbox] = useState<TicketBox[]>([
    { tickets: [
        {
          title: '',
          support_status: [],
          Additional_info: '',
          importance: 0,
          created_at: '',
          ticket_type: '',
          Addition_Link: '',
        }
      ]
    }
  ]);

  const [down, setDown] = useState(true);
  const [boxIndex, setBoxIndex] = useState<number | null>(null);
  const [ticketIndex, setTicketIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const redux_data = useSelector((state: any) => state.information || []);

  useEffect(() => {
    if (redux_data) {
      setbox(redux_data);
    }
  }, []);

 

  const updateImportance = (boxIndex: number, ticketIndex: number, rate: number) => {
    const updatedBoxes = [...box];
    updatedBoxes[boxIndex].tickets[ticketIndex].importance = rate;
    setbox(updatedBoxes);
  };

  const handleAddTicket = (boxIndex: number) => {
      const updatedBoxes = [...box];
      updatedBoxes[boxIndex].tickets.push({
        title: '',
        support_status: [],
        Additional_info: '',
        importance: 0,
        created_at: '',
        ticket_type: '',
        Addition_Link: '',
      });

      setbox(updatedBoxes);
      setBoxIndex(boxIndex);
      setTicketIndex(updatedBoxes[boxIndex].tickets.length - 1); // now safe
      setIsModalOpen(true);
      console.log("updatedBoxes======================",updatedBoxes,boxIndex);
  };
  const handlekeyDown=(e:any)=>{
    if(e.key=="Enter"){
      const templateTicket = {
          title: '',
          support_status: [],
          Additional_info: '',
          importance: 0,
          created_at: '',
          ticket_type: '',
          Addition_Link: '',
      };
    const newBox: TicketBox = {
      tickets: [{...templateTicket,support_status:[{label:addinputtext}]}],
    };
    setbox([...box, newBox]);
    setAddinput(false)
    }
  }

  const handleAddBox = () => {
  setAddinput(true)
   
  };

  const handleModelChange = (boxIndex: number, ticketIndex: number) => {
    setBoxIndex(boxIndex);
    setTicketIndex(ticketIndex);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className='ticket_flow'>
        <div className='ticket_flow_inner'>

          {/* Top Section */}
          <div className='ticket_flow_top_section'>
            <div className='ticket_flow_top_section_inner'>
              {menuItem.map((item) => (
                <div className='top_section_box' key={item.label}>
                  <div className='top_section_box_inner'>
                    <div className='top_icon'>{item.icon}</div>
                    <div className='top_title'>
                      <li>{item.label}</li>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className='ticket_flow_bottom_section'>
            <div className='ticket_flow_bottom_section_inner'>

              {/* All Ticket Boxes */}
              {box.map((box, boxIndex) => (
                <div className='ticket_box' key={boxIndex}>
                  <div className='ticket_box_inner'>

                    {/* Box Header */}
                    <div className='ticket_top'>
                      <div className='ticket_top_inner'>
                        <div className='ticket_icon' onClick={() => setDown(!down)}>
                          {down ? <IoIosArrowDown /> : <IoIosArrowForward />}
                        </div>
                        <div className='ticket_name'>
                         {box.tickets?.[0]?.support_status?.map((item: any, i: number) => (
                          <span className='header_title' key={i}>{item.label}</span>
                        ))}
                        </div>
                        <div className='ticket_total'>
                          <span>{box?.tickets?.length}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tickets */}
                    <div className='ticket_scroll_container'>
                      {down && box?.tickets?.map((ticket, ticketIndex) => (
                        <div className='ticket_desc' key={ticketIndex} onClick={() => handleModelChange(boxIndex, ticketIndex)}>
                          <div className='ticket_desc_inner'>
                            <span style={{ fontWeight: "bold" }}>{ticket.title}</span>
                            <div dangerouslySetInnerHTML={{ __html: ticket.Additional_info }} className="ticket-desc-info" />
                            <p>{ticket.created_at ? <><FaRegCalendarAlt /> {ticket.created_at}</> : ''}</p>
                            <p>{ticket.Addition_Link}</p>
                            Importance:
                            <Rating
                              initialRating={ticket.importance}
                              onChange={(rate) => updateImportance(boxIndex, ticketIndex, rate)}
                              emptySymbol={<MdOutlineCheckBoxOutlineBlank size={20} color="#ccc" />}
                              fullSymbol={<BiSolidCheckbox size={20} color="#1eb9c8" />}
                              stop={10}
                            />
                            {ticket?.ticket_type?.label && (
                              <span className='header_title'>{ticket.ticket_type.label}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Ticket Button */}
                    <div className='ticket_add' onClick={() => handleAddTicket(boxIndex)}>
                      <div className='ticket_add_inner'>
                        <span>+</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

              {/* Add New Box Button */}
              <div className='add_box'>
                <div className='add_box_inner'>
                  <div className='add_btn'>
                    <div className='add_btn_inner'>
                      {addinput?<input type='text' value={addinputtext} onChange={(e)=>setAddinputtext(e.target.value)} onKeyDown={handlekeyDown}/>: <button onClick={handleAddBox}>+ Add New Lable</button>}
                     
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      <Modeloverly
        open={isModalOpen}
        onClose={() => {
          dispatch(Action_creator(box));
          setIsModalOpen(false);
        }}
        information={
          boxIndex !== null && ticketIndex !== null
            ? box[boxIndex].tickets[ticketIndex]
            : {}
        }
        setInformation={(updatedTicket: Ticket) => {
          if (boxIndex !== null && ticketIndex !== null) {
            const updatedBoxes = [...box];
            updatedBoxes[boxIndex].tickets[ticketIndex] = updatedTicket;
            setbox(updatedBoxes);
          }
        }}
      />

    </>
  );
}
