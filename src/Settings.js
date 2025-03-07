import React from "react";

function Settings({ user, setUser }) {
  const toggleDarkMode = () => {
    setUser({ ...user, settings: { darkMode: !user.settings.darkMode } });
  };

  return (
    <div>
      <h2>Settings</h2>
      <label className="ui-switch">
        
        <input type="checkbox" checked={user.settings.darkMode} onChange={toggleDarkMode} className="ui-switch" />
        <div class="slider">
    <div class="circle"></div>
  </div>
      </label>
    </div>
  );
}

export default Settings;
