import { useState, useEffect } from 'react';

function ToggleSwitch({ handleClick, isDark }) {
  const [isLightActive, setIsLightActive] = useState(!isDark);
  const [isDarkActive, setIsDarkActive] = useState(isDark);

  useEffect(() => {
    setIsLightActive(!isDark);
    setIsDarkActive(isDark);
  }, [isDark]);

  const handleToggle = (mode) => {
    if (mode === 'light' && !isLightActive) {
      setIsLightActive(!isLightActive);
      setIsDarkActive(!isDarkActive);
      handleClick(!isDarkActive);
    }
    if (mode === 'dark' && !isDarkActive) {
      setIsDarkActive(!isDarkActive);
      setIsLightActive(!isLightActive);
      handleClick(!isLightActive);
    }
  };

  return (
    <>
      <div className="switch">
        <div className="slider">
          <span className={`word light ${isLightActive ? 'active' : ''}`} onClick={() => handleToggle('light')}>LIGHT</span>
          <span>/</span>
          <span className={`word dark ${isDarkActive ? 'active' : ''}`} onClick={() => handleToggle('dark')}>DARK</span>
        </div>
      </div>
    </>
  );
}

export default ToggleSwitch;
