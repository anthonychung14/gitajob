import _ from 'lodash';
import Job from '../models/jobs';
import User from '../models/user';
import Company from '../models/company'

export function getContacts(req, res) {
  const companyId = req.params.id
  Company.find({'_id': companyId}).exec((err, data) => {
    console.log(data, "here is the data I was able to find")
  })
}

export function addContact(req, res) {
  const id = req.params.id
  
  Job.findOne({'_id': id}).exec((err, data) => {                
    Company.update(
      {'company': data.company}, 
      {'$push': {'company_contacts': req.body}
    })
    .exec((err, company) => {              
      Company.findOne({'company': data.company}).exec((err, comp) => {
        res.status(200).send(comp.company_contacts)  
      })        
    })
  })   
}

export default {
  addContact,
  getContacts
};

