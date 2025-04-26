import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

<<<<<<< HEAD
interface ReactQuillProps {
  informations: any;
  setInformation: any;
=======

interface react_quillprops{
  informations:any, 
  setInformation:any
}
export default function React_quill({ informations, setInformation }:react_quillprops) {
  const [value, setValue] = useState('');
  useEffect(()=>{
      setInformation({...informations,Additional_info:value})
  },[value])
   
console.log("addtional info",informations.Additional_info);

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['link', 'image'],
          ['clean'] // remove formatting
        ],
      };
    
      const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet',
        'link', 'image'
      ];
     
      
  return (
   
    <div>
        <ReactQuill  theme="snow" value={value} onChange={setValue}  modules={modules}
        formats={formats}  />
    </div>
  )
>>>>>>> cc4165bcd30979060b5fc107bdf7c9dd920174eb
}

export default function React_quill({ informations, setInformation }: ReactQuillProps) {
  const [formdata, setFormdata] = useState(informations);

  useEffect(() => {
    setFormdata(informations);
  }, [informations]);

  const handlechange = (value: string) => {
    const updatedForm = { ...formdata, Additional_info: value };
    setFormdata(updatedForm);
    setInformation(updatedForm);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image'
  ];

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={formdata.Additional_info}
        onChange={handlechange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
