//importing json server library
const jsonServer=require('json-server')

//create server instance
const MPserver=jsonServer.create()

//routing json resource to server
const router=jsonServer.router('db.json')

//implementing default midddleware
const midddleware=jsonServer.defaults()
//define port numbers for servers
const PORT=3000||process.env.PORT

//configuring router middleware,port into server
MPserver.use(midddleware)
MPserver.use(router)

//running the Server(puttting it in listening mode)
MPserver.listen(PORT,()=>{
console.log(`media player is working on ${PORT}`);})