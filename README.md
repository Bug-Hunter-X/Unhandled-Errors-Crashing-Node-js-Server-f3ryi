# Node.js Server Crash Due to Unhandled Errors

This repository demonstrates a common issue in Node.js server development: crashing due to unhandled exceptions during request processing.  The `bug.js` file shows a server vulnerable to this issue. The `bugSolution.js` file provides a corrected version with improved error handling.

## Problem

The original server code lacks comprehensive error handling.  If an error occurs (like attempting to read a nonexistent file), the server will crash without gracefully handling the error. 

## Solution

The solution adds error handling using `try...catch` blocks and event listeners for error events (e.g., `'error'` event on the server). This ensures the server remains operational even if unexpected errors arise during requests.