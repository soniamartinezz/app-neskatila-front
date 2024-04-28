function ToggleSwitch({ setDarkMode, darkMode }) {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="switch">
      <div className="slider">
        <span className={`mode ${darkMode ? 'dark' : 'light'}`} onClick={handleToggle}>
          {darkMode ? 'DARK' : 'LIGHT'}
        </span>
      </div>
    </div>
  );
}

export default ToggleSwitch;
