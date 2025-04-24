import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

interface react_dateprops{
  informations:any,
  setInformation:any
}

const React_date = ({informations,setInformation}:react_dateprops) => {
    
    const handleDateChange = (date: Date | null) => {
      const formattedDate = date ? date.toISOString().split('T')[0] : ''; // "YYYY-MM-DD"
      setInformation({ ...informations, created_at: formattedDate });
    };

    
  return (
    
    <DatePicker
    selected={informations.created_at ? new Date(informations.created_at) : null}
    onChange={handleDateChange}
    placeholderText='Select'
    isClearable
    dateFormat='yyyy-MM-dd'
  />
    
  )
}

export default React_date
