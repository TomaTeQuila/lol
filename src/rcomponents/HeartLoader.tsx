import React, { useEffect, useState } from 'react';
import '../styles/HeartLoader.css';

const HeartLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="heart-loader-container">
      <div className="heart"></div>
    </div>
  );
};



export default HeartLoader;
