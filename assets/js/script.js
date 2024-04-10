
openHqcontent = function ($cod) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) return;
        if (this.status == 200) {
            //var data = JSON.parse(this.responseText);
            document.querySelector('body').innerHTML += this.responseText;
            setTimeout(function () {
                document.querySelector('#hq-container').classList.add("show");
            }, 10)
        }
    };

    var send = 'action=hq_get_page&cod=' + $cod;

    xhr.open('POST', hq_ajax.hq_url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
    // xhr.responseType = 'text';
    xhr.send(send);
    // xhr.send('action=hq_get_page');
}

nexPag = function ($sentido) {
    var pages = document.querySelectorAll('.hq-pg-content');
    var active = document.querySelector('.hq-show');
    var arr = Array.prototype.slice.call(pages); // Now it's an Array.
    var index = arr.indexOf(active)

    var next = (index + 1);
    var rotate = '5deg';
    var transX = '50px';


    if ($sentido == "ant") {
        next = (index - 1);
        rotate = '-5deg';
        transX = '-50px'
    }

    var last = pages.length;
    next = next >= last ? 0 : next;
    next = next < 0 ? last - 1 : next;



    pages[index].classList.add('in-out');

    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('hq-show');
        pages[i].classList.remove('in-out');
        pages[i].style.removeProperty("transform");
    }
    pages[next].classList.add('in-out');
    pages[next].style.transform = 'translateX(' + transX + ') rotate(' + rotate + ')';

    setTimeout(() => {
        pages[next].classList.remove('in-out');
        pages[next].classList.add('hq-show');
    }, 10);
}