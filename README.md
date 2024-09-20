# Starting a TypeScript and Node Project

## Init the project

[Help guide:](https://medium.com/@induwara99/a-step-by-step-guide-to-setting-up-a-node-js-project-with-typescript-6df4481cb335)

1. npm init -y (New Node.js Project with the default configurations "-y" or "--yes")

2. npm install --save-dev typescript (Installing as a development dependency)

3. npx tsc --init ( Create and configure the TypeScript, if you already have it installed, generating the tsconfig.json file)

4. Open the tsconfig.json and resemble it to the following configuration:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

- "target": "es2016":Sets ECMAScript target version for output JavaScript to ES2016.

- "module": "commonjs": Use CommonJS module system for module loading compatibility.

- "rootDir": "./src": Source files located in ./src directory for compilation.

- "outDir": "./dist": Compiled JavaScript output to ./dist directory.

- "esModuleInterop": true: Enables compatibility with ES6 module imports.

- "forceConsistentCasingInFileNames": true: Ensures case sensitivity in file names.

- "strict": true: Enables all strict type-checking options.

- "skipLibCheck": true: Skip type checking of declaration files (`.d.ts`).

5. Install Express and @types/express @types/node

   - npm install express
   - npm install --save-dev @types/express @types/node

6. Update de package.json to include TypeScript compilation

```json
"scripts": {
  "start": "node dist/server.js",
  "build": "tsc"
},
```

7. Create a server.ts file

```typescript
// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response } from "express";

// Create an Express application
const app = express();

// Specify the port number for the server
const port: number = 3000;

// Define a route for the root path ('/')
app.get("/", (req: Request, res: Response) => {
  // Send a response to the client
  res.send("Hello, TypeScript + Node.js + Express!");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});
```

8. Run the project

   - npm run build
   - npm start

9. Add types gradually in the boilerplate code

## Session-Based Authentication
[Help guide:](https://medium.com/@anandam00/understanding-session-based-authentication-in-nodejs-bc2a7b9e5a0b)
