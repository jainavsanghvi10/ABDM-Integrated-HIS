import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

export default function TrashCopy() {

  async function handleClick(){
    let token = "5ddba211-26a9-4d0d-b6e0-174ec71d031a"
    try {
        const response = await axios.get(
            `https://webhook.site/7b4ba011-cab6-4c9c-b5ac-2154c7c20b57/token/${token}/requests`
        );
        console.log(response.data)
        return response.data
    } catch (error) {
        alert('Cannot Fetch');
    }
    
  }


  return (
    <>
    <button onClick={handleClick}>Click</button>
    </>
  );
}
