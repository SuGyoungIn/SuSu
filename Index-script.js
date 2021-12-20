function counter() {

	let reddot_dday = new Date("Feb 11,2022,09:00").getTime();
	let if_dday = new Date("Mar 22,2022,09:00").getTime();
	let idea_dday = new Date("May 13,2022,09:00").getTime();
	let good_dday = new Date("May 26,2022,09:00").getTime();

	setInterval(function () {
		let now = new Date();
		let distance = reddot_dday - now;
		let d = Math.floor(distance / (1000 * 60 * 60 * 24));

		$('#reddot-dday').html('<div>D - ' + d + '</div>')
	}, 500);

	setInterval(function () {
		let now = new Date();
		let distance = if_dday - now;
		let d = Math.floor(distance / (1000 * 60 * 60 * 24));

		$('#if-dday').html('<div>D - ' + d + '</div>')
	}, 500);

	setInterval(function () {
		let now = new Date();
		let distance = idea_dday - now;
		let d = Math.floor(distance / (1000 * 60 * 60 * 24));

		$('#idea-dday').html('<div>D - ' + d + '</div>')
	}, 500);

	setInterval(function () {
		let now = new Date();
		let distance = good_dday - now;
		let d = Math.floor(distance / (1000 * 60 * 60 * 24));

		$('#good-dday').html('<div>D - ' + d + '</div>')
	}, 500);
}
counter();


$('.emoji-img > img:nth-child(2)').click(function () {
    $('.emoji-img > img:nth-child(1)').toggleClass('toggle-opacity')
})

$('#field').click(function () {
    $('#term').removeClass('index-click');
    $('#standard').removeClass('index-click');
    $('#field').addClass('index-click');

    $('#award-field').show();
    $('#award-term').hide();
    $('#award-standard').hide();
});

$('#term').click(function () {
    $('#field').removeClass('index-click');
    $('#standard').removeClass('index-click');
    $('#term').addClass('index-click');

    $('#award-term').show();
    $('#award-field').hide();
    $('#award-standard').hide();
})

$('#standard').click(function () {
    $('#field').removeClass('index-click');
    $('#term').removeClass('index-click');
    $('#standard').addClass('index-click');
    
    $('#award-term').hide();
    $('#award-field').hide();
    $('#award-standard').show();
})

$('#field').trigger('click');

$(".section2 > ul > li").click(function () {
	$(".section2 > ul > li").removeClass("award-cat2")
	$(this).addClass("award-cat2")
})

$(".section2 > ul > li:nth-child(1)").trigger("click");
$("#reddot").hover(
	function () {
		$("#if-dday").css('opacity', '0');
		$("#idea-dday").css('opacity', '0');
		$("#good-dday").css('opacity', '0');
	},
	function () {
		$("#if-dday").css('opacity', '1');
		$("#idea-dday").css('opacity', '1');
		$("#good-dday").css('opacity', '1');
	});

$("#ifaward").hover(
	function () {
		$("#reddot-dday").css('opacity', '0');
		$("#idea-dday").css('opacity', '0');
		$("#good-dday").css('opacity', '0');
	},
	function () {
		$("#reddot-dday").css('opacity', '1');
		$("#idea-dday").css('opacity', '1');
		$("#good-dday").css('opacity', '1');
	});

$("#ideaaward").hover(
	function () {
		$("#reddot-dday").css('opacity', '0');
		$("#if-dday").css('opacity', '0');
		$("#good-dday").css('opacity', '0');
	},
	function () {
		$("#reddot-dday").css('opacity', '1');
		$("#if-dday").css('opacity', '1');
		$("#good-dday").css('opacity', '1');
	});

$("#goodaward").hover(
	function () {
		$("#reddot-dday").css('opacity', '0');
		$("#if-dday").css('opacity', '0');
		$("#idea-dday").css('opacity', '0');
	},
	function () {
		$("#reddot-dday").css('opacity', '1');
		$("#if-dday").css('opacity', '1');
		$("#idea-dday").css('opacity', '1');
	});