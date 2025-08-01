'use client';

import { useState } from 'react';

export default function OperatorLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in:', username, password);
  };

  return ( 
    <div className="absolute w-screen h-screen flex items-center justify-center bg-cover bg-center z-50" style={{ backgroundImage: "url('/hospital-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative z-50 bg-white bg-opacity-90 p-10 rounded-2xl shadow-xl max-w-sm w-full text-center">
        <h2 className="text-2xl  text-gray-800 mb-10">PulseCare Operator Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 w-full border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 w-full border rounded-lg"
        />
        <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </div>
  );
}
