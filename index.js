const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
    console.log(`Breed: ${data}`);

    superagent
        .get(`https://dog.ceo/api/breed/hound/images/random`)
        .end((err,res) => {
        console.log(res.body);
        if (err) return console.log(err.message);
        fs.writeFile('dog-img.txt', res.body, 'utf8', (err) => {
            console.log('Random dog image save');
        });
    });
});

