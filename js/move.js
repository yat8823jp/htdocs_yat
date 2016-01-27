$(window).keydown(function(e){
	var t = $( '.mod-test' ).offset().top;
	var l = $( '.mod-test' ).offset().left;
	// スピード
	var speed = 100;

	// キー
	var key_left  = e.keyCode == 37;
	var key_up    = e.keyCode == 38;
	var key_right = e.keyCode == 39;
	var key_down  = e.keyCode == 40;

	// 上下左右動作
	if( key_left ) {
		// speed++;
		var lx = l -= speed;
		$('.mod-test').css({left: lx});
	}
	if( key_up ) {
		var uy = t -= speed;
		$('.mod-test').css({top: uy});
	}
	if( key_right ) {
		var rx = l += speed;
		$('.mod-test').css({left: rx});
	}
	if( key_down ) {
		var dy = t += speed;
		$('.mod-test').css({top: dy});
	}
});