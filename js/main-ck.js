/* 
 * lmrtfy
 * main.js 
 * Author: Andrew Quinn
 *
*/$(function(){var e,t,n=new Date,r=n.toString(),i=r.split(" GMT"),s="Last login: "+i[0]+" on console",o="",u,a=0,f=0;$("#search").focus();$("#search").keyup(function(e){e.keyCode===13&&$(".btn").click()});$(".container").prepend(s);$(".btn").click(function(){e=$("#search").val();t="http://www.google.com/search?q=site:linux.die.net+"+e+"&btnI";o="man "+e;a=o.length;$("#searchArea").fadeOut("fast");$("#window").hide().delay(300).fadeIn("slow");setTimeout(function(){$("#type").text("computer: ~ home$  █");(function e(){var n=Math.round(Math.random()*170)+30;u=setTimeout(function(){f++;var n="computer: ~ home$ "+o.substring(0,f);$("#type").text(n+"█");e();if(f===a){clearTimeout(u);setTimeout(function(){window.location.href=t},800)}},n)})()},1500)})});