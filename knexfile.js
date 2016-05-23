module.exports = {
  development: {
   client: 'postgresql',
   connection: 'postgres://localhost/pirates-development'
 },

 production: {
   client: 'postgresql',
   connection: process.env.DATABASE_URL
 }

};
