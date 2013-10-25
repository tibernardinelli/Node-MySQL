var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'127.0.0.1',
	port:3306,
	database:'DB',
	user:'root',
	password:''
});

connection.connect(function(err){
	if (err != null) console.log(err);
});

connection.query('select * from Cliente', function(err,rows) {
	if (err != null) console.log(err);
	else {
		console.log(rows[0]);
	}
});

connection.end();


