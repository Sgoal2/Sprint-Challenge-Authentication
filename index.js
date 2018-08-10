const { server } = require('./server');

server.get('/', (req, res) => {
  res.send('sprinting... 5k')
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
 