import request from 'supertest';
import { app } from '../index.js';

describe('Health Check (Q2)', () => {
    it('should return UP status', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('UP');
    });
});
