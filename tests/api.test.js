const request = require('supertest');
const app = require('../index');
describe('Electricity API Endpoints', () => {

 // Test Case 1: Total Usage
 it('should return total electricity usage for all year', async () => {
   const res = await request(app).get('/api/usage/total-by-year');
   expect(res.status).toBe(200);
   expect(typeof res.body).toBe('object');
 });

// Test Case 1: Total Usage Error
 it('should return 404 for non-existing route', async () => {
   const res = await request(app).get('/api/invalid-route');
   expect(res.status).toBe(404);

 });

 // Test Case 2: Specific Province Usage
 it('should return electricity usage for a specific province and year', async () => {
   const res = await request(app).get('/api/usage/Bangkok/2566');
   expect(res.status).toBe(200);
   expect(typeof res.body).toBe('object');
 });
 // Test Case 2: Specific Province Usage Error
 it('should not return electricity usage for a specific province and year', async () => {
    const res = await request(app).get('/api/usage/Beijing/2566');
    expect(res.body.message).toBe('Data not found');
  });

 // Test Case 3: Verify Data Structure for Users
 it('should return total electricity users for all year', async () => {
    const res = await request(app).get('/api/users/history/Bangkok');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
 });
 // Test Case 3: Verify Data Structure for Users Error
 it('should not return total electricity users for all year', async () => {
    const res = await request(app).get('/api/users/history/Beijing');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(0);
    });
 // Test Case 4: Specific Province Users 
 it('should return electricity users for a specific province and year', async () => {
    const res = await request(app).get('/api/users/Bangkok/2566');
    expect(res.status).toBe(200);
    expect(typeof res.body).toBe('object');
    });
 // Test Case 4: Specific Province Users Error
 it('should return electricity users for a specific province and year', async () => {
    const res = await request(app).get('/api/users/Beijing/2566');
    expect(res.body.message).toBe('Data not found');
 });
 
 // Test Case 5: Verify Data Structure for Usage History    
 it('should return usage history for a specific province', async () => {
 const res = await request(app).get('/api/usage/history/Bangkok');
 expect(res.statusCode).toEqual(200);
 expect(Array.isArray(res.body)).toBe(true);
 });
 // Test Case 5: Verify Data Structure for Usage History Error  
 it('should return usage history for a specific province', async () => {
    const res = await request(app).get('/api/usage/history/Beijing');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(0);
    });
  // Test Case 6: Verify Data Structure for User History
 it('should return user history for a specific province', async () => {
 const res = await request(app).get('/api/users/history/Bangkok');
 expect(res.statusCode).toEqual(200);
 expect(Array.isArray(res.body)).toBe(true);
 });
// Test Case 6: Not Verify Data Structure for User History  
it('should return user history for a specific province', async () => {
    const res = await request(app).get('/api/users/history/Beijing');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(0);
    });

});