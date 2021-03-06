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


$(document).ready(function() { // 6,32 5,38 2,34
  $("#photoshop").circliful({
    animationStep: 1,
    foregroundBorderWidth: 8,
    backgroundBorderWidth: 8,
    foregroundColor: '#0CC5FA',
    backgroundColor: '#001D26',
    animateInView: true,
    percent: 98,
    percentageY: 25,
    percentageTextSize: 16,
    fontColor: '#0CC5FA',
    text: 'PHOTOSHOP',
    textBelow: true,
    textStyle: 'font-size: 18px; padding: 5px',
    textColor: '#0CC5FA',

  });
  $("#lightroom").circliful({
    animationStep: 1,
    foregroundBorderWidth: 8,
    backgroundBorderWidth: 8,
    foregroundColor: '#AED4EA',
    backgroundColor: '#0C2531',
    animateInView: true,
    percent: 96,
    percentageY: 25,
    percentageTextSize: 16,
    fontColor: '#AED4EA',
    text: 'LIGHTROOM',
    textBelow: true,
    textStyle: 'font-size: 18px; padding: 5px',
    textColor: '#AED4EA',
  });
  $("#illustrator").circliful({
    animationStep: 1,
    foregroundBorderWidth: 8,
    backgroundBorderWidth: 8,
    foregroundColor: '#F47701',
    backgroundColor: '#261300',
    animateInView: true,
    percent: 95,
    percentageY: 25,
    percentageTextSize: 16,
    fontColor: '#F47701',
    text: 'ILLUSTRATOR',
    textBelow: true,
    textStyle: 'font-size: 18px; padding: 5px',
    textColor: '#F47701',
  });
  $("#animate").circliful({
    animationStep: 1,
    foregroundBorderWidth: 8,
    backgroundBorderWidth: 8,
    foregroundColor: '#FF3918',
    backgroundColor: '#260600',
    animateInView: true,
    percent: 75,
    percentageY: 25,
    percentageTextSize: 16,
    fontColor: '#FF3918',
    text: 'ANIMATE',
    textBelow: true,
    textStyle: 'font-size: 18px; padding: 5px',
    textColor: '#FF3918',
  });
  $("#audition").circliful({
    animationStep: 1,
    foregroundBorderWidth: 8,
    backgroundBorderWidth: 8,
    foregroundColor: '#00E4BC',
    backgroundColor: '#002620',
    animateInView: true,
    percent: 89,
    percentageY: 25,
    percentageTextSize: 16,
    fontColor: ' #00E4BC',
    text: 'AUDITION',
    textBelow: true,
    textStyle: 'font-size: 18px; padding: 5px',
    textColor: '#00E4BC',
  });
  $("#aftereffect").circliful({
    animationStep: 1,
    foregroundBorderWidth: 8,
    backgroundBorderWidth: 8,
    foregroundColor: '#915DBC',
    backgroundColor: '#1F003F',
    animateInView: true,
    percent: 85,
    percentageY: 25,
    percentageTextSize: 16,
    fontColor: '#915DBC',
    text: 'AFTER EFFECTS',
    textBelow: true,
    textStyle: 'font-size: 18px; padding: 5px',
    textColor: '#915DBC',
  });
  $("#premierpro").circliful({
    animationStep: 1,
    foregroundBorderWidth: 8,
    backgroundBorderWidth: 8,
    foregroundColor: '#E071F9',
    backgroundColor: '#2A0033',
    animateInView: true,
    percent: 94,
    percentageY: 25,
    percentageTextSize: 16,
    fontColor: '#E071F9',
    text: 'PREMIER PRO',
    textBelow: true,
    textStyle: 'font-size: 18px; padding: 5px',
    textColor: '#E071F9',
  });
});



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
