$(document).ready(function()
{
	var windowSize;
	var teams = [];
	var columns = {
		[0]:{},
		[1]:{}
	};

	var flags = {
		italian:"italian_flag.png"
	};

	function LoadInfo()
	{
		$.ajax({
			url:"js/seriea.json",
			dataType:"json",
			success:function(data)
			{
				teams = data.teams;
				Generate(teams);
			}
		});
	}

	function Generate(teams)
	{
		$('#subFirst').html('');
		$('#subSecond').html('');

		teams.forEach(function(element, i)
		{
			$('#subFirst').append('<div class="row1 row"></div>');
			$('.row1').eq(i).append('<div class="place">' + element.place +'</div>');

			switch(element.flag_country)
			{
				case "Италия":
					$('.row1').eq(i).append('<div class="flag" style="background-image:url(' + flags.italian +')"></div>');
				break;
			}


			$('.row1').eq(i).append('<div class="title"><a href="' + element.tag_url +'" target="_blank">' + element.name +'</a></div>');

			switch(element.color)
			{
				case "1":
					$('.place').eq(i).addClass('cl');
				break;
				case "2":
					$('.place').eq(i).addClass('le');
				break;
				case "4":
					$('.place').eq(i).addClass('au');
				break;			
			}

			$('#subSecond').append('<div class="row2 row"></div>');
			$('.row2').eq(i).append('<div class="subRow2 games">' + element.matches +'</div>');
			$('.row2').eq(i).append('<div class="subRow2 wins">' + element.win +'</div>');
			$('.row2').eq(i).append('<div class="subRow2 draws">' + element.draw +'</div>');
			$('.row2').eq(i).append('<div class="subRow2 defeats">' + element.lose +'</div>');
			$('.row2').eq(i).append('<div class="subRow2 scored">' + element.goals +'</div>');
			$('.row2').eq(i).append('<div class="subRow2 missed">' + element.conceded_goals +'</div>');
			$('.row2').eq(i).append('<div class="subRow2 points">' + element.score +'</div>');
		});
	}


	LoadInfo();
	

	$('#sort1').click(function()
	{
		var arr = teams;
		var temp, k;

		for(var i = 0; i < arr.length;i++)
		{
			k = i;
			temp = arr[i];

			for(var j = i + 1;j < arr.length;j++)
			{
				if(arr[j].place < temp.place)
				{
					k = j;
					temp = arr[j];
				}
			}

			arr[k] = arr[i];
			arr[i] = temp;
		}

		teams = arr;

		Generate(teams);
	});

	$('#sort2').click(function()
	{
		var arr = teams;
		var temp, k;

		for(var i = 0; i < arr.length;i++)
		{
			k = i;
			temp = arr[i];

			for(var j = i + 1;j < arr.length;j++)
			{
				if(arr[j].name < temp.name)
				{
					k = j;
					temp = arr[j];
				}
			}

			arr[k] = arr[i];
			arr[i] = temp;
		}

		teams = arr;

		Generate(teams);
	});

	$('#sort3').click(function()
	{
		var arr = teams;
		var temp, k;

		for(var i = 0; i < arr.length;i++)
		{
			k = i;
			temp = arr[i];

			for(var j = i + 1;j < arr.length;j++)
			{
				if(arr[j].win > temp.win)
				{
					k = j;
					temp = arr[j];
				}
			}

			arr[k] = arr[i];
			arr[i] = temp;
		}

		teams = arr;

		Generate(teams);
	});

});