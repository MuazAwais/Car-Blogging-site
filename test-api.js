// Quick API Test Script
// Run this with: node test-api.js

const API_URL = 'http://localhost:5000/api';

async function testAPI() {
  console.log('Testing API Connection...\n');
  
  // Test Health Check
  try {
    console.log('1. Testing Health Endpoint...');
    const healthResponse = await fetch(`${API_URL}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health Check:', healthData);
  } catch (error) {
    console.log('❌ Health Check Failed:', error.message);
    console.log('   Make sure the backend server is running on port 5000\n');
    return;
  }

  // Test Blogs Endpoint
  try {
    console.log('\n2. Testing Blogs Endpoint...');
    const blogsResponse = await fetch(`${API_URL}/blogs`);
    const blogsData = await blogsResponse.json();
    console.log(`✅ Blogs Endpoint: Found ${blogsData.length} blogs`);
    if (blogsData.length === 0) {
      console.log('   ⚠️  Database is empty. Run "npm run seed" in the backend directory.');
    } else {
      console.log('   Sample blog:', blogsData[0]?.title || 'N/A');
    }
  } catch (error) {
    console.log('❌ Blogs Endpoint Failed:', error.message);
  }

  // Test Categories Endpoint
  try {
    console.log('\n3. Testing Categories Endpoint...');
    const categoriesResponse = await fetch(`${API_URL}/categories`);
    const categoriesData = await categoriesResponse.json();
    console.log(`✅ Categories Endpoint: Found ${categoriesData.length} categories`);
  } catch (error) {
    console.log('❌ Categories Endpoint Failed:', error.message);
  }

  console.log('\n✅ API Test Complete!');
  console.log('\nIf all tests passed, your backend is working correctly.');
  console.log('If tests failed, check the TROUBLESHOOTING.md file for solutions.');
}

testAPI();

