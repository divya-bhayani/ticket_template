import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export default function React_quill() {
    const [value, setValue] = useState('');
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
        formats={formats}/>
    </div>
  )
}

