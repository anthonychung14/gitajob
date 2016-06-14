export function filterPosition(position) {    
  return {
    type: 'SET_POSTINGS_FILTER',
    position
  }
}

export function findFront(item) {    
  return item.job_title.toLowerCase().split(" ")
          .some(word => {
            return word === "front" || word === "frontend" || word === "front-end"
          })
}

export function findBack(item) {    
  return item.job_title.toLowerCase().split(" ")
          .some(word => {
            return word === "back" || word === "backend" || word === "back-end"
          })
}

export function findFull(item) {    
  return item.job_title.toLowerCase().split(" ")
          .some(word => {
            return word === "full" || word === "fullstack" || word === "full-stack"
          })
}

export function findData(item) {    
  return item.job_title.toLowerCase().split(" ")
          .some(word => {
            return word === "data"
          })
}


export function findQueue(item) {    
  return item.job_title.toLowerCase().split(" ")
          .some(word => {
            return word === "data"
          })
}