import React from "react";

const EcommerceDescription = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-16 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-800">🛍️ E-Commerce Platform</h1>
      <p className="text-lg text-gray-600 mb-6 text-center leading-relaxed">
        A feature-rich e-commerce platform built with Django, enabling users to browse products, add to cart, and securely complete purchases.
      </p>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-700 border-b pb-2">🚀 Features</h2>
      <ul className="list-disc ml-8 text-gray-600 space-y-3">
        <li><strong>🛒 Shopping Cart:</strong> Add, remove, and update items seamlessly</li>
        <li><strong>📝 Blog Page:</strong> Stay informed with the latest articles and updates</li>
        <li><strong>💳 Payment Integration:</strong> Supports Stripe and PayPal</li>
        <li><strong>🔎 Dynamic Search:</strong> Quickly find products with an intelligent search feature</li>
        <li><strong>📦 Order Tracking:</strong> Monitor the status of your purchases</li>
      </ul>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-700 border-b pb-2">🛠 Tech Stack</h2>
      <ul className="list-disc ml-8 text-gray-600 space-y-3">
        <li><strong>🐍 Django:</strong> Robust backend framework</li>
        <li><strong>🎨 Bootstrap CSS:</strong> Beautiful, modern styling</li>
        <li><strong>🗄️ MySQL:</strong> Reliable database storage</li>
        <li><strong>💳 Stripe/PayPal:</strong> Secure payment gateway</li>
      </ul>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-700 border-b pb-2">🌍 Live Demo & Code</h2>
      <p className="text-gray-600 text-lg">
        🔗 <a href="https://your-live-demo-link.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">Live Demo</a>
        <br />
        📂 <a href="https://github.com/Smeet23/Ecommerce-Django" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">GitHub Repository</a>
      </p>
    </div>
  );
};

export default EcommerceDescription;