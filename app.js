const express = require('express');
const multer = require('multer');
const helper = require('./scripts/helper.js')
const path = require('path')

var store = multer.diskStorage({
    filename: function(req, file, cb){
       cb(null, `${Date.now()}-${file.originalname}.jpeg`)
    },
    destination: function(req, file, cb){
        cb(null, path.join(__dirname,'/uploads'))
    }

});
var upload = multer({storage: store})
const app = express();

app.use(helper.getDebugMiddleware(true));

app.get('/', function(req, res){ 
    helper.log("Serving 'upload-form.html'","/")
    res.status(200).sendFile(__dirname+'/html/upload-form.html'); 
})

app.get('/success', function(req, res){
    helper.log("Server 'upload-success.html'", "/success");
    res.status(200).sendFile(__dirname+'/html/upload-success.html');
})
 
app.post('/', upload.single('image'), function(req, res){
    helper.log(`Incoming POST: ${req.file.filename}`, '/')
    helper.log(`Saving file to ${req.file.destination}`, '/')
    res.status(302).redirect('/success');
});

app.listen(8000, function(){
    helper.log('Listening On Port 8000', '/');
});