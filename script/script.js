let btns = document.querySelectorAll('.btn'),
    lists = document.querySelectorAll('.box > div'),
    items = document.querySelectorAll('.box > div > ul'),
    submit = document.querySelector('.add > button'),
    input = document.querySelector('.add > input');


// btns[0].onclick = function() {
//     console.log("click!");
// };

// btns[0].addEventListener('click', function() {
//     console.log('nice, thats click!');
// });

// btns.forEach(function(item) {
//     item.addEventListener('click', function() {
//         item.classList.toggle('active');
        
//     });
// })

btns[0].onclick = function() {
    btns[0].classList.toggle('active');
    if (active = true) {
        btns[1].classList.remove('active');
        btns[2].classList.remove('active');
        lists[0].classList.add('shown');
        lists[1].classList.remove('shown');
        lists[2].classList.remove('shown');
    } else {
        lists[0].classList.remove('shown');
    };
};

btns[1].onclick = function() {
    btns[1].classList.toggle('active');
    if (active = true) {
        btns[0].classList.remove('active');
        btns[2].classList.remove('active');
        lists[1].classList.add('shown');
        lists[0].classList.remove('shown');
        lists[2].classList.remove('shown');
    } else {
        lists[1].classList.remove('shown');
    };
};

btns[2].onclick = function() {
    btns[2].classList.toggle('active');
    if (active = true) {
        btns[0].classList.remove('active');
        btns[1].classList.remove('active');
        lists[2].classList.add('shown');
        lists[0].classList.remove('shown');
        lists[1].classList.remove('shown');
    } else {
        lists[2].classList.remove('shown');
    };
};