import { test } from '@playwright/test';

test.beforeEach(async () => {
    console.log("Login happens here");
});

test('Test 1', async () => {
    console.log("Transfer Fund");
});

test('Test 2', async () => {
    console.log("Open Account");
});