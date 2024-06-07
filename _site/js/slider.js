const courseGridSlider = function (){
    const courseGridSlider = document.querySelector('#course-grid');
    console.log(courseGridSlider);
      if(!courseGridSlider) return;
      
  
      return $(courseGridSlider).slick({
            dots: false,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            appendDots: $('.dots'),
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 568,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
            ]
          });
  
  }()