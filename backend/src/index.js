const express = require ('express');
const {uuid} = require('uuidv4');


const app = express();



app.use(express.json())

app.listen(3333, ( )=>{
    console.log('🚀 Backend started!')
});

const projects = [];

app.get('/projects' , (request, response)=>{
   /* const {title, owner} = request.query;
    console.log(title);
    console.log(owner);*/
    return response.json(projects);

    
});

app.post('/projects' , (request, response)=>{

    const {title, owner} = request.body;
  
    const project ={id:uuid(), title, owner};

    projects.push(project);

    return response.json(project);

    
});

app.put('/projects/:id' , (request, response)=>{
    const{id} = request.params;
    const {title, owner} = request.body;
   
    const projectIndex = projects.findIndex(project =>project.id =id);
if(projectIndex < 0){
    return response.status(400).json({error: 'project not found'});
}
const project={};

  
    
});

app.delete('/projects/:id' , (request, response)=>{
    return response.json([
        'Projecto 1',
        'Projecto 2',
        'Projecto 3'
    ]);

    
})

