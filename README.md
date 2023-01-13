# Running the project

Navigate to the root of the project and run `npm install`
After all dependencies are installed run `npm start` or `npm run start:dev` (for development)

# Running the micro-services or frontend separately

All micro-services + front page have separate package.json script commands you can execute
trips: `start:trips`
user: `start:user`
auth: `start:auth`
frontend: `start:front`

Or for development:

trips: `start:dev:trips`
user: `start:dev:user`
auth: `start:dev:auth`
frontend: `start:dev:front`

# Configuration

The project comes preconfigured with nodemon for the micro-services hot reload (using the commands prefixed with dev), concurently for running them both at the same time and project wide installation for all package.json dependencies.
Go over the package files and check out the scripts for starting and installing to see how it works.
