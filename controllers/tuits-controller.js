//import posts from "./tuits.js";
//let tuits = posts;
import tuitsDao from "../tuits/tuits-dao.js";

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits()
//  console.log("logging find all tuits");
//  console.log(tuits);
  res.json(tuits);
}

 const createTuit = async (req, res) => {
  const newTuit = req.body;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
//  newTuit._id = (new Date()).getTime()+'';
//  newTuit.likes = 0;
//  tuits.push(newTuit);
  res.json(insertedTuit);
 }

 const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
//  tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
  res.send(status);
 }

 const updateTuit = async (req, res) => {
   const tuitdIdToUpdate = req.params.tid;
   const updatedTuit = req.body;
   const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
//   tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
   res.send(status);
  }

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
 }

