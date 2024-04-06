import express from 'express';
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    console.log("hello lkll")
    res.send('Hello World! how are yo jskjda  sadu')
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
