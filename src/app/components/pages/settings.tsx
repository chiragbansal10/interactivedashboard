import React, { useState } from 'react';
import styles from '../styles/dashboard.module.css';

const Settings: React.FC = () => {
  const [preference, setPreference] = useState('');

  const handleSave = () => {
    alert(`Preference saved: ${preference}`);
  };

  return (
    <div className={styles.settingsContainer}>
      <h1>Settings</h1>
      <input 
        type="text" 
        value={preference} 
        onChange={(e) => setPreference(e.target.value)} 
        placeholder="Enter preference" 
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Settings;
