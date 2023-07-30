
import { useState, useEffect } from 'react';


const Articles = () => {

    const [elements, setElements] = useState([]);
    useEffect(() => {
        async function request() {
            const request = await fetch('https://jsonplaceholder.typicode.com/posts');
            const response = await request.json();
            setElements(response);

        }
        request();
    }
        ,[])

    return (
        <div>
            {elements.map(element => (
                <div key={element.id}>
                    <p>{element.id}</p>
                    <p>{element.title}</p>
                    <p>{element.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Articles;