STCFW - Svelte & TypeScript Project

STCFW is a project built with Svelte and TypeScript. It uses SvelteKit for building and deploying applications and Cloudflare Pages as a hosting platform. It aims to provide a simple and fast way to create modern web applications with a focus on developer experience.
Features

    TypeScript support for a strong typing system and improved developer experience
    Svelte for fast and efficient UI updates
    Built-in routing system for easy navigation
    Pre-configured and optimized build system with SvelteKit
    A set of helpful components and utilities to get you started quickly
    Easy deployment with Cloudflare Pages

Quick Start

It is recommended to use Node Version Manager (nvm) to manage Node.js versions for this project. Once you have nvm installed, you can follow these steps:

    Clone the repository: git clone https://github.com/travisboss/stcfw.git
    Navigate to the project directory: cd stcfw
    Install the dependencies: npm install
    Run the development server: npm run dev
    Open your browser to http://localhost:5000 to see your application running.

Deployment

STCFW comes with support for deploying your applications with Cloudflare Pages. To build and deploy your application, run the following command:

```
npm run build
npm run start
```

This will build your application for production and start a server to serve it. You can now visit your application at http://localhost:3000.

To deploy to Cloudflare Pages, you'll need to set up a Cloudflare account and a Pages site. Once you've done that, you can follow these steps to deploy your STCFW application:

    Push your code to a GitHub repository
    Go to the Pages dashboard in Cloudflare and select your repository
    Configure your build settings, including the command to build your application (npm run build) and the folder where the built files will be located (public)
    Trigger a build and wait for it to complete
    Visit your site at the URL provided by Cloudflare Pages

Contributing

If you're interested in contributing to the development of STCFW, we'd love to have you! Please take a look at our contributing guidelines for more information.
License

STCFW is open-source software licensed under the MIT license.