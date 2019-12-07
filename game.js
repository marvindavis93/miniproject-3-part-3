const messageBox = $("#messages");
const startBtn = $("#newGame");



let shownCards = [];
let cardCount = [];
let totalCards = 0;


$(document).ready(function() {
  startBtn.click(function() {
    $("img").css({"opacity": 1})
    messageBox.html("Let's begin!!! Remember the cards...")

    setTimeout(function() {
      $("img").css({"opacity": 0});
      messageBox.html("Click on any 2 cards to find a match")
    }, 5000);
  });

  $("#container > div").click(function() {
    if(shownCards.length === 1){
      const firstCard = shownCards[0];
      const secondCard = $(this);

      if (secondCard.children("img").attr("src") === firstCard.children("img").attr("src")) {
        messageBox.html("Hurray!!! Match found...");
        firstCard.children("img").css({"opacity": 1});
        secondCard.children("img").css({"opacity": 1});
        firstCard.addClass("disable");
        secondCard.addClass("disable");

        totalCards += 2;
        shownCards = [];
        gameOver();
      }else {
        secondCard.children("img").css({"opacity": 1});
        firstCard.children("img").css({"opacity": 1})
        messageBox.html("Oops!!! Please try again...");
        firstCard.addClass("disable");
        secondCard.addClass("disable");

        setTimeout(function() {
          firstCard.children("img").css({"opacity": 0});
          secondCard.children("img").css({"opacity": 0});
          firstCard.removeClass("disable");
          secondCard.removeClass("disable");
        }, 500);
        shownCards = [];
      }
    }else {
      $(this).children("img").css({"opacity": 1});
      $(this).addClass("disable");

      shownCards.push($(this));

      setTimeout(function() {
        $(this).children("img").css({"opacity": 0});
        $(this).removeClass("disable")
      }, 500);
    }
  });

  function gameOver(){
    if (totalCards === 12) {
      messageBox.html("All matches found. Game over!!!");
    }
  }
});
