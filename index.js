const cheerio = require('cheerio');
const express = require('express');
const axios = require('axios');

const URL = 'https://www.memedroid.com/memes/top/day';
const returnInfo = [];
    
axios.get(URL)
  .then(response =>{
    const html = response.data
    const $ = cheerio.load(html)
   

  $('#main-container').each(function(i, element){
    var temp = $(this).attr('src'); //Create a reference for the image
    returnInfo.push(temp); //Add the URL address to the return info array
  }); 
})

app.get('/', (req, res) => {
  res.json('Welcome')
})

app.get('/img', (req, res) => {
  res.json(returnInfo)
})




  // you cna use randome for randome meme images !! 
  //var randomNum = Math.floor(Math.random() * returnInfo.length);
    //Try to output the url, if it doesn't exist or there is a problem it will log it out for us
 //   try {
   //   //Output the url for the image you can embed this somewhere and it will show it
     // console.log(returnInfo[randomNum]);
    //} catch(e) {
      ////Output the error
      //console.log("Error in the output process: " + e);
    //}
  //} //else {
    ////There was an error with our request
    //console.log("Error in webscrape process: " + err);
  //}

