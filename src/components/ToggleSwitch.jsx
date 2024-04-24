function ToggleSwitch({ handleClick, isDark }) {
    const switchClass = isDark ? 'switch dark' : 'switch light';
  
    return (
      <div className={switchClass} onClick={handleClick}>
        <div className="slider">
          <span className={`word light ${!isDark ? 'active' : ''}`}>LIGHT</span>
          <span>/</span>
          <span className={`word dark ${isDark ? 'active' : ''}`}>DARK</span>
        </div>
      </div>
    );
  }
  
export default ToggleSwitch;