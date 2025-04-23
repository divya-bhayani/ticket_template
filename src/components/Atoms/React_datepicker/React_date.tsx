import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

const React_date = () => {
    const [startDate, setStartDate] = useState();
  return (
    
     <DatePicker selected={startDate} onChange={(date:any) => setStartDate(date)} placeholderText='select'  isClearable/>
    
  )
}

export default React_date
