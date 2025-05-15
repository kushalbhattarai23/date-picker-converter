import React from 'react';
import CombinedDatePicker from './components/CombinedDatePicker';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Combined Date Picker</h1>
        <CombinedDatePicker />
      </div>
    </div>
  );
}

export default App;