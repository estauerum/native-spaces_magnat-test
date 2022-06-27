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
});
