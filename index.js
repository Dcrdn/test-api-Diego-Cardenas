const express=require('express');
const bodyParser=require('body-parser');
const app= express();
var cors = require('cors')
const port=3001;

var jsonParser = bodyParser.json()
var sendPos=0;
var json = require('./mail-data.json'); 

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),cors()
);

app.get('/data', (request, response) => {
    var obj=[json[sendPos],json[sendPos+1]];
    sendPos+=2;
    console.log("to send");
    console.log(obj);
    response.status(200).json(obj);
});


app.listen(process.env.PORT || port, () => {
    console.log(`App running on port ${port}.`)
})