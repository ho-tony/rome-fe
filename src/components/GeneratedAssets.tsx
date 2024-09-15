import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function GeneratedAssets() {
  const location = useLocation();
  const { formData } = location.state; 
  const [assets, setAssets] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchAssets = async () => {
      try {
        console.log(formData)
        const response = await fetch('http://localhost:8000/api/get-assets/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), 
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Assets received:', data); 
          setAssets(data); 
          
        } else {
          console.error('Failed to fetch assets');
        }
      } catch (error) {
        console.error('Error fetching assets:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchAssets();
  }, [formData]);

  if (loading) {
    return <div>Loading...</div>;
  }
  else{
    return (
        <div>
          <h1>Asset List</h1>
          {assets.length > 0 ? (
            <ul>
              {assets.map((asset) => (
                <li key={asset.id}>
                  <strong>{asset.name}</strong>: ${asset.value}
                </li>
              ))}
            </ul>
          ) : (
            <p>No assets available.</p>
          )}
        </div>
  );

  }

}

export default GeneratedAssets;
