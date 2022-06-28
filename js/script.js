'use strict';

window.addEventListener('DOMContentLoaded', function() {


    //вставляет нажатые слова в инпут
    let tapSearch = document.querySelectorAll ('.header__option'),
        input = document.querySelector('input'),
        valueInput = [
            'Проморолик',
            'Поиск по карте',
            'Идеи для путешествий',
            '#Видео',
            '#360°',
            '#VR',
            '#3D'
        ];

    tapSearch.forEach(function(item, i) {
        item.addEventListener('click', function() {
            input.value = valueInput[i];
        })
    });


        // при нажатии сердце становится красным
        let heart = document.querySelectorAll('.places__heart');

        heart.forEach(function(item) {
            item.addEventListener('click', function() {
                this.classList.toggle('places__heart_active');
            })
        });


// переворачивание карточек
        let card = document.querySelectorAll('.tour__card');
        card.forEach(function(item){
            item.addEventListener( 'click', function() {

                this.classList.toggle('is-flipped');
        });
});
});

//slider
$('.choose__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    focusOnSelect: true
  });

//pageup
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
