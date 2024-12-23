### **Node.js Learning Plan**

Here's a structured plan for learning Node.js. We'll start with **Day 0** today, and I’ll provide the next day's lesson tomorrow.

---

### **Day 0: Introduction to Node.js**

#### **Objective:**
Understand what Node.js is, why it is used, and set up your development environment.

#### **1. What is Node.js?**

- **Definition**: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side.
- **Features**:
  - **Event-driven**: Uses asynchronous, non-blocking I/O.
  - **Single-threaded**: Handles multiple connections efficiently with an event loop.
  - **Cross-platform**: Works on Windows, macOS, and Linux.
  - **npm**: Comes with npm (Node Package Manager) to manage packages.

#### **2. Why Use Node.js?**

- **Performance**: Efficient for I/O-heavy operations like web servers and APIs.
- **JavaScript Everywhere**: Write both client-side and server-side code in JavaScript.
- **Large Ecosystem**: Extensive libraries and frameworks available via npm.
- **Scalability**: Good for building scalable network applications.

#### **3. Setting Up Your Development Environment**

**A. Install Node.js and npm**

- **Windows/macOS/Linux**:
  - Go to the [official Node.js website](https://nodejs.org/).
  - Download and install the latest LTS (Long-Term Support) version.

**B. Verify Installation**

- Open a terminal or command prompt.
- Run the following commands to verify the installation:

  ```bash
  node -v
  npm -v
  ```

  You should see version numbers for both Node.js and npm.

**C. Install a Code Editor**

- Choose a code editor like [Visual Studio Code](https://code.visualstudio.com/) for writing your Node.js applications.

#### **4. Your First Node.js Application**

**A. Create a New Directory**

- Create a directory for your first Node.js project:

  ```bash
  mkdir my-node-app
  cd my-node-app
  ```

**B. Initialize a New Node.js Project**

- Run the following command to create a `package.json` file:

  ```bash
  npm init -y
  ```

  This creates a default `package.json` file with basic project information.

**C. Create a Simple Server**

- Create a file named `app.js` in your project directory and add the following code:

  ```javascript
  // Load the HTTP module
  const http = require('http');

  // Create an HTTP server
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  });

  // Listen on port 3000
  server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
  });
  ```

**D. Run Your Application**

- Start your server by running:

  ```bash
  node app.js
  ```

- Open a web browser and go to `http://127.0.0.1:3000`. You should see "Hello, World!".

#### **5. Basic Concepts to Explore**

- **Modules**: Learn about built-in modules (`fs`, `path`, etc.) and how to use npm packages.
- **Asynchronous Programming**: Understand callbacks, promises, and async/await.
- **Event Loop**: Explore how Node.js handles asynchronous operations.

---

This concludes Day 0. Tomorrow, we’ll dive into more detailed concepts and build upon this foundation.