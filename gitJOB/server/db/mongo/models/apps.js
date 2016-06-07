import mongoose from 'mongoose';

const AppSchema = new mongoose.Schema({
  user: String,
  interest: Number,
  status: {
    queue: { type: Boolean, default: false },
    queueDate: {type: Date, default: ''},
    apply: { type: Boolean, default: false },
    applyDate: {type: Date, default: ''},
    phone: { type: Boolean, default: false },
    phoneDate: {type: Date, default: ''},
    on_site: { type: Boolean, default: false },
    on_siteDate: {type: Date, default: ''},
    offer: { type: Boolean, default: false },
    offerDate: {type: Date, default: ''},
    reject: { type: Boolean, default: false },
    rejectDate: {type: Date, default: ''},
    nope: { type: Boolean, default: false },
    nopeDate: {type: Date, default: ''}
  },
  company: {
    _id: String,
    company_link: String,
    company: String,
    company_contacts: Array,
    last_active: String,
    url: String,
    desc: String,
    long_desc: String,
    job_title: String,
    location: String,
    salary: String,
    tag_data: Array,
    tagline: String,
  },
  coverToken: {
    whyMission: String,
    whyProduct: String,
    personalMission: String,
    tech: String,
    prof: String
  }
}, {
  collection: 'applications'});

// Compiles the schema into a model, opening (or creating, if
//  nonexistent) the 'Topic' collection in the MongoDB database
export default mongoose.model('Application', AppSchema);
