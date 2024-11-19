import { useEffect, useState } from 'react';

export function useFetchData() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8000/calendar')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Couldnt fetch the data: ${response.status}`); 
            }
            return response.json();
        })
        .then(data => setData(data))
        .catch(error => setError('Error fetching data: ', error))
    }, []);

  return {data, error};
}
