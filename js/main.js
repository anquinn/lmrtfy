/* 
 * lmrtfy
 * main.js 
 * Author: Andrew Quinn
 *
*/

$(function(){
	var searchVal;
	var url;

	var newDate = new Date();
	var datetime = newDate.toString();
	var date = datetime.split(" GMT");
	var datefinal = "Last login: " + date[0] + " on console";

	var txt = "";
	var timeOut;
	var txtLen = 0;
	var char = 0;

	/* put the cursor in the search box on load */
	$("#search").focus();

	/* search on enter */
	$("#search").keyup(function(event){
		if(event.keyCode === 13){
			$(".btn").click();
		}
	});

	/* add the date to the first line */
	$('.container').prepend(datefinal);

	/* on click run the animation */
	$('.btn').click(function() {

		/* build the url */
		searchVal = $('#search').val();
		url = "http://www.google.com/search?q=site:linux.die.net+"+searchVal+"&btnI";

		txt = "man " + searchVal;
		txtLen = txt.length;

		$('#searchArea').fadeOut("fast");
		$('#window').hide().delay( 300 ).fadeIn("slow");

		/* animate the typing */
		setTimeout(function(){
			$('#type').text('computer: ~ home$  █');
			(function typeIt() {

				/* randomize the typing speed to make it more realistic*/
				var realistic = Math.round(Math.random() * 170) + 30;
				timeOut = setTimeout(function() {
					char++;
					var type = "computer: ~ home$ " + txt.substring(0, char);
					$('#type').text(type + '█');
					typeIt();

					/* at the end clear and delay */
					if (char === txtLen) {
						/* remove the '█' */
						//$('#type').text($('#type').text().slice(0, -1)); 
						clearTimeout(timeOut);

						setTimeout(function(){
							window.location.href = url;
						}, 800);
					}
				}, realistic);
			}());

		}, 1500);
    });
});


