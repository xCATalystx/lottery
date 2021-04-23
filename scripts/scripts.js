let i;
  let lottery = [], number, n;
  let inGame;

  $(document).ready(function(){
    buildButtons();
    clickButtons();
  })
  
  // 產生 49 顆按鈕
  function buildButtons(){
    for(i = 1; i < 50; i++ ){
      $('.lottery-nums').append(`<div>${i}</div>`);
    }
  }
  
  // 1. 為數字按鈕加入事件
  function clickButtons(){
    $('.lottery-nums div').on('click', function(e){
      $(e.target).toggleClass('selected');
    });
  }
  
  //開獎號碼
  function lotteryNumber(){
    while (lottery.length < 6) {
      number = parseInt(Math.random() * 49 + 1, 10);

      if (lottery.indexOf(number) === -1) {
      lottery.push(number);
      }
    } 
  }

  //填入開獎號碼
  function lotteryResult(){
    lottery.forEach(function(e){
        $('.lottery-result > span')
        .append(`<span class='circle'>${e}</span>`);
      })
  }

  //顯示開獎號碼
  function highlight(){
    lottery.forEach(function(e){
      $('.lottery-nums div')
        .eq(e - 1)
        .addClass('highlight');
      })
  }

  //兌獎按鈕開關
  
  function lotteryBTN(){
    $('.btn-lottery').attr('disabled',inGame);
  }
  

  // 重設按鈕
  $('.reset').on('click', function(){
    lottery = [];
    $('.selected').removeClass('selected');
    $('.highlight').removeClass('highlight');
    $('.lottery-result > span').html(`<span></span>`);
    inGame = false;
    lotteryBTN();

  });


  // 兌獎按鈕
  $('.btn-lottery').on('click', function(){
    var selectedNums = $('.lottery-nums').find('.selected').length;
    if(selectedNums === 6){
      lotteryNumber();
      lotteryResult();
      highlight();
      inGame = true;
      lotteryBTN();

    }
    else{
      alert('Please choose 6 numbers!');
    }
  });