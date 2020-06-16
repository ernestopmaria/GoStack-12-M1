const express = require ('express');


const app = express();

app.listen(3333, ( )=>{
    console.log('🚀 Backend started!')
});
app.get('/projects' , (request, response)=>{
    return response.json([
        'Projecto',
        'Projecto 2',
    ]);

    
});

app.post('/projects' , (request, response)=>{
    return response.json([
        'Projecto',
        'Projecto 2',
        'Projecto 3'
    ]);

    
});

app.put('/projects/:id' , (request, response)=>{
    return response.json([
        'Projecto',
        'Projecto 2',
        'Projecto 3'
    ]);

    
});

app.delete('/projects' , (request, response)=>{
    return response.json([
        'Projecto',
        'Projecto 2',
        'Projecto 3'
    ]);

    
})

