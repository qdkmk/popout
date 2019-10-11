$(function(){
  var $panel = $('#js-popout-panel'); //パネル
  var DURATION = 200; //アニメーションのスピード
  //メニューボタンのイベント
  $('#js-popout').on('click', function(){
    $panel.fadeIn(DURATION);
  });
  //閉じるボタンのイベント
  $('#js-popout-close, .nav-item').on('click', function(){
    $panel.fadeOut(DURATION);
  });
});



$(function(){
  function setWindowHeight(){
    $('.l-section-top').css({
      height: $(window).height()
    });
  }

  setWindowHeight();

  $(window).on('resize',function(){
    setWindowHeight();
  });
});
