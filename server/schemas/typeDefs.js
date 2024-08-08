const typeDefs = `
    type UploadImage {
    _id: ID
    name: String
    desc: String
    img: String 
    }

   type Query {
   images: [UploadImage]!
   }

   type Mutation {
   addUploadImage(name: String!, desc: String!, img: String!): UploadImage
   }
`
module.exports = typeDefs;