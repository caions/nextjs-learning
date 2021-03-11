import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      server: process.env.EMAIL_SERVER, 
      from: process.env.EMAIL_FROM
    }),
  ],

  session: {
    jwt: true, 
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true
  },
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})