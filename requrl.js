const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('WELCOME TO HOME PAGE')
   }
   else if(req.url === '/about'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('WELCOME TO ABOUT PAGE')
   }
   else if(res.url === '/contact'){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain')
    res.end('WELCOME TO CONTACT PAGE')
   }else{
    res.statusCode = 404;
    res.setHeader('Content-Type','text-plan');
    res.end('PAGE NOT FOUND')
   }

})
server.listen(port,()=>{
    console.log(`server is listining on port ${port}`)
})