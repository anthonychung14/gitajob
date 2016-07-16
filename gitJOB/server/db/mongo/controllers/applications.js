import _ from 'lodash';
import Job from '../models/jobs';
import User from '../models/user';
import Application from '../models/apps'

/**
 * GET ALL
 */
export function all(req, res) {
  //if user id is not given, check their session token, 
  if (req.user) {
    const id = req.user._id

    Application.find({'user': id, 'interest': {'$gt': 0}}).exec((err, data) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }    
    
      User.findOne(({'_id': id})).exec((error, user) => {
        if (err) {
        console.log('Error in first query');
        return res.status(500).send('Something went wrong getting the data');
      }            
        let response = {}
        const name = user.profile ? user.profile.name : 'Maker Hacker'

        response.userId = name
        response.data = data
        return res.json(response);
      })
    });
  } 
}

/**
 * INCREMENT INTEREST
 */
export function moveUp(req, res) {
  Application.update({'user':req.user._id, 'company._id': req.params.id}, {'$inc': {'interest': 1}}, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    //Depending on interest level, assign a new status as well
    return res.status(200).send('OK');
  });
}

/**
 * DECREMENT INTEREST
 */







/**
 * Update a topic
 */
export function update(req, res) {
  const query = { id: req.params.id };
  const isIncrement = req.body.isIncrement;
  const isFull = req.body.isFull;
  const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  const data = _.omit(req.body, omitKeys);

  if (isFull) {
    Topic.findOneAndUpdate(query, data, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  } else {
    Topic.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1 : -1 } }, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  }
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
  moveUp,
  update,
  remove
};
