chrome.storage.local.get(['redditTime','timeR'], function(data2) {
  console.log("Time Spent on reddit :", data2.timeR);
  document.write("reddit: ",data2.timeR," seconds\n\n");
  
});

chrome.storage.local.get(['fbTime','timeF'], function(data1) {
  console.log("Time Spent on FB :", data1.timeF);
  document.write("facebook: ",data1.timeF," seconds");
});

