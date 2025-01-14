// Set item in localStorage
localStorage.setItem('key', 'value');

// Get item from localStorage
const value = localStorage.getItem('key');

// Remove item from localStorage
localStorage.removeItem('key');

// Clear all items from localStorage
localStorage.clear();

// Add an object to localStorage
const obj = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(obj));

// Get an object from localStorage
const user = JSON.parse(localStorage.getItem('user'));

// Set item in sessionStorage
sessionStorage.setItem('key', 'value');

// Get item from sessionStorage
const sessionValue = sessionStorage.getItem('key');

// Remove item from sessionStorage
sessionStorage.removeItem('key');

// Clear all items from sessionStorage
sessionStorage.clear();

// Add an object to sessionStorage
const sessionObj = { name: 'Jane', age: 25 };
sessionStorage.setItem('sessionUser', JSON.stringify(sessionObj));

// Get an object from sessionStorage
const sessionUser = JSON.parse(sessionStorage.getItem('sessionUser'));