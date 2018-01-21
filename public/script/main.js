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

const scrollTagets = document.querySelectorAll('.three-column')
console.log(scrollTagets)
scrollTagets.forEach((scrollTaget, index) => {
       // find element inside section vs inside the page
      console.log(scrollTaget)
    const scrollLinks = scrollTaget.querySelectorAll('.js-scroll');
    const scrollSide = scrollTaget.querySelectorAll('.js-side-scroll');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            console.log(event)
            event.preventDefault();
            const href = link.getAttribute('href')
            const id = link.getAttribute('data-name')
            console.log(href);
            document.querySelector(href).scrollIntoView({
                behavior:'smooth'

            });
            var  intElemScrollTop = document.querySelector(href).scrollTop;

            //const hrefImg = href + "-img"
            const hrefImg = "#" + id + "-img"
            console.log(hrefImg);
            const hrefImgId = document.querySelector(hrefImg)
            console.log('alllo' + hrefImgId);
            const hrefImgLink = hrefImgId.querySelector('.js-side-scroll')
            console.log(hrefImgLink);
            //hrefImgLink.click();
        });
    });
    /*
    scrollSide.forEach(side => {
        side.addEventListener('click', (event) => {
            event.preventDefault();
            const hrefSide = side.getAttribute('href')
            console.log('c qui' + hrefSide);
            document.querySelector(hrefSide).scrollIntoView({
                behavior:'smooth'

            });
        });
    });
    */
});

/*
var hrefImgId = hrefImg;
while(hrefImgId.charAt(0) === '#'){
    hrefImgId = hrefImgId.substr(1);
}
const sideScroll = hrefImgId.querySelector('.js-side-scroll');
console.log(sideScroll)
sideScroll.forEach(side => {

        const hrefSide = side.getAttribute('href')
        console.log(hrefSide);
        console.log('allo' + document.querySelector(hrefSide));
        document.querySelector(hrefSide).scrollIntoView({
            behavior:'smooth'
        });
});

-----
if(hrefImg === "#formation-img"){
document.querySelector(hrefImg).style.top="0";
}else if(hrefImg === "#experience-img"){
document.querySelector(hrefImg).style.top="100%";
}else if(hrefImg === "#other-img"){
document.querySelector(hrefImg).style.top="200%";
}*/
