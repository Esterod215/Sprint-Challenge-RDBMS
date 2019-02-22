const express = require('express');
const helmet = require('helmet');

const knex = require('knex');
const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/api/projects', async(req,res)=>{
    try{
      const projects = await db('projects');
      res.status(200).json(projects);
    }catch(error){
      res.status(500).json(error);
    }
  });

  server.get('/api/actions', async(req,res)=>{
    try{
      const actions = await db('actions');
      res.status(200).json(actions);
    }catch(error){
      res.status(500).json(error);
    }
  });

  server.post('/api/projects',async(req,res)=>{
    try{
      const [id]= await db('projects').insert(req.body);
      const project = await db('projects').where({ id }).first();
      res.status(201).json(project);
    }catch(error){
      res.status(500).json(error);
      }
  });

  server.post('/api/actions',async(req,res)=>{
    try{
      const [id]= await db('actions').insert(req.body);
      const action = await db('actions').where({ id }).first();
      res.status(201).json(action);
    }catch(error){
      res.status(500).json(error);
      }
  });


const port = 3000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});