import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { StylesConfig } from 'react-select';


type OptionType = {
  value: string;
  label: string;
};

interface react_select_props{
  informations:any,
  setInformation:any
}

const animatedComponents = makeAnimated();

const customStyles: StylesConfig<OptionType, false> = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#eee !important' : 'white !important',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
    padding: 5,
  }),
  singleValue: (provided) => ({
    ...provided,
    backgroundColor: '#e0a994',
    color: 'black',
    padding: '4px 2px',
    borderRadius: '15px',
    display: 'inline-block',
    width: '80px',
    textAlign: 'center',
  }),
  menu: (provided) => ({
    ...provided,
    width: '250px',
    zIndex: 9999,
  }),
};

const ReactSelectSingleChip = ({informations,setInformation}:react_select_props) => {
<<<<<<< HEAD
   const [formdata, setFormdata] = useState(informations);
  
    useEffect(() => {
      setFormdata(informations);
    }, [informations]);

=======
>>>>>>> cc4165bcd30979060b5fc107bdf7c9dd920174eb
  const [options, setOptions] = useState<OptionType[]>([
    { value: 'Bug', label: 'Bug' },
    { value: 'Suggestion', label: 'Suggestion' },
    { value: 'Refund', label: 'Refund' },
    { value: 'Activation', label: 'Activation' },
    
    { value: 'Referral', label: 'Referral' },
  ]);

  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleCreate = (inputValue: string) => {
    const newOption = { value: inputValue, label: inputValue };
    setOptions((prevOptions) => [...prevOptions, newOption]);
    setSelectedOption(newOption);
  };

 const handleChange = (selected: OptionType | null) => {
    setSelectedOption(selected);
<<<<<<< HEAD
    const updatedForm = { ...formdata, ticket_type: selected };
    setFormdata(updatedForm);
    setInformation(updatedForm);
=======
    setInformation({...informations,ticket_type:selected})
>>>>>>> cc4165bcd30979060b5fc107bdf7c9dd920174eb
  };

  return (
    <CreatableSelect
      options={options}
      components={animatedComponents}
      value={formdata.ticket_type}
      onChange={handleChange}
      styles={customStyles}
      onCreateOption={handleCreate}
      placeholder="Select or type..."
    />
  );
};

export default ReactSelectSingleChip;
