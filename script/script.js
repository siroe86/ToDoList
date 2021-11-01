let btns = document.querySelectorAll('.btn'),
    lists = document.querySelectorAll('.box > div'),
    items = document.querySelectorAll('.box > div > ul'),
    submit = document.querySelector('.add > button'),
    input = document.querySelector('.add > input'),
    task = document.querySelectorAll('.activeList > ul > li');


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

// toggle classes for buttons and lists

btns[0].onclick = function() {
    btns[0].classList.add('active');
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
    btns[1].classList.add('active');
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
    btns[2].classList.add('active');
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



// add new tasks and checking
let activeList = document.querySelector('.activeList > ul');

submit.addEventListener('click', function() {
    let li = document.createElement('li');
    li.innerHTML = input.value;
    

    if (input.value == "") {
        alert('Please, add some text.');
    } else {
        activeList.appendChild(li);
    };

    input.value = '';

    let span = document.createElement('SPAN');
    let txt = document.createTextNode("Can`t");
    span.appendChild(txt);
    li.appendChild(span);
});



//  transform to complited tasks 

let doneList = document.querySelector('.doneList > ul');

