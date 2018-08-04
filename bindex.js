$(document).ready();

$("#en").css("color", "black");
$("#jp").css("color", "grey");
$('.japanese').hide();

$("#en").click(function() {
  $('.english').show();
  $('.japanese').hide();

  $(this).css("color", "black");
  $("#jp").css("color", "grey");
})


$("#jp").click(function() {
  $('.english').hide();
  $('.japanese').show();


  $(this).css("color", "black");
  $("#en").css("color", "grey")
})


$('#intro').hide();

$('#exp-placeholder').hide();

$('#ram-1').hide();

$("#introductions").click(function() {
  $('#intro').slideToggle('fast');
});

$("#experiments").click(function() {
  $('#exp-placeholder').slideToggle('fast');
});

$("#ramblings").click(function() {
  $('#ram-1').slideToggle('fast');
});


// Tartan preview

$('#tartan').mouseenter(function() {

  $('#intro').css('background-image', 'url("media/tartan.jpg")');

});

$('#tartan').mouseleave(function() {
  $('#intro').css('background-image', 'none')

});
$('#tatan').mouseenter(function() {
  $('#intro').css('background-image', 'url("media/tartan.jpg")');


});

$('#tatan').mouseleave(function() {
  $('#intro').css('background-image', 'none')

});

$('#タータン').mouseenter(function() {

  $('#intro').css('background-image', 'url("media/tartan.jpg")');

});

$('#タータン').mouseleave(function() {
  $('#intro').css('background-image', 'none')

});
$('#タータン').mouseenter(function() {
  $('#intro').css('background-image', 'url("media/tartan.jpg")');


});

$('#タータン').mouseleave(function() {
  $('#intro').css('background-image', 'none')

});

// Octo slideshow

var octoIndex = 1;
var next = $('#octo-slideshow-container > .next');
var prev = $('#octo-slideshow-container > .prev');

for (var i = 0; i < next.length; i++) {
  next[i].addEventListener('click', function() {
    plusOctos(1);
  });
}
for (var i = 0; i < prev.length; i++) {
  prev[i].addEventListener('click', function() {
    plusOctos(-1);
  });
}
var maru1 = $('#octo-maru-container > #maru1');
var maru2 = $('#octo-maru-container > #maru2');
var maru3 = $('#octo-maru-container > #maru3');
var maru4 = $('#octo-maru-container > #maru4');

maru1.click(function() {
  currentOcto(1);
});

maru2.click(function() {
  currentOcto(2);
});

maru3.click(function() {
  currentOcto(3);
});

maru4.click(function() {
  currentOcto(4);
});
showOctos(octoIndex);

function plusOctos(n) {
  showOctos(octoIndex += n);
}

function currentOcto(n) {
  showOctos(octoIndex = n);
}

function showOctos(n) {
  var i;
  var octos = document.getElementsByClassName("myOctos");
  var marus = document.getElementsByClassName("maru");
  if (n > octos.length) {
    octoIndex = 1
  }
  if (n < 1) {
    octoIndex = octos.length
  }
  for (i = 0; i < octos.length; i++) {
    octos[i].style.display = "none";
  }
  for (i = 0; i < marus.length; i++) {
    marus[i].className = marus[i].className.replace(" active", "");
  }
  octos[octoIndex - 1].style.display = "block";
  marus[octoIndex - 1].className += " active";
}

// Fuji slideshow

var fujiIndex = 1;
var next = $('#fuji-slideshow-container > .next');
var prev = $('#fuji-slideshow-container > .prev');

for (var i = 0; i < next.length; i++) {
  next[i].addEventListener('click', function() {
    plusFujis(1);
  });
}
for (var i = 0; i < prev.length; i++) {
  prev[i].addEventListener('click', function() {
    plusFujis(-1);
  });
}
var ball1 = $('#fuji-ball-container > #ball1');
var ball2 = $('#fuji-ball-container > #ball2');
var ball3 = $('#fuji-ball-container > #ball3');
var ball4 = $('#fuji-ball-container > #ball4');

ball1.click(function() {
  currentFuji(1);
});

ball2.click(function() {
  currentFuji(2);
});

ball3.click(function() {
  currentFuji(3);
});

ball4.click(function() {
  currentFuji(4);
});
showFujis(fujiIndex);

function plusFujis(n) {
  showFujis(fujiIndex += n);
}

function currentFuji(n) {
  showFujis(fujiIndex = n);
}

function showFujis(n) {
  var i;
  var fujis = document.getElementsByClassName("myFujis");
  var balls = document.getElementsByClassName("ball");
  if (n > fujis.length) {
    fujiIndex = 1
  }
  if (n < 1) {
    fujiIndex = fujis.length
  }
  for (i = 0; i < fujis.length; i++) {
    fujis[i].style.display = "none";
  }
  for (i = 0; i < balls.length; i++) {
    balls[i].className = balls[i].className.replace(" active", "");
  }
  fujis[fujiIndex - 1].style.display = "block";
  balls[fujiIndex - 1].className += " active";
}

// Udon Slideshow

var udonIndex = 1;

var next = $('#udon-slideshow-container > .next');
var prev = $('#udon-slideshow-container > .prev');

for (var i = 0; i < next.length; i++) {
  next[i].addEventListener('click', function() {
    plusUdons(1);
  });
}
for (var i = 0; i < prev.length; i++) {
  prev[i].addEventListener('click', function() {
    plusUdons(-1);
  });
}
var circle1 = $('#udon-circle-container > #circle1');
var circle2 = $('#udon-circle-container > #circle2');
var circle3 = $('#udon-circle-container > #circle3');
var circle4 = $('#udon-circle-container > #circle4');

circle1.click(function() {
  currentUdon(1);
});

circle2.click(function() {
  currentUdon(2);
});

circle3.click(function() {
  currentUdon(3);
});

circle4.click(function() {
  currentUdon(4);
});


showUdons(udonIndex);

function plusUdons(n) {
  showUdons(udonIndex += n);
}

function currentUdon(n) {
  showUdons(udonIndex = n);
}

function showUdons(n) {
  var i;
  var udons = document.getElementsByClassName("myUdons");
  var circles = document.getElementsByClassName("circle");
  if (n > udons.length) {
    udonIndex = 1
  }
  if (n < 1) {
    udonIndex = udons.length
  }
  for (i = 0; i < udons.length; i++) {
    udons[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  udons[udonIndex - 1].style.display = "block";
  circles[udonIndex - 1].className += " active";
}

// Muji Slideshow

var mujiIndex = 1;


var next = $('#muji-slideshow-container > .next');
var prev = $('#muji-slideshow-container > .prev');

for (var i = 0; i < next.length; i++) {
  next[i].addEventListener('click', function() {
    plusMujis(1);
  });
}
for (var i = 0; i < prev.length; i++) {
  prev[i].addEventListener('click', function() {
    plusMujis(-1);
  });
}
var dot1 = $('#muji-dot-container > #dot1');
var dot2 = $('#muji-dot-container > #dot2');
var dot3 = $('#muji-dot-container > #dot3');
var dot3 = $('#muji-dot-container > #dot4');

dot1.click(function() {
  currentMuji(1);
});

dot2.click(function() {
  currentMuji(2);
});

dot3.click(function() {
  currentMuji(3);
});

dot4.click(function() {
  currentMuji(4);
});

showMujis(mujiIndex);

function plusMujis(n) {
  showMujis(mujiIndex += n);
}

function currentMuji(n) {
  showMujis(mujiIndex = n);
}

function showMujis(n) {
  var i;
  var mujis = document.getElementsByClassName("myMujis");
  var dots = document.getElementsByClassName("dot");
  if (n > mujis.length) {
    mujiIndex = 1
  }
  if (n < 1) {
    mujiIndex = mujis.length
  }
  for (i = 0; i < mujis.length; i++) {
    mujis[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  mujis[mujiIndex - 1].style.display = "block";
  dots[mujiIndex - 1].className += " active";
}

// What I use to study Japanese

var wiutsjIndex = 1;

var next = $('#wiutsj-slideshow-container > .next');
var prev = $('#wiutsj-slideshow-container > .prev');

for (var i = 0; i < next.length; i++) {
  next[i].addEventListener('click', function() {
    plusWiutsjs(1);
  });
}
for (var i = 0; i < prev.length; i++) {
  prev[i].addEventListener('click', function() {
    plusWiutsjs(-1);
  });
}
var round1 = $('#wiutsj-round-container > #round1');
var round2 = $('#wiutsj-round-container > #round2');
var round3 = $('#wiutsj-round-container > #round3');
var round4 = $('#wiutsj-round-container > #round4');
var round5 = $('#wiutsj-round-container > #round5');
var round6 = $('#wiutsj-round-container > #round6');
var round7 = $('#wiutsj-round-container > #round7');

round1.click(function() {
  currentWiutsj(1);
});

round2.click(function() {
  currentWiutsj(2);
});

round3.click(function() {
  currentWiutsj(3);
});

round4.click(function() {
  currentWiutsj(4);
});

round5.click(function() {
  currentWiutsj(5);
});

round6.click(function() {
  currentWiutsj(6);
});

round7.click(function() {
  currentWiutsj(7);
});


showWiutsjs(wiutsjIndex);

function plusWiutsjs(n) {
  showWiutsjs(wiutsjIndex += n);
}

function currentWiutsj(n) {
  showWiutsjs(wiutsjIndex = n);
}

function showWiutsjs(n) {
  var i;
  var wiutsjs = document.getElementsByClassName("myWiutsjs");
  var rounds = document.getElementsByClassName("round");
  if (n > wiutsjs.length) {
    wiutsjIndex = 1
  }
  if (n < 1) {
    wiutsjIndex = wiutsjs.length
  }
  for (i = 0; i < wiutsjs.length; i++) {
    wiutsjs[i].style.display = "none";
  }
  for (i = 0; i < rounds.length; i++) {
    rounds[i].className = rounds[i].className.replace(" active", "");
  }
  wiutsjs[wiutsjIndex - 1].style.display = "block";
  rounds[wiutsjIndex - 1].className += " active";
}

// scroll-to-top arrow functionality

$('#up-nav').hide();

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    $("#up-nav").fadeIn();
  }
});
$(window).scroll(function() {
  if ($(window).scrollTop() < 200) {
    $("#up-nav").fadeOut();
  }
});

// add firebase for comment form
// Initialize Firebase

var config = {
  apiKey: "AIzaSyB3vZhU2rsZBiU46EK6TmxzcLh8NswxGaY",
  authDomain: "hakp-ef752.firebaseapp.com",
  databaseURL: "https://hakp-ef752.firebaseio.com",
  projectId: "hakp-ef752",
  storageBucket: "hakp-ef752.appspot.com",
  messagingSenderId: "720860637676"
};

firebase.initializeApp(config);

// Reference message collection

var messagesRef = firebase.database().ref('messages');

//listen for submit
document.getElementById('comment-form').addEventListener('submit', submitForm);

// submit form

function submitForm(e) {
  e.preventDefault();

  //get values
  var message = getInputVal('message');


  saveMessage(message);
  document.getElementById('comment-form').reset();

}
// function to get message values
function getInputVal(id) {
  return document.getElementById(id).value;
}
// save messages

function saveMessage(message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    message: message,
  });

}
