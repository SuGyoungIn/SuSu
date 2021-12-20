$(".section2 > ul > li").click(function () {
	$(".section2 > ul > li").removeClass("team-cat")
	$(this).addClass("team-cat")
})

$(".section2 > ul > li:nth-child(1)").trigger("click");

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

$('.background-black').hide();
$('.pop-up-container').hide();

$('.post').click(function () {
	$('.background-black').show();
	$('.pop-up-container').show();
})

$('.exit').click(function () {
	$('.background-black').hide();
	$('.pop-up-container').hide();
})




$('#first').click(function () {
	$('#first').addClass('index-css');
	$('#second').removeClass('index-css');
	$('#third').removeClass('index-css');
});

$('#second').click(function () {
	$('#second').addClass('index-css');
	$('#first').removeClass('index-css');
	$('#third').removeClass('index-css');
});

$('#third').click(function () {
	$('#third').addClass('index-css');
	$('#first').removeClass('index-css');
	$('#second').removeClass('index-css');
});