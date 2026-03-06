import React, { useState } from "react";
import UserProfile from "./UserProfile";
import "./App.css";

function App() {

  // useState Hook
  const [name, setName] = useState("John Doe");

  // handleChange function
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">

      <h1>User Profile Management</h1>

      {/* UserProfile component */}
      <UserProfile name={name} />

      {/* Input field */}
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

    </div>
  );
}

export default App;