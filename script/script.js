document.addEventListener('DOMContentLoaded', function () {

    let btns = document.querySelectorAll('.btn'),
        lists = document.querySelectorAll('.box > div'),
        input = document.querySelector('.add > input'),
        activeList = document.querySelector('.activeList > ul'),
        doneList = document.querySelector('.doneList > ul'),
        doesntList = document.querySelector('.doesntList > ul');
        
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

    // btns.forEach(function(event) {

    // });

    btns[0].onclick = function () {
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

    btns[1].onclick = function () {
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

    btns[2].onclick = function () {
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

    function addEventHandler(li) {
        li.addEventListener('click', function (event) {
            let span = li.querySelector('span');
            if (event.target.className === 'li') { // change to complited
                li.classList.remove('checked');
                li.remove();
                span.remove();
                doneList.appendChild(li);
                toLocal();
            } else if (event.target.className === 'span') { //change to doesentList
                span.remove();
                li.remove();
                doesntList.appendChild(li);
                event.stopImmediatePropagation();
                toLocal();
            }
        });
    }
    let submit = document.querySelector('.add > button');
    submit.addEventListener('click', function (event) {
        // add new task`s
        let li = document.createElement('li');

        li.innerHTML = input.value;

        if (input.value == "") {
            alert('Please, add some text.');
        } else {
            activeList.appendChild(li);
        }

        input.value = '';

        // add can`t button

        let span = document.createElement('span');
        let txt = document.createTextNode("Can`t");
        span.appendChild(txt);
        span.classList.add('span');
        li.appendChild(span);
        li.classList.add('li');
        
        toLocal();
        
        addEventHandler(li);
    });

    // save to local storage
  
    let act,
        don,
        doe;

    function toLocal() {
        act = activeList.innerHTML;
        don = doneList.innerHTML;
        doe = doesntList.innerHTML;
        localStorage.setItem('activeList', JSON.stringify(act)); // save value to localstorage
        localStorage.setItem('doneList', JSON.stringify(don));
        localStorage.setItem('doesentList', JSON.stringify(doe));
    }

    if (localStorage.getItem('activeList')) {
        let actback = localStorage.getItem('activeList');
        activeList.innerHTML = JSON.parse(actback);
        activeList.querySelectorAll('li').forEach(function(li) {
            addEventHandler(li);
        });
    } 
    if (localStorage.getItem('doneList')) {
        let donback = localStorage.getItem('doneList');
        doneList.innerHTML = JSON.parse(donback);
    } 
    if (localStorage.getItem('doesentList')) {
        let doeback = localStorage.getItem('doesentList');
        doesntList.innerHTML = JSON.parse(doeback);
    }

    // clear button
    let clear = document.querySelector('.clear > button');
    clear.onclick = function () {
        localStorage.clear();
        alert('Need to refresh page');
    };

    let switchBtn = document.querySelector('#darkBtn');

    switchBtn.onclick = function() {
        let theme = document.querySelector('#switch');

        if (theme.getAttribute('href') == 'style/generalStyle.css') {
            theme.href = 'style/generalDark.css';
        } else {
            theme.href = 'style/generalStyle.css';
        }
    }
});