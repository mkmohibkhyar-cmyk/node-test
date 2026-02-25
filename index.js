import express from 'express'
import { firstFun } from './seconfile.js';
const app = express()
const port = 5000;
await firstFun()

app.listen(port,()=>{
  console.log("server running on 5000")
})
