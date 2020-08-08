const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const path = require('path')
const app = express();

app.use('/static', express.static(path.join(__dirname, 'static')))

app.use(cors());
app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});


app.get('/', function(req, res) {
	console.log("Hit root: ")
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.get('/download', (req,res) => {
	console.log("req.query", req.query)
	var URL = req.query.URL;
	console.log("Got something to download!", URL)
	res.header('Content-Disposition', 'attachment; filename="video.mp4"');
	ytdl(URL, {
		format: 'mp4'
		}).pipe(res);
});