const express = require ('express');


const app = express();

app.listen(3333, ( )=>{
    console.log('🚀 Backend started!')
});
app.get('/projects' , (request, response)=>{
    return response.json({mensagem:'Revisão teste agora'});
});
