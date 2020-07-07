const express = require('express');
const shortid = require('shortid')
const server = express();

server.use(express.json());


let users = [
  {
    id: shortid.generate(),
    name: 'Karen Lei',
    bio: 'web 31 student'
  },
  {
    id: shortid.generate(),
    name: 'Luis Hernandez',
    bio: 'node instructor'
  },
  {
    id: shortid.generate(),
    name: 'Zachery Smith',
    bio: 'web 31 TL'
  }
]

server.post('/api/users', (req, res) => {
  const newUser = req.body
  if(newUser.name === undefined || newUser.bio === undefined){
    res.status(404).json({errorMessage: "Please provide name and bio for the user."})
  } else {
    newUser.id = shortid.generate()
  }
})

server.get('/api/users', (req, res) => {
  res.status(200).json(users)
})

const PORT = 8888;
server.listen(PORT, () =>
  console.log(`server running on port ${PORT}`),
);
