<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ReactDateProps {
  informations: any;
  setInformation: any;
=======
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
>>>>>>> cc4165bcd30979060b5fc107bdf7c9dd920174eb
}

const React_date = ({ informations, setInformation }: ReactDateProps) => {
  const [formdata, setFormdata] = useState(informations);

  useEffect(() => {
    setFormdata(informations);
  }, [informations]);

  const handleChange = (date: Date | null) => {
    const formattedDate = date ? date.toISOString().split('T')[0] : null;
    const updatedForm = { ...formdata, created_at: formattedDate };
    setFormdata(updatedForm);
    setInformation(updatedForm);
  };

 
  const selectedDate = formdata.created_at ? new Date(formdata.created_at) : null;

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleChange}
      placeholderText="Select"
      isClearable
      dateFormat="yyyy-MM-dd"
    />
  );
};

export default React_date;
