/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  id: String,
  company: String,
  company_link: String,
  last_active: String,
  img: String,
  url: String,
  desc: String,
  job_title: String,
  location: String,
  salary: String,
  tag_data: Array,
  tagline: String,
}, {
  collection: 'postings'});

// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Job', JobSchema);

