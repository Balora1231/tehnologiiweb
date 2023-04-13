import {useState} from "react";
import Button from '@mui/material/Button';
export default function BasicButtons(props) {
    const [message] = useState('')
    const handleClick = event => {
        event.preventDefault();

        console.log('handleClick 👉️', message);
        alert("Privet")
    };
    return (
            <Button  onClick={handleClick} variant="contained">Confirm</Button>
    );
}