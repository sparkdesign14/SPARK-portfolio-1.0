$(document).on('click', 'a[href^="#sp-"]', function(event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 700);
});

AOS.init();

function uncheckAll() {
  $("input[type='checkbox']:checked").prop("checked", false);
}
$('a').on('click', uncheckAll);


(function() {

    let filter = document.querySelector(".filter");
    let filterBtns = Array.from(document.querySelectorAll("ul li"));
    let elements = Array.from(filter.children);
    let lis =  Array.from(document.querySelectorAll("li"));

    function filterCardapio(e) {
        let result = elements.filter((element) => {
            element.className = element.className.replace(" hide", "");
            return e.target.id !== element.dataset.food;
        });

        makeChange(result);

        if(e.target.id == "all") {
            for(let element of elements) {
                element.classList.remove("hide");
            }
        }
    }

    function makeChange(result) {
        result.forEach(element => {
            if(element.classList.contains("hide")) {
                element.className = element.className.replace(" hide", "");
            } else if(!element.classList.contains("hide")) {
                element.className += " hide";
            } else if(element.dataset.food) {
                element.classList.remove("hide");
            }
        });
    }

    function currentBtn(e) {
       lis.forEach(li => {
            li.classList.remove("current");
            e.target.classList.add("current")
        });
    }

    function renderClick(e) {
        filterCardapio(e);
        currentBtn(e);
    }

    filterBtns.forEach((filterBtn => filterBtn.addEventListener("click", renderClick)));
})();

$(function() {
  var $gallery = $('.gallery a').simpleLightbox();

  $gallery.on('show.simplelightbox', function() {
      console.log('Requested for showing');
    })
    .on('shown.simplelightbox', function() {
      console.log('Shown');
    })
    .on('close.simplelightbox', function() {
      console.log('Requested for closing');
    })
    .on('closed.simplelightbox', function() {
      console.log('Closed');
    })
    .on('change.simplelightbox', function() {
      console.log('Requested for change');
    })
    .on('next.simplelightbox', function() {
      console.log('Requested for next');
    })
    .on('prev.simplelightbox', function() {
      console.log('Requested for prev');
    })
    .on('nextImageLoaded.simplelightbox', function() {
      console.log('Next image loaded');
    })
    .on('prevImageLoaded.simplelightbox', function() {
      console.log('Prev image loaded');
    })
    .on('changed.simplelightbox', function() {
      console.log('Image changed');
    })
    .on('nextDone.simplelightbox', function() {
      console.log('Image changed to next');
    })
    .on('prevDone.simplelightbox', function() {
      console.log('Image changed to prev');
    })
    .on('error.simplelightbox', function(e) {
      console.log('No image found, go to the next/prev');
      console.log(e);
    });
});
