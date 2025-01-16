import {convertToUSD } from './utils';

const express = require('express');
const app = express();

app.post('/user-salary/:id', async (req, res) => {


  const userId = req.params.id;
  
    const user = await fetchUserData(userId); // ignore this line. Already exists and works fine

  // convert Salary to USD
  const salaryInUSB = convertToUSD(user.salary, "GBP")
  res.json({ user, salaryInUSB });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});