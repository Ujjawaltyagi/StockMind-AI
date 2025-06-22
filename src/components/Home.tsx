import { useState } from 'react';

export default function Home() {
  const [ticker, setTicker] = useState('');
  const handleSubmit = () => {
    console.log('Submitted:', ticker);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-8">
      <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">📈 Stock Insight</h1>
        <input
          type="text"
          placeholder="Enter stock ticker (e.g., AAPL)"
          className="w-full border rounded-lg px-4 py-2 text-lg"
          value={ticker}
          onChange={(e) => setTicker(e.target.value.toUpperCase())}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Analyze
        </button>
      </div>
    </div>
  );
}
