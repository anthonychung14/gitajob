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
    Application.find({}).exec((err, apps) => {
      apps.forEach((element) => {
        appHash[element.company._id] = element.company._id
      })      
      const result = data.filter((posting) => {
        return !appHash[posting._id]
      })
            
       return res.json(result.slice(0,30))
    })    
  });
}

/**
 * Interested! Queue it up
 */
export function addQueue(req, res) {
  let app = req.body
  app.user = req.user._id
  
  Application.create(app, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    
    Application.find({'user': req.user._id}).exec((err, data) => {
      if(err) {
        return res.status(400).send(err)
      }

      return res.status(200).send(
        data.filter((ele) => { 
          return ele.interest > 0
        })
      );    
    })    
  });
}

/**
 * Update a topic
 */
export function addNope(req, res) {
  const query = { 'company._id' : req.params.id, user: req.user._id};
  let status = {
    queue: false,
    offer: false,
    phone: false,
    apply: false,    
    nope: true,
    nopeDate: moment()  
  }
  
  //posting id
  //date of nope
  //any other info attached to it  

  Application.update(query, {'$set': {'user': req.user._id}, '$set': {'interest': 0}}, {upsert: true}, (err, data) => {
    if (err) {
      console.log("done goofed bro", err)
    }
    Application.find({'user': req.user._id, 'interest': {'$gt': 0}}).exec((err, data) => {
      if(err) {
        return res.status(400).send(err)
      }
      res.status(200).send(data.filter((ele) => { 
          return ele.interest > 0
        })    
      )
  })
  }
)}




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
