const express = require('express');
const { Client } = require('pg');

const app = express();
const port_number = process.env.PORT || 5000;



app.get('/', (req, res) => {
  const client = new Client({
  connectionString: 'postgres://lmhrwfibwopckp:67fb2c92cbb0266092ddcbb3a8743609bf7194658569cece25302d1e17ea652f@ec2-34-194-158-176.compute-1.amazonaws.com:5432/df2vgfq54gceej',
  ssl: {
    rejectUnauthorized: false
  }
});
  client.connect();

  client.query('SELECT * FROM committee', (err, result) => {
    if (err) throw err;
    res.send(result.rows);
    //client.end();
  });
});

app.listen(port_number, () => {
  console.log('Example app listening on port 4000!');
});

//Run app, then load http://localhost:4000 in a browser to see the output.
