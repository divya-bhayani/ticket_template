import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { StylesConfig } from 'react-select';

const animatedComponents = makeAnimated();

type OptionType = {
  value: string;
  label: string;
};
interface react_selectprops{
  informations:any, 
  setInformation:any
}


const  React_select=({ informations, setInformation }:react_selectprops) =>{

  // console.log("information setInformation====================",informations.title);
  
  const [options, setOptions] = useState<OptionType[]>([
    { value: 'Ticket Opened', label: 'Ticket Opened' },
    { value: 'Urgent', label: 'Urgent' },
    { value: 'On Hold', label: 'On Hold' },
    { value: 'In Development', label: 'In Development' },
    { value: 'To Resolved', label: 'To Resolved' }
  ]);

  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

  const handleCreate = (inputValue: string) => {
    const newOption: OptionType = { value: inputValue, label: inputValue };
    setOptions((options) => [...options, newOption]);
    setSelectedOptions((options) => [...options, newOption]);
   
  };
  
  const changeselected=(selected:any)=>{
    setSelectedOptions(selected as OptionType[])
    setInformation({...informations,support_status:selected})
  }

  
  const customStyles: StylesConfig<OptionType, true> = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: '6px',
      borderColor: '#ccc',
      minHeight: '5px',
      boxShadow: 'none',
    }),
    input: (provided) => ({
      ...provided,
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      padding: '4px',
      margin: '4px',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#eee !important' : 'white !important',
      color: '#333',
      display: 'flex',
      alignItems: 'center',
      padding: 5,
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#e0a994',
      borderRadius: '20px',
      padding: '2px 6px',
      display: 'flex',
      alignItems: 'center',
    }),
    menu: (provided) => ({
      ...provided,
      width: '250px',
      zIndex: 9999,
    }),
  };
  // console.log("selectedOptions",selectedOptions);
  // console.log("informatipn",informations);
  
  

  return (
    <CreatableSelect
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={animatedComponents}
      isMulti
      options={options}
      styles={customStyles}
      placeholder="Search and select labels..."
      value={selectedOptions}
      onChange={changeselected}
      onCreateOption={handleCreate}
    />
  );
}
export default React_select;