import React, { useEffect, useState } from 'react'
import Rating from 'react-rating'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { BiSolidCheckbox } from "react-icons/bi";

interface react_ratingprops{
  informations:any,
  setInformation:any,
}

export default function React_rating({informations,setInformation}:react_ratingprops) {
 
  
  const [formdata, setFormdata] = useState(informations);
  
    useEffect(() => {
      setFormdata(informations);
    }, [informations]);
  
    const handlechange = (value: string) => {
      const updatedForm = { ...formdata, importance: value };
      setFormdata(updatedForm);
      setInformation(updatedForm);
    };
  

  return (
    <div >
      <Rating
        initialRating={formdata.importance}
        onChange={handlechange}
        emptySymbol={<MdOutlineCheckBoxOutlineBlank size={20} color="#ccc" />}
        fullSymbol={<BiSolidCheckbox size={20} color="#1eb9c8" />}
        stop={10}
      />
    </div>
  )
}
