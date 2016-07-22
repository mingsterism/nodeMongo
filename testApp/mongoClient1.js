var MongoClient = require('mongodb').MongoClient;
var connectionUrl = 'mongodb://129.59.246.186:27017/myproject1', 
	sampleCollection = 'chapters';

var chapters = [{
	'Title': 'Snow Crash', 
	'Author': 'Neal Stephenson'
	}, {
		'Title': 'Snow Crash', 
		'Author': 'Neal Stephenson'
	}];

MongoClient.connect(connectionUrl, function(err, db) {
	console.log('Connected correctly to server');
	// Get some collection
	var collection = db.collection(sampleCollection);
	collection.insert(chapters, function(error, result) {
		if(!error) {
			console.log("Success :" + result.ops.length + " chapters inserted!");
		} else {
			console.log("Some error was encountered!");
		}
		db.close();
	});
});