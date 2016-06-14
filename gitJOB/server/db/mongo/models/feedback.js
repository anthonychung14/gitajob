import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  phone: String,  
  date: String
}, {
  collection: 'feedback'});

// Compiles the schema into a model, opening (or creating, if
//  nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Feedback', FeedbackSchema);

