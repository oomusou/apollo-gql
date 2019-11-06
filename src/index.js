import { ApolloServer, gql } from 'apollo-server';

let data = [
  { title: 'FP in JavaScript', category: 'FP'},
  { title: 'RxJS in Action', category: 'FRP'},
  { title: 'Speaking JavaScript', category: 'JS'}
];

let typeDefs = gql`
  type Query {
    books(category: BookCategory!): [Book]
  }

  type Book {
    title: String
    category: BookCategory
  }

  enum BookCategory {
    FP
    FRP
    JS
  }
`;

let books = (_, { category }) => data.filter(x => x.category === category);

let resolvers = {
  Query: {
    books
  }
};

let apolloServer = new ApolloServer({ typeDefs, resolvers });

apolloServer.listen().then(
  ({ url }) => console.log(`GraphQL Server ready at ${ url }`)
);