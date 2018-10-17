import {makeExecutableSchema} from 'graphql-tools';

const users: any[] = [
    {
    id: 1,
    name:"gabriel",
    email:"gabrielcrevelario2@gmail.com" 
},{
    id: 2,
    name:"rafaela",
    email:"rafaelacrevelario2@gmail.com" 
 }
];
const typeDefs = `
type User {
    id: ID
    name:String!
    email:String!
}

type Query {
    allUsers:[User!]!


}`;

const resolvers = {
    Query: {
        allUsers: () => users
    }
}

export default makeExecutableSchema({typeDefs, resolvers});