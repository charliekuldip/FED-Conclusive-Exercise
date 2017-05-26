"use strict";

(function() {
	
	var Carousel = {
		props:{
			current_slide:null,
			total_slides:null
		},
		init:function(cells){

			//ADD INITIALIZER CODE HERE
			this.props.total_slides = cells.length -1;
			this.props.current_slide = 0;
			this.props.slides = cells;

			var currentSlide = $(this.props.slides).get(this.props.current_slide);
			$(currentSlide).addClass('active');

			this.bindEvents();

		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});


			$(document).keydown(function(e) {
			    switch(e.which) {
			        case 37: // left
			        Carousel.previous();
			        break;

			        case 39: // right
			        Carousel.next();
			        break;

			        default: return; // exit this handler for other keys
			    }
			    e.preventDefault(); // prevent the default action (scroll / move caret)
			});


		},
		next:function(){
			//ADD NEXT CODE HERE
			if( this.props.current_slide <  this.props.total_slides) {
				 this.props.current_slide++;
			} else {
				 this.props.current_slide = 0;
			}
			this.update(this.props.current_slide, 'next');
		},
		previous:function(){
			//ADD PREVIOUS CODE HERE
			if(this.props.current_slide > 0) {
				this.props.current_slide--;
			} else {
				this.props.current_slide = this.props.total_slides;
			}
			this.update(this.props.current_slide, 'previous');
		},
		update:function(current_slide, direction){
			//ADD UPDATE CODE HERE
			var currentSlide = $(this.props.slides).get(current_slide);
		
			$('.active').removeClass('active');
			$(currentSlide).addClass('active');
		}
	}
	$(function(){
		var $carCells = $('.carousel-cells > article');
		Carousel.init($carCells);

	})

})(window);