const express = require('express') // importing express and defining port on which express app will be available
const PORT = 8080

const app = express() // declaring instance of express


app.get('/', (request, response) => { // descriptor for GET request on path /
	response.send('Hello World!')							 // (basically when you go to http://localhost:port/ in your browser)
})																 // this one just sends a string back to you


app.listen(PORT, () => { // function, that starts the server
		console.log(`App started on port ${PORT}`) // here it prints address by which it is accessible,
		console.log(`You can see it in the browser by going to http://localhost:${PORT}`) //  but you can put here anything
	})