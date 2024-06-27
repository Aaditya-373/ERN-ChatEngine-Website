import React, { useState } from 'react';
import LoginPage from './LoginPage';
import ChatsPage from './ChatsPage';

function App() {
  const [user, setUser] = useState(undefined);

  console.log("Rendering App component");
  console.log("User state:", user);

  if (!user) {
    console.log("Rendering LoginPage");
    return <LoginPage onAuth={(user) => setUser(user)} />;
  } else {
    console.log("Rendering ChatsPage");
    return <ChatsPage user={user} />;
  }
}

export default App;
