// API Health Check Utility
import { healthCheck } from './api';

let isServerOnline = null;
let lastCheck = null;
const CHECK_INTERVAL = 30000; // 30 seconds

export const checkServerHealth = async () => {
  // Cache the result for 30 seconds
  const now = Date.now();
  if (isServerOnline !== null && lastCheck && (now - lastCheck) < CHECK_INTERVAL) {
    return isServerOnline;
  }

  try {
    await healthCheck();
    isServerOnline = true;
    lastCheck = now;
    return true;
  } catch (error) {
    isServerOnline = false;
    lastCheck = now;
    console.warn('Server health check failed:', error.message);
    return false;
  }
};

export const getServerStatus = () => isServerOnline;


