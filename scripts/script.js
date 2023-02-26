// получаем айди для бургера меню
const bars = document.getElementById('bars');
const xmark = document.getElementById('xmark');
const menu = document.getElementById('menu');
// получаем айди для бургера меню
myfunc = bars.addEventListener('click' , () => {
    menu.style.maxHeight = menu.scrollHeight + 'px';
    bars.style.display = 'none';
    xmark.style.display = 'block';
});

xmark.addEventListener('click' , () => {
    menu.style.maxHeight = 0 + 'px'
    bars.style.display = 'block';
    xmark.style.display = 'none';
})

// делаем анимацию для элипсов

const firstelipse = document.getElementById('firstelipse');
const secondelipse = document.getElementById('secondelipse');
function torotatefirst() {
    firstelipse.style.rotate = '360deg';
};

function torotatesecond() {
    secondelipse.style.rotate = '360deg';
};

//! делаем анимацию для элипсов

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.getElementById('dashimg').style.cssText = 'max-width:0;';
        document.getElementById('procents').style.cssText = 'transform: scale(0 , 0);'

    } else {
        document.getElementById('dashimg').style.cssText = 'max-width:700px;';
        document.getElementById('procents').style.cssText = 'transform: scale(0.8 , 0.8);';
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 900) {
        document.getElementById('rocketanimation').style.cssText = 'transform: translate(40px, -40px);'
    }else {
        document.getElementById('rocketanimation').style.cssText = 'transform: translate(0, 0);'
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 450) {
        document.getElementById('nav').style.cssText = 'background-color:#172755;';
    }else {
        document.getElementById('nav').style.cssText = 'background-color:#17265500;';
    }
});

function animateValue(id, start, end, duration) {
//     var obj = document.getElementById(id);
//     var range = end - start;
//     var current = start;
//     var increment = end > start ? 1 : -1;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     var timer = setInterval(function() {
//     current += increment;
//     obj.innerHTML = current + '%';
//     if (current == end) {
//       clearInterval(timer);
//     }
//   }, stepTime);
        for (let i = start; i <= end; i++) {
			setTimeout(function() {
				document.getElementById(id).innerText = i +'%'
			}, i * duration);
		}
}

animateValue('blueprocent' , 1 , 79 , 35);
animateValue('redprocent' , 1 , 87 , 35);

function tored(id) {
    document.getElementById(id).style.backgroundColor = '#EF2A82'
    document.getElementById(id).style.color = 'white'
}