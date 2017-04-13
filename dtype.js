$(document).ready(function()
{
	$(".solobutt").click(function(event)
		{
			$(".titleholder").toggleClass("titleholderA");
			$(this).toggleClass("solobuttA");
		});

});