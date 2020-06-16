const express = require ('express');


const app = express();

app.use(express.json())

app.listen(3333, ( )=>{
    console.log('🚀 Backend started!')
});
app.get('/projects' , (request, response)=>{

    const query = request.query;
    console.log(query);
    return response.json([
        'Projecto1',
        'Projecto 2',
        'Projecto 3'
    ]);

    
});

app.post('/projects' , (request, response)=>{

    const {title, owner} = request.body;
    console.log(title);
    console.log(owner);
    return response.json([
        'Projecto 1',
        'Projecto 2',
        'Projecto 3'
    ]);

    
});

app.put('/projects/:id' , (request, response)=>{
    const{id} = request.params;
    console.log(id);

    return response.json([
        'Projecto 4',
        'Projecto 2',
        'Projecto 3'
    ]);

    
});

app.delete('/projects/:id' , (request, response)=>{
    return response.json([
        'Projecto 1',
        'Projecto 2',
        'Projecto 3'
    ]);

    
})

