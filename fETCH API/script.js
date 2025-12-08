fetch('https://jsonplaceholder.typicode.com/posts/20', {
    method: 'POST',

    headers:{
        'Content-type':'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
    .then(res => {
       return  res.json()

        // if(res.ok){
        //     console.log('SUCCESS')

        // } else{
        //     console.log("Not Successful")
        // }
        // // res.json()
    })
    .then(data => console.log(data))
    .catch(error =>console.log('ERROR'))