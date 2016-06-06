import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: String,
  title: String,
  email: String,
  photo: String,
  linkedin: String
})

const CompanySchema = new mongoose.Schema({  
    _id: String,
    company_link: String,
    company_contacts: [ContactSchema],
    last_active: String,
    url: String,
    desc: String,
    long_desc: String,
    job_title: String,
    location: String,
    salary: String,
    tag_data: Array,
    tagline: String,  
}, {
  collection: 'company'});

export default mongoose.model('Company', CompanySchema);
