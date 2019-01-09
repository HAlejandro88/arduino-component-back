const express=require("express"),
app = express(),
bodyParser = require('body-parser'),
cors = require('cors');

const port = process.env.PORT||3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require("./routes/rutaLed")(app);
require("./routes/ledgreen")(app);


app.listen(port,(error,success)=>{
    console.log("conecatda al puerto" + port);
});
