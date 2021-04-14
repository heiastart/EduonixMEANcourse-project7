const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP
const cors = require('cors')
const { typeDefs, resolvers} = require('./schema')
//const { host, port} = require('../local-config')

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: typeDefs,
  rootValue: resolvers,
  graphiql: true
}))



app.listen(4000, () => {
  console.log(`GraphQL-server running on port 4000`)
})