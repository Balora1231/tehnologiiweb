import React, { useState, useEffect } from 'react';
export default  function MenuApi() {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setMenuData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {menuData.map(item => (
                    <li key={item.id}>{item.url} - {item.title}</li>
                ))}
            </ul>
        </div>
    );
}