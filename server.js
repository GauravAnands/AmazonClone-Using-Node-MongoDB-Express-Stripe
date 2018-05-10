var express = require('express');
var app = express();

app.listen(3000, function(error){
   if(error){
       throw error;
   }
   console.log(" Server is running on port 3000");
});