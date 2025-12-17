import { useEffect, useState } from 'react';
import { healthCheck } from '../../lib/api';

const ApiStatus = () => {
  const [status, setStatus] = useState('checking');
  const [apiUrl, setApiUrl] = useState('');

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const url = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
        setApiUrl(url);
        await healthCheck();
        setStatus('online');
      } catch (error) {
        setStatus('offline');
        console.error('API Status Check:', error);
      }
    };

    checkStatus();
    // Check every 10 seconds
    const interval = setInterval(checkStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  if (status === 'checking') {
    return null;
  }

  return (
    <div className={`fixed bottom-4 right-4 p-3 rounded-lg shadow-lg text-sm z-50 ${
      status === 'online' 
        ? 'bg-green-100 text-green-800 border border-green-300' 
        : 'bg-red-100 text-red-800 border border-red-300'
    }`}>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${
          status === 'online' ? 'bg-green-500' : 'bg-red-500'
        }`}></div>
        <span className="font-semibold">
          API: {status === 'online' ? 'Connected' : 'Disconnected'}
        </span>
      </div>
      <p className="text-xs mt-1 opacity-75">{apiUrl}</p>
    </div>
  );
};

export default ApiStatus;


