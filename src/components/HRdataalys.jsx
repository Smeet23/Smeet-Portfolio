import React from "react";

const HRDataAnalysisDescription = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-16 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gray-800">📊 HR Data Analysis</h1>
      <p className="text-lg text-gray-600 mb-6 text-center leading-relaxed">
        An advanced HR data analysis platform that helps organizations derive insights from employee data to improve workforce management and decision-making.
      </p>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-700 border-b pb-2">🚀 Features</h2>
      <ul className="list-disc ml-8 text-gray-600 space-y-3">
        <li><strong>📈 Employee Performance Analysis:</strong> Identify top performers and improvement areas</li>
        <li><strong>📊 Attrition Rate Prediction:</strong> Forecast employee turnover</li>
        <li><strong>🛠 Data Visualization:</strong> Interactive charts and dashboards</li>
        <li><strong>🔎 AI-Powered Insights:</strong> Machine learning-based trend detection</li>
      </ul>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-700 border-b pb-2">🛠 Tech Stack</h2>
      <ul className="list-disc ml-8 text-gray-600 space-y-3">
        <li><strong>🐍 Python & Pandas:</strong> Data processing</li>
        <li><strong>📊 Matplotlib & Seaborn:</strong> Data visualization</li>
        <li><strong>🤖 Scikit-Learn:</strong> Machine learning predictions</li>
        <li><strong>📡 Flask/Django:</strong> Backend API</li>
      </ul>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4 text-gray-700 border-b pb-2">🌍 Live Demo & Code</h2>
      <p className="text-gray-600 text-lg">
        🔗 <a href="https://your-live-demo-link.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">Live Demo</a>
        <br />
        📂 <a href="https://github.com/yourgithub/hr-data-analysis" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">GitHub Repository</a>
      </p>
    </div>
  );
};

export default HRDataAnalysisDescription;
