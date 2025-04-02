// useEffect (Handle Side Effects like API Calls)

// useEffect lets you perform side effects like fetching data, subscribing to events, or updating the DOM.

import { useState, useEffect } from React;
const DataFetcher = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Fetch data from API
        fetch('https://api.example.com/data')
            .then(response => response.json())// Convert response to JSON
            .then(data => setData(data))// Update state with fetched data
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return <ul>{data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>

}

/*  📌 Key Points:
✅ Runs after rendering to handle API calls, event listeners, etc.
✅ The dependency array ([]) controls when it runs.*/