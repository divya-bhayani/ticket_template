import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';


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
}

