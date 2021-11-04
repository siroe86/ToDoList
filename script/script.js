let btns = document.querySelectorAll('.btn'),
    lists = document.querySelectorAll('.box > div'),
    items = document.querySelector('.box > div > ul'),
    submit = document.querySelector('.add > button'),
    input = document.querySelector('.add > input'),
    task = document.querySelectorAll('.activeList > ul > li'),
    activeList = document.querySelector('.activeList > ul'),
    doneList = document.querySelector('.doneList > ul'),
    doesntList = document.querySelector('.doesntList > ul');
    

 let spisokOne, spisokTwo, spisokThree;
 function toLocal() {
    spisokOne = activeList.innerHTML;
    spisokTwo = doneList.innerHTML;
    spisokThree = doesntList.innerHTML;

    localStorage.setItem('activeList', JSON.stringify(spisokOne));
    localStorage.setItem('doneList', JSON.stringify(spisokTwo));
    localStorage.setItem('doesntList', JSON.stringify(spisokThree));
};

 if (localStorage.getItem('activeList') && localStorage.getItem('doneList') && localStorage.getItem('doesntList')) {
    let backOne, backTwo, backThree;
    backOne = localStorage.getItem('activeList');
    backTwo = localStorage.getItem('doneList');
    backThree = localStorage.getItem('doesntList');

    activeList.innerHTML = JSON.parse(backOne);
    doneList.innerHTML = JSON.parse(backTwo);
    doesntList.innerHTML = JSON.parse(backThree);
};


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



submit.addEventListener('click', function(event) {
    let li = document.createElement('li');

    li.innerHTML = input.value;

    if (input.value == "") {
        alert('Please, add some text.');
    } else {
        activeList.appendChild(li);
        toLocal();
    };

    input.value = '';

    let span = document.createElement('SPAN');
    let txt = document.createTextNode("Can`t");
    span.appendChild(txt);
    li.appendChild(span);

    //  transform to complited tasks 
    li.addEventListener('click', function(event) {

        li.classList.remove('checked');
        li.remove();
        doneList.appendChild(li);
        span.remove();
        toLocal();
    });

    // transfom to canceled list
    span.addEventListener('click', function(event) {
        span.remove();
        li.remove();
        doesntList.appendChild(li);
        
        event.stopImmediatePropagation();
        toLocal();
    });

});





