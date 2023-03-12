import {useState} from "react";
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
    const [message] = useState('')
    const handleClick = event => {
        event.preventDefault();

        // 👇️ value of input field
        console.log('handleClick 👉️', message);
        alert("Privet")
    };
    return (
            <Button  onClick={handleClick} variant="contained">Confirm</Button>
    );
}