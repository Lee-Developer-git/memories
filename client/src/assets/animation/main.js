import React from 'react';

const useScript = () => {
  const script = document.createElement('script');

  script.innerHTML = `
    var winScrollTop; // 스크롤바의 높이를 담을 변수 선언
    var section = $('.page_section');

    var offsetTop = [];
    var offsetBottom = [];

    function setValue() {
      winScrollTop = $(window).scrollTop(); // 스크롤 화면 길이 구하기!!
      section.each(function(index, obj) { //모든 섹션의 top, bottom값 구하기
        offsetTop[index] = $(obj).offset().top;
        offsetBottom[index] = $(obj).offset().top + $(obj).height();
      });
    }

    function checkInSection(){
      if(winScrollTop >= offsetTop[0] && offsetBottom[0] >= winScrollTop ){
        sectionActive(0);
      } else if (winScrollTop >= offsetTop[1] && offsetBottom[1] >= winScrollTop ){
        sectionActive(1);
      } else if (winScrollTop >= offsetTop[2] && offsetBottom[2] >= winScrollTop ){
        sectionActive(2);
      } if (winScrollTop >= offsetTop[3] && offsetBottom[3] >= winScrollTop){
        sectionActive(3);
      }
    }

    function sectionActive(index){ //섹션의 인덱스값을 받음
      listActive(index);
      menuBarActive(index);
    }

    function listActive(index){
      var list = document.querySelectorAll('.nav_list > a');
      for (var i = 0; i < list.length; i++){
        list[i].style.color = '#A4A4A4';
      }
      list[index].style.color = '#FF0000';
    }

    function menuBarActive(index){
      var Bar = document.getElementById('Menu_bar');
      if (index === 1){
        Bar.style.color = '#FFFFFF';
      } else {
        Bar.style.color = '#000000';
      }
    }

    $('#intro_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: offsetTop[0]+1}, 200);
    });
    $('#history_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: offsetTop[1]+1}, 200);
    });
    $('#exhibition_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: offsetTop[2]+1}, 200);
    });
    $('#involved_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: offsetTop[3]}, 200);
    });
    
    function init() {
      setValue();
      checkInSection();
    }

    $(window).scroll(function() {
      winScrollTop = $(window).scrollTop();
      checkInSection();
    })

    $(function() {
      init();
    })`;

  script.async = true;

  const element = () => {
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  };
  setInterval(element, 500);
};

export default useScript;
