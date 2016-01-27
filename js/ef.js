$(function(){
	$('.mod-title').textillate({
		loop: true,
		in: {
			delay: 10,
			shuffle: true,
			effect: "bounceInDown"
		},

		out: {
			delay: 5,
			effect: 'bounceOutUp'
		}
	});
});