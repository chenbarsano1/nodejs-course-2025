import http from 'http'

const PORT = process.env.PORT

// req - http.IncomingMessage
// res - http.ServerResponse
const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    // res.write('hi')
    // res.setHeader('Content-Type', 'text/plain')
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Hello</h1>')
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})