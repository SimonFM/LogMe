var data, timeIteratorR, timeIteratorF;

var url = window.location.href;

if(url.includes("reddit.com")){
  /*
    Get the time spent on reddit and set it to the the temp to be 
    manipulated.
  */
  chrome.storage.local.get(['redditTime','timeR'], function(data) {
    //console.log("Time Spent on reddit :", data.timeR);
    
    if(typeof data.timeR == "undefined" || typeof data.timeR == null) 
      timeIteratorR = 0;
    else timeIteratorR = data.timeR;
  });
  
  /*
    This function acts as a timer and is activated every second
  */
  function myTimer2(){
    timeIteratorR = timeIteratorR + 1;
    //console.log("reddit time:",timeIterator,"seconds");
    chrome.storage.local.set({redditTime:'reddit',timeR:timeIteratorR}, function() {});
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
    timeIteratorF = 0;
   else timeIteratorF = data.timeF;
});

   /*
    This function acts as a timer and is activated every second
  */
  function myTimer1(){
    timeIteratorF = timeIteratorF + 1;
    //console.log("facebook time:",timeIterator,"seconds");
    chrome.storage.local.set({fbTime:'facebook',timeF:timeIteratorF}, function() {});
  }

  var time = setInterval(function(){myTimer1()},1000);
}