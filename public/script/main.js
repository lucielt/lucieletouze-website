function animMarque () {
  const title = "Contactez-moi — Contact-me";
  // array is a list of thing
  //['rick', 'lawrence', 1, false, true, {name:'lawrence', location:'montreal'}]
  // create an array with 50 item and fill each of them with the title
  const marqueeText = new Array(50).fill(title).join(' - ');
  //get span inside the marquee selector
  const marquee = document.querySelector('.marquee span');
  //replace content with the text of the array
  marquee.innerHTML = marqueeText;

  console.log(marquee);
}

animMarque ();

// Wrap every letter in a span
$('.ml12').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
      return 500 + 30 * i;
    }
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });
