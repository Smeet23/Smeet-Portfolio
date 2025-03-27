import React from "react";

const NewsAggregatorDescription = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-16 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-800">📰 News Aggregator</h1>
      <p className="text-lg text-gray-600 mb-6 text-center leading-relaxed">
        A feature-rich news platform that allows users to engage with posts through nested comments, upvotes, and downvotes, while providing secure authentication and a personalized experience.
      </p>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-700 border-b pb-2">🚀 Features</h2>
      <ul className="list-disc ml-8 text-gray-600 space-y-3">
        <li><strong>🔐 User Authentication:</strong> Secure signup, login, and password recovery via Brevo SMTP</li>
        <li><strong>🔑 JWT Authentication:</strong> Ensures secure user sessions</li>
        <li><strong>🛡️ Bcrypt Password Hashing:</strong> Secure storage of user credentials</li>
        <li><strong>👤 User Profile:</strong> Each user gets a personal profile page</li>
        <li><strong>📝 Create & Manage Posts:</strong> Users can create and manage their posts</li>
        <li><strong>💬 Nested Comment System:</strong> Comments support replies, creating structured discussions</li>
        <li><strong>⬆️⬇️ Upvotes & Downvotes:</strong> Users can vote on posts and comments</li>
      </ul>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-700 border-b pb-2">🛠 Tech Stack</h2>
      <ul className="list-disc ml-8 text-gray-600 space-y-3">
        <li><strong>🌐 Node.js & Express.js:</strong> Backend API</li>
        <li><strong>🛢 MongoDB & Mongoose:</strong> Database & ORM</li>
        <li><strong>📩 Brevo SMTP:</strong> Email-based password recovery</li>
        <li><strong>🔑 JWT:</strong> Authentication & session management</li>
        <li><strong>🛡️ Bcrypt:</strong> Secure password hashing</li>
        <li><strong>📄 EJS & Bootstrap:</strong> Frontend templating & styling</li>
      </ul>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-700 border-b pb-2">🌍 Live Demo & Code</h2>
      <p className="text-gray-600 text-lg">
        🔗 <a href="https://news-aggregator-ewj4.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">Live Demo</a>
        <br />
        📂 <a href="https://github.com/Smeet23/News-Aggregator" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">GitHub Repository</a>
      </p>
    </div>
  );
};

export default NewsAggregatorDescription;
