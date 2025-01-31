import React, { useState } from 'react';
import './Explore.css';

const Explore = () => {
  const [activeTab, setActiveTab] = useState("DRINKS");

  return (
    <div className='Explore'>
      <div className='button-group'>
        <button 
          className={activeTab === "FOOD" ? "active" : ""}
          onClick={() => setActiveTab("FOOD")}
        >
          FOOD
        </button>
        <button 
          className={activeTab === "DRINKS" ? "active" : ""}
          onClick={() => setActiveTab("DRINKS")}
        >
          DRINKS
        </button>
        <button 
          className={activeTab === "BRUNCH" ? "active" : ""}
          onClick={() => setActiveTab("BRUNCH")}
        >
          BRUNCH
        </button>
      </div>
    </div>
  );
};

export default Explore;
