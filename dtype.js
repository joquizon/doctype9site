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


		$("#skullbutt1").click(function()
			{
				$(".skullpattern").attr("class","skullpattern2");
				$("#basemask").attr("id","basemask2");	
				$("#mographbox2").attr("id","mographbox2a");
				$("#mographbox3").attr("id","mographbox3a");
				$("#mographbox3b").attr("id","mographbox3a");
				$("#morect2").attr("id","morect2a");
				$("#morect3").attr("id","morect3a");
				$("#morect3b").attr("id","morect3a");
				$("#teeth").fadeIn(1000);	
				$("#positnumber").text("02");
				$(".skullbuttonA").attr("class","skullbuttonA1");
				$(".skullbuttonB").attr("class","skullbuttonB1");
				$(".skullbuttonB2").attr("class","skullbuttonB1");
				$(".skullbuttonC").attr("class","skullbuttonC1");	
				$(".skullbuttonC1").attr("class","skullbuttonC2");	
				$(this).hide();
				$("#skullbutt3").show();	
			});

		$("#skullbutt2").click(function()
			{
				$(".skullpattern").attr("class","skullpattern2");
				$("#basemask").attr("id","basemask2");	
				$("#mographbox2a").attr("id","mographbox2");
				$("#mographbox3a").attr("id","mographbox3");
				$("#mographbox2b").attr("id","mographbox2");
				$("#mographbox3b").attr("id","mographbox3");
				$("#morect2a").attr("id","morect2");
				$("#morect3a").attr("id","morect3");
				$("#morect2b").attr("id","morect2");
				$("#morect3b").attr("id","morect3");
				$("#teeth").fadeIn(1000);	
				$("#positnumber").text("02");
				$(".skullbuttonA1").attr("class","skullbuttonA");
				$(".skullbuttonA2").attr("class","skullbuttonA");	
				$(".skullbuttonB1").attr("class","skullbuttonB2");
				$(".skullbuttonC1").attr("class","skullbuttonC");
				$(".skullbuttonC2").attr("class","skullbuttonC");
				$("#skullbutt1").show();


			});

				$("#skullbutt3").click(function()
			{
				$(".skullpattern").attr("class","skullpattern2");
				$("#basemask").attr("id","basemask2");	
				$("#mographbox2").attr("id","mographbox2a");
				$("#mographbox3a").attr("id","mographbox3b");
				$("#morect2").attr("id","morect2a");
				$("#morect3a").attr("id","morect3b");
				$("#teeth").fadeIn(1000);	
				$("#positnumber").text("02");
				$(".skullbuttonA1").attr("class","skullbuttonA2");	
				$(this).hide();	
				$("#skullbutt1").show();
			});

});