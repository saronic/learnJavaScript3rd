var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'DrCom@d',
        server: '10.2.0.107', 
        database: 'DrcomBRS' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query("SELECT BOUND_IP FROM  USER_CONFIG WHERE  (BOUND_IP LIKE '10.12.1.%')", function (err, recordset) {
            
            if (err) console.log(err)

            let useIp = recordset.map(function(x) {
                let tmpIp = x.BOUND_IP;
                tmpIp = tmpIp.slice(tmpIp.lastIndexOf('.') + 1);
                return tmpIp;
            });
            //console.log(useIp);
            var resultIp = [];
            for(let i = 0; i < 254; i++) {
                if (useIp.indexOf(i+'') === -1) {
                    resultIp.push(i+'');
                }
            }
            res.json(resultIp);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});