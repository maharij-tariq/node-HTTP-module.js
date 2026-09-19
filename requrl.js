const http = require("node:http");
const port = 7000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("WELCOME TO HOME PAGE");
      break;
    case "/about":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("WELCOME TO ABOUT PAGE");
      break;
    case "/contact":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("WELCOME TO CONTACT PAGE");
      break;
    case "/users":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("WELCOME TO USERS PAGE");
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("PAGE NOT FOUND");
  }
});
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// import http from "node:http"

// const server = http.createServer((req,res)=>{
//    if(req.url === '/'){
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('WELCOME TO HOME PAGE')
//    }
//    else if(req.url === '/about'){
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('WELCOME TO ABOUT PAGE')
//    }
//    else if(res.url === '/contact'){
//     res.statusCode = 200;
//     res.setHeader('Content-Type','text/plain')
//     res.end('WELCOME TO CONTACT PAGE')
//    }else{
//     res.statusCode = 404;
//     res.setHeader('Content-Type','text-plan');
//     res.end('PAGE NOT FOUND')
//    }

// })
// server.listen(port,()=>{
//     console.log(`server is listining on port ${port}`)
// })
