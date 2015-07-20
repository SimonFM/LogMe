var data, timeIterator;

var url = window.location.href;

if(url.includes("reddit.com")){
  /*
    
  */
  chrome.storage.local.get(['redditTime','timeR'], function(data) {
    console.log("Time Spent on reddit :", data.timeR);
    
    if(typeof data.timeR == 'undefined') timeIterator = 0;
    else timeIterator = data.timeR;
  });
  
  /*
    
  */
  function myTimer2(){
    timeIterator = timeIterator + 1;
    console.log("reddit time:",timeIterator,"seconds");
    chrome.storage.local.set({redditTime:'reddit',timeR:timeIterator}, function() {});
  }

  var time = setInterval(function(){myTimer2()},1000);

}
else if(url.includes("facebook.com")){
  /*
    
  */
  chrome.storage.local.get(['fbTime','timeF'], function(data) {
  console.log("Time Spent on facebook :", data.timeF);
  
   if(typeof data.timeF == 'undefined') timeIterator = 0;
   else timeIterator = data.timeF;
});

  /*
    
  */
  function myTimer1(){
    timeIterator = timeIterator + 1;
    console.log("facebook time:",timeIterator,"seconds");
    chrome.storage.local.set({redditTime:'reddit',timeF:timeIterator}, function() {});
  }

  var time = setInterval(function(){myTimer1()},1000);
}





