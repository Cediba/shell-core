// Express actor wraps around express and lets us manage it in an actor type fashion. 
// See: https://www.npmjs.com/package/express
class ExpressActor
	{
	initialize(selfActor)
		{
		this.self = selfActor;
		this.express = require('express');
		this.server = this.express();
		this.port = 3000;
		this.setupExpressRoutes();
		this.startServer(this.port);
		this.os = require('os');
		this.ejs = require('ejs');
		}

	returnData()
		{
		return  {
			port: this.port
			}
		}

	setupExpressRoutes()
		{
		this.server.use(this.express.static('public'))
		this.server.set('view engine', 'ejs');

		this.server.get("/button/", function(req, res){
			res.render(`debug/404`, {users: []});
		})		
		}

	startServer(port)
		{
		this.server.listen(port, function ()
                                        {
                                        console.log("Server is Listening")
                                        })

		}
	stopServer()
		{
		this.server.stop();
		}

	update(data)
		{
//		console.log(this.server)
		}

	}



module.exports = ExpressActor
