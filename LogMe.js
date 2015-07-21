var timeIterator;
/*
  The following code pushes the time spent on reddit in to the chrome storage
  API.
  if the data comes back as null or undefined then the extension starts off at 0.
*/
chrome.storage.local.get(['redditTime','timeR'], function(data2) {
  //console.log("Time Spent on reddit :", data2.timeR);
  if(typeof data2.timeR == "undefined" || data2.timeR == null) timeIterator = 0;
  else timeIterator = data2.timeR;
  document.write("<h1>Reddit</h1><p><b> ",secondsToString(timeIterator),"</b></p>");
  document.body.style.backgroundColor = "rgb(22, 160, 133)";
  
});
/*
  The following code pushes the time spent on facebook in to the chrome storage
  API.
  if the data comes back as null or undefined then the extension starts off at 0.
*/
chrome.storage.local.get(['fbTime','timeF'], function(data1) {
  //console.log("Time Spent on FB :", data1.timeF);
  if(typeof data1.timeF == "undefined" || data1.timeF == null) timeIterator = 0;
  else timeIterator = data1.timeF;
  document.write("<h1>Facebook</h1><p><b> ",secondsToString(timeIterator),"</b></p>");
});

/*
  The following code pushes the time spent on netflix in to the chrome storage
  API.
  if the data comes back as null or undefined then the extension starts off at 0.
*/
chrome.storage.local.get(['netflixTime','timeN'], function(data3) {
  //console.log("Time Spent on FB :", data1.timeF);
  if(typeof data3.timeN == "undefined" || data3.timeN == null) timeIterator = 0;
  else timeIterator = data3.timeN;
  document.write("<h1>Netflix</h1><p><b> ",secondsToString(timeIterator),"</b></p>");
});
/*
  The following code pushes the time spent on spotify in to the chrome storage
  API.
  if the data comes back as null or undefined then the extension starts off at 0.
*/
chrome.storage.local.get(['spotifyTime','timeSP'], function(data4) {
  //console.log("Time Spent on FB :", data1.timeF);
  if(typeof data4.timeSP == "undefined" || data4.timeSP == null) timeIterator = 0;
  else timeIterator = data4.timeSP;
  document.write("<h1>Spotify</h1><p><b> ",secondsToString(timeIterator),"</b></p>");
});
/*
  Found this function on stackoverflow
*/
function secondsToString(seconds)
{
  var numyears = Math.floor(seconds / 31536000);
  var numdays = Math.floor((seconds % 31536000) / 86400); 
  var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
  var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
  return numyears + " years " +  numdays + " days " + numhours + " hours " + numminutes + " minutes " + numseconds + " seconds";
}