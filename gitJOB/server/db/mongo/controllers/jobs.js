import _ from 'lodash';
import Job from '../models/jobs';
import User from '../models/user'
import Application from '../models/apps'
import moment from 'moment'

/**
 * List
 */
export function all(req, res) {
  Job.find({}).exec((err, data) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }
    
    let appHash = {}    
    Application.find({'user': 'anthonychung14@gmail.com'}).exec((err, apps) => {
      apps.forEach((element) => {
        console.log("element", element)
        appHash[element.company._id] = element.company._id
      })      
      const result = data.filter((posting) => {
        return !appHash[posting._id]
      })            
      return res.json(result.slice(0,30));
    })    
  });
}

/**
 * Interested! Queue it up
 */
export function addQueue(req, res) {
  Application.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    return res.status(200).send('OK');
  });
}

/**
 * Update a topic
 */
export function addNope(req, res) {
  const query = { 'company._id' : req.params.id };
  let job = req.body
  job.status = {
    queue: false,
    offer: false,
    phone: false,
    apply: false,
    nope: true,
    nopeDate: moment()  
  }

  Application.update(query, {'$set': {'status.nope': true}, '$set': {'user': 'anthonychung14@gmail.com'}}, {upsert: true}, (err) => {
    if (err) {
      console.log("done goofed bro")
    }
    
    console.log('updated bro')
    return res.status(200).send('Updated successfully');
  })
}

/**
 * Remove a topic
 */
export function remove(req, res) {
  const query = { id: req.params.id };
  Topic.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed Successfully');
  });
}

export default {
  all,
  addQueue,
  addNope,
  remove
};
