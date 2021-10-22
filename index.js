const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
// const port = process.env.PORT || 5000;
const port = 5000;



app.get('/', (req, res) => {
  res.send('Hello from my Second home Hello Bangladesh Love you , Mahmud ')
});

// app.get('/users', (req, res) => {
  // res.send('Users loaded');
  // res.send({id:1, name:'Mahmud Khan', eamil:'mahmudkhann123@gmail.com'});
// })


const users = [
 { id:1, name:'Mahmud Khan',email:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:2, name:'Sezan  Khan',email:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:3, name:'Sohag Khan', email:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:4, name:'Siyam Khan', email:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:5, name:'Jubair Khan',email:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:6, name:'Foysal Khan',email:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:7, name:'Fuad Khan', email:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:8, name:'Nazrul Khan',email:'mahmudkhann123@gmail.com', Phone: "01788888888"},
]


app.get('/users', (req, res) => {
  // console.log(req.query.search);
  // use query parameter or search query 
   const search = req.query.search;
  if(search){
        const searchResult = users.filter(user =>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
  }
  else{
    res.send(users);
  }
}); 

// app method  r akjon data dibe 
app.post('/users',(req,res)=>{
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitting the post', req.body)
  // res.send('post got hitted inside ')
  // res.send(JSON.stringify(newUser)) same nicher lion o 
  res.json(newUser)
  
});

//dynamic api 

app.get('/users/:id', (req,res) => {
  // console.log(req.params.id);
   const id = req.params.id;
  const user = users[id]
  res.send(user); 
})


app.get('/fruits',(req,res) =>{
  res.send(['mango', 'apple'])
})


app.get('/khejur',(req,res) =>{
  res.send('amder onek khejur tree ase');
})
app.listen(port, () => {
  console.log('Listening to port ',port);
  
})
