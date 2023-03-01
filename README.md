# nestjs-poc

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Table of Contents

- [Usage](#usage)

## Usage

This project uses:

- [prettier](https://prettier.io/) code formatting
- [ESLint](https://eslint.org/) rules

### Common commands

```bash
# Install dependencies
npm install

# Start the database and API, available at http://localhost:3000
docker-compose up

# Once the database in the above step logs "database system is ready to accept connections", migrate the database and seed it with data
npx prisma migrate dev && npx prisma db seed

# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run test coverage
npm run test:cov
```
