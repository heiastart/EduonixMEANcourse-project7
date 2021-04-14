const graphql = require('graphql')
const {buildSchema} = graphql

// Next, I define the GraphQL-schema for this app using buildSchema template. Can also use gql instead of buildSchema...
//    exclamation mark denotes that the field is non-null or MANDATORY!
//    no exclamation mark denotes that the field is nullable or OPTIONAL
// The Entry type is the template for each todo-item, with the fields that each entry will contain
// The Query type defines the queries (for fetching data) that is available in the API - Read (Get) in CRUD!
//    Just need one to fetch all todo-entries!
// The Mutation type defines the queries (for updating items, creating new ones and deleting) that is available in the API - Create/Update/Delete in CRUD!
// There is also a query type called Subscription, for real-time updates...

const typeDefs = buildSchema(`
  type ToDoEntry {
    id: Int!
    title: String!
    description: String!
    status: String
    active: Boolean
  }

  type Query {
    allEntries: [ToDoEntry]
  }

  type Mutation {
    createEntry(entryDetails: EntryDetails): ToDoEntry 
    updateEntry(id: Int!, entryDetails: EntryDetails): ToDoEntry
    deleteEntry(id: Int!): String
  }

  input EntryDetails {
    id: Int!
    title: String!
    description: String!
    status: String
    active: Boolean
  }
`)


let entries = [
  {
    id: 1,
    title: 'Shopping',
    description: 'Shop for needed groceries',
    status: 'Ongoing',
    active: true,
  },
  {
    id: 2,
    title: 'Doing web-course 1',
    description: 'Continue the Eduonix MEAN-course',
    status: 'Ongoing',
    active: true,
  }
]


const getAllEntries = () => {
  return entries.map(entry => {
    return entry
  })
}

const createEntry = (entryDetails) => {
  let length = entries.length
  entries[length] = entryDetails
  return entries[length]
}

const updateEntry = ({id, entryDetails}) => {
  entries.map(entry => {
    if (id === entry.id) {
      // Code to delete the current entry
      return 'Entry with ID ' + entry.id + ' deleted successfully!'
    }
  })
}

const deleteEntry = (id) => {
  entries.map(entry => {
    if (id === entry.id) {
      entry = entryDetails
      return entry
    }
  })
}


const resolvers = {
  Query: {
    allEntries: getAllEntries 
  },
  Mutation: {
    createEntry: createEntry,  
    updateEntry: updateEntry,
    deleteEntry: deleteEntry
  },
  ToDoEntry: {
    id: (parent) => parent.id,
    title: (parent) => parent.title,
    description: (parent) => parent.description,
    status: (parent) => parent.status,
    active: (parent) => parent.active
  },
}


module.exports = {
  typeDefs,
  resolvers,
}