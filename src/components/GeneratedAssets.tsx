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
        const response = await fetch('http://localhost:8000/api/get-assets/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData), 
        });

        if (response.ok) {
          const data = await response.json();
          setAssets(data); // Assuming Django returns the assets (images, files, etc.)
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

  return (
    <div></div>

  );
}

export default GeneratedAssets;
