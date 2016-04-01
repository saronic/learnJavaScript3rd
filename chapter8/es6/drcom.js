var sql = require('mssql');

var config = {
        user: 'sa',
        password: 'DrCom@d',
        server: '10.2.0.107', 
        database: 'DrcomBRS' 
    };
sql.connect(config).then(function() {
    // Query 
    
	new sql.Request().query("SELECT BOUND_IP FROM  USER_CONFIG WHERE  (BOUND_IP LIKE '10.12.1.%')").then(function(recordset) {
			//console.log(recordset);
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
			console.log(resultIp);
	}).catch(function(err) {
		console.log(err);
	});
 
	
}).catch(function(err) {
	// ... connect error checks 
});