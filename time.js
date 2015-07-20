var data, timeIterator;

var url = window.location.href;

if(url.includes("reddit.com")){
  /*
    Get the time spent on reddit and set it to the the temp to be 
    manipulated.
  */
  chrome.storage.local.get(['redditTime','timeR'], function(data) {
    //console.log("Time Spent on reddit :", data.timeR);
    
    if(typeof data.timeR == "undefined" || typeof data.timeR == null) 
      timeIterator = 0;
    else timeIterator = data.timeR;
  });
  
  /*
    This function acts as a timer and is activated every second
  */
  function myTimer2(){
    timeIterator = timeIterator + 1;
    //console.log("reddit time:",timeIterator,"seconds");
    chrome.storage.local.set({redditTime:'reddit',timeR:timeIterator}, function() {});
  }

  var time = setInterval(function(){myTimer2()},1000);

}
/*
  Otherwise we have found facebook and do the same as above.
*/
else if(url.includes("facebook.com")){
  /*
    Get the time spent on facebook and set it to the the temp to be 
    manipulated.
  */
  chrome.storage.local.get(['fbTime','timeF'], function(data) {
  //console.log("Time Spent on facebook :", data.timeF);
  
   if(typeof data.timeF == "undefined" || typeof data.timeF == null) 
    timeIterator = 0;
   else timeIterator = data.timeF;
});

   /*
    This function acts as a timer and is activated every second
  */
  function myTimer1(){
    timeIterator = timeIterator + 1;
    //console.log("facebook time:",timeIterator,"seconds");
    chrome.storage.local.set({redditTime:'reddit',timeF:timeIterator}, function() {});
  }

  var time = setInterval(function(){myTimer1()},1000);
}