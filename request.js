const request = require('request')
const URL = 'http://jsonplaceholder.typicode.com/users/'

request(`${URL}8`,{method:'DELETE'},(err, res, body)=>{
  if(err){
    console.log(err)
  }else {
    console.log(res.headers)

    request(URL, (err, res, body)=>{
      if(!err){
        console.log(body)
      }
    })
  }
})
