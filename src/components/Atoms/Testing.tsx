import React, { useState } from 'react'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BiSolidCheckbox } from "react-icons/bi";
import Rating from 'react-rating'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

export default function Testing() {
    const [tickets, setTickets] = useState([
        {
          support_status: [{ label: "Open" }],
          title: "Ticket 1",
          Additional_info: "Info...",
          ticket_type: { label: "Bug" },
          importance: 5,
          down: true
        }
      ]);
      const handleAddItem = () => {
        setTickets([
          ...tickets,
          {
            support_status: [{ label: "Open" }],
            title: `Ticket ${tickets.length + 1}`,
            Additional_info: "Info...",
            ticket_type: { label: "Bug" },
            importance: 5,
            down: true
          }
        ]);
      };
      
  return (
    <div>
        {tickets.map((info, index) => (
  <div key={index} className='ticket_box'>
    <div className='ticket_box_inner'>
      <div className='ticket_top'>
        <div className='ticket_top_inner'>
          <div
            className='ticket_icon'
            onClick={() => {
              const updated = [...tickets];
              updated[index].down = !updated[index].down;
              setTickets(updated);
            }}
          >
            {info.down ? <IoIosArrowDown /> : <IoIosArrowForward />}
          </div>

          <div className='ticket_name'>
            {info.support_status.map((s, i) => (
              <span key={i}>{s.label}</span>
            ))}
          </div>

          <div className='ticket_total'>
            <span>{index + 1}</span>
          </div>
        </div>
      </div>

      {info.down && (
        <div className='ticket_desc'>
          <div className='ticket_desc_inner'>
            Title: {info.title}<br />
            Additional Info: {info.Additional_info}<br />
            Ticket Type: {info.ticket_type.label}<br />
            Importance:{" "}
            <Rating
              initialRating={info.importance}
              onChange={(rate) => {
                const updated = [...tickets];
                updated[index].importance = rate;
                setTickets(updated);
              }}
              emptySymbol={<MdOutlineCheckBoxOutlineBlank size={20} color="#ccc" />}
              fullSymbol={<BiSolidCheckbox size={20} color="#1eb9c8" />}
              stop={10}
            />
          </div>
        </div>
      )}
    </div>
    <button onClick={handleAddItem}>+ Add Item</button>

  </div>
))}

      
    </div>
  )
}
