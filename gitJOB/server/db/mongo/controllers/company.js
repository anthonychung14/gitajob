import _ from 'lodash';
import Job from '../models/jobs';
import User from '../models/user';
import Company from '../models/company'

export function getContacts(req, res) {
  const companyName = req.params.id

  Company.findOne({'company': companyName}).exec((err, data) => {            
    if(err) {
      console.log(companyName, "lookup failed here")
    }
    res.json(data.company_contacts)
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

