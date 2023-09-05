import React, { useState, useEffect } from 'react';
import styles from '../styles/_app.scss'
function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API
        fetch(`/api/get-articles`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className={styles.loading}>Loading data...</p>;
    }

    return (
        <div  className={`container`}>
            <h2>Perigon Article API List</h2>
            <div className={`widget`}> 
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Home;