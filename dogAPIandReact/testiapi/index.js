const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const { v4: uuidv4 } = require('uuid');
const dogBox = require('./data.json')
const cors = require('cors');

let dogs=[
{
    "id": 1,
    "name": "arraydog",
    "age": 6
}
];

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/dogBox', (req, res)=>{
    res.json(dogBox)
})

//read info on all files in /dogs

app.get('/dogs', (req, res) => {
    res.json(dogs)
});

//read info on single id

app.get('/dogs/:id', (req, res) => {
    const result = dogs.find(d=>d.id===req.params.id)
    res.json(result)
});

//add a new dog

app.post('/dogs', (req, res) => {
    console.log("creating a new " + req.body.breed);
    console.log(req.body);
    dogBox.dogs.push({
        id: uuidv4(),
        name: req.body.name,
        age: req.body.age
    })
    res.send('Dog created')
})

//delete a dog 

app.delete('/dogs/:id', (req, res) => {

    const result = dogs.findIndex(d => d.id ===req.params.id)
    if(result !== -1){
    dogs.splice(result,1)
    res.send('deleted '+ req.params.id)
    }else{
    res.send('no such dog')
    }
    
})

//delete all dogs 

app.delete('/dogs', (req, res) => {
    res.send('delete dogs')
})

app.put('/dogs/:id', (req, res) => {
    res.send('modifying a dog')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

