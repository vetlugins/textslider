/**
 * Created by vegas s on 04.04.2018.
 ***********************************
 */

(function( $ ) {

	$.fn.textSlider = function(options) {

		var defaults = {
			animate: 'fade',
			speed: 3000,
			duration: 1000
		};

		if (options == null) {
			options = {
				'animate' : this.data('animate') || defaults.animate,
				'speed' : this.data('speed') || defaults.speed,
				'duration' : this.data('duration') || defaults.duration
			}
		}

		var settings = $.extend( defaults, options);

		var items = this.find('.item'),
			section = this;

		items.css('opacity',0);
		items.first().animate({'opacity': 1},settings['duration']);

		setInterval(function () {
			section.find('.item:first')
				.animate({'opacity': 0},settings['duration'])
				.next()
				.animate({'opacity': 1},settings['duration'])
				.end()
				.appendTo(section);
		}, settings['speed']);


	};
})(jQuery);