const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin:"http://localhost:5173",
        methods:["POST","GET","PUT","DELETE"],
        credentials:true
    }
));

app.get('/', (req, res) => {
    res.send('hit');
});


app.post('/authenticate',async (req,res)=>{
    const {username} = req.body;
    
    await axios.put(
        'https://api.chatengine.io/users/',
        {username:username,secret:username},
        {
            headers:{"private-key":process.env.PRIVATE_KEY}
        }
        ).then(r=>{return res.status(r.status).json(r.data)}).catch(e=>{return res.status(500).json({"message":"internal server error"})});    
})


// app.listen(3001,()=>{console.log("Server up on port 3001")});
module.exports = app;
