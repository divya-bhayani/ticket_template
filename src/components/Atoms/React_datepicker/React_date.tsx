import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ReactDateProps {
  informations: any;
  setInformation: any;
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
