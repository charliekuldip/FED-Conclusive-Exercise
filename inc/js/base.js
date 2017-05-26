"use strict";

(function() {
	
	var Carousel = {
		props:{
			current_slide:null,
			total_slides:null,
		    slides:null, 
		    slider_container:null
		},
		init:function(sliderContainer){
			//ADD INITIALIZER CODE HERE
		    this.props.slides = $(sliderContainer).find('article');
		    this.props.slider_container = sliderContainer;
		    this.props.total_slides = this.props.slides.length -1;
			this.props.current_slide = 0;
      		// set width of slider container
      		$(this.props.slider_container).css('width', this.props.slides.length * 100 + "%" );
			
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
			this.update();
		},
		previous:function(){
			//ADD PREVIOUS CODE HERE
      		if(this.props.current_slide > 0) {
				this.props.current_slide--;
			} else {
				this.props.current_slide = this.props.total_slides;
			}
			this.update();
		},
		update:function(){
			//ADD UPDATE CODE HERE
			// set transform amount according to # of slides
      		var tAmt = (100/ (this.props.total_slides+1) * this.props.current_slide) * -1;
      		var translate = "translateX("+ tAmt +"%)";      
      		$(this.props.slider_container).css('transform', translate)
		}
	}
  
  
	jQuery(function(){
    	var sliderContainer = $('.carousel-cells').get(0); 
		Carousel.init(sliderContainer);
	})

})(window);