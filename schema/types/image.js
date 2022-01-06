const { gql } = require('apollo-server-express');
const { DateTimeMock }  = require('graphql-scalars');


const Image = gql`
  scalar DateTimeMock
  type Image {
    id: Int!
    timestamp: String
    base_64_thumbnail: String
    base_64: String
    final_is_spoofed: Boolean
    final_trust: Int
    predictions: [Prediction]
  }

  type Prediction {
    id: Int!
    model_name: String
    is_spoofed: Boolean
    trust: Int
  }

  input ImageFilters {
    timestamp_start: DateTimeMock
    timestamp_end: DateTimeMock
    final_is_spoofed: Boolean
    final_trust_min: Float
    final_trust_max: Float
  }
`;


module.exports = {
  Image
};