$(document).ready(function()
{
	$(".solobutt").click(function(event)
		{
			$(".titleholder").toggleClass("titleholderA");
			$(this).toggleClass("solobuttA");
		});

	// code for laocoon
		setInterval(function clocker()
		{
			var month = [
			  "January",
			"February",
			"March",
			"April",
			 "May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"];

			var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat",]
			var currentTime = new Date ( );
			var td = currentTime.getDate();
			var tm = currentTime.getMonth();
			var ty = currentTime.getFullYear();
			var tdy = currentTime.getDay();
			var th = currentTime.getHours();
			var tmt = currentTime.getMinutes();
			var ts = currentTime.getSeconds();
			var n = currentTime.getMilliseconds();
			var tmm = currentTime.getTime();
			var monthL = month[tm]
			var day = day[tdy]
			var browser = "BROWSER// "+ navigator.appName + " "+navigator.appCodeName;
			var timelist = td +" "+" "+ty+" "+" "+ th +" ' "+ tmt +" '' "+ ts+ " ''' "+n+"*";
			$(".dater").html(timelist);
		},1);


	//contact form code 
		$("#emailactivate").click(function()
		{
			$("#emailformcontain").show();
		});		

		$('#emailform').on('keyup keypress', function(e) 
		{
		  var keyCode = e.keyCode || e.which;
		  if (keyCode === 13) 
			  { 
			    e.preventDefault();
			    return false;
			  }
		});


		$("#pinkskull").click(function()
			{
				$("#skullpattern").attr("id","skullpattern2");
			});

});