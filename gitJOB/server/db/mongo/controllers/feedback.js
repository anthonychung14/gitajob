import _ from 'lodash';
import Feedback from '../models/feedback'
import twilio from 'twilio'
import moment from 'moment'

export function postFeedback(req, res){  
  let client = new twilio.RestClient('ACf8a63f7431470d76a56517e63ae0cb0a', '6d69af192a95d4c1e97bf27e7198cc38');    

  Feedback.update(req.body, req.body, {upsert:true}).exec((err, data)=> { 
    if (err) { return err }    
    console.log(data)  
  })

  let str = ''
  const body = req.body  
  if (body['demographic']) {
    str += ( body['demographic'] +" says " + body['positive'])
  
    client.sms.messages.create({
      to:'+1'+9258187564,
      from:'18558262885',
      body: str
    },((err, msg) => {
      if (!err) {
        console.log("success")
        res.sendStatus(200)
      } else {
        console.log("error", err)
        res.sendStatus(404)
      }
    })
    )
  }

  if (body['name']) {
    str += (body['name'] + " " + body['email'] + " " + body['company'])
  
    client.sms.messages.create({
      to:'+1'+9258187564,
      from:'18558262885',
      body: str
    },((err, msg) => {
      if (!err) {
        console.log("success")
        res.sendStatus(200)
      } else {
        console.log("error", err)
        res.sendStatus(404)
      }
    })
    )
  }

  if ( req.body.phone ) {
  client.sms.messages.create({
    to:'+1'+req.body.phone,
    from:'18558262885',
    body: "Hey thanks a lot for showing interest. I'll be in touch shortly!"
  },((err, msg) => {
    if (!err) {
      console.log("reached out to them")
    } else {
      console.log("error", err)      
    }
  })
  )
  }
}

export default {
  postFeedback
};