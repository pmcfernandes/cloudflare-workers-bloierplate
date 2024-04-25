# cloudflare-workers-boilerplate

A basic environment to start working with workers in cloudflare with D1 database support.

# Routes

Is very similar to express.js see cloudflare workers documentation

### Use Database

To create a new schema edit schema.sql next run command:

    npm run start-schema

To use database

    var { results } = await env.DB.prepare('SELECT * FROM users").all();


See sqlite nodejs documentation
