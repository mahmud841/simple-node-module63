const express = require('express');
const app = express();
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
 { id:1, name:'Mahmud Khan', eamil:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:2, name:'Sezan  Khan', eamil:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:3, name:'Sohag Khan', eamil:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:4, name:'Siyam Khan', eamil:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:5, name:'Jubair Khan', eamil:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:6, name:'Foysal Khan', eamil:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:7, name:'Fuad Khan', eamil:'mahmudkhann123@gmail.com', Phone: "01788888888"},
 { id:8, name:'Nazrul Khan', eamil:'mahmudkhann123@gmail.com', Phone: "01788888888"},
]


app.get('/users', (req, res) => {
  // console.log(req.query.search);
  // use query parameter 
   const search = req.query.search;
  if(search){
        const searchResult = users.filter(user =>user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
  }
  else{
    res.send(users);
  }
}); 


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
