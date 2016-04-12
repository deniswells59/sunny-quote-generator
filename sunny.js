$('#tweet').click(function(){
  var quote = $('.sq-quote').text();
  var who = " " + $('.sq-who').text(); window.open('http://twitter.com/share?url=""&text=' + quote + who + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});
