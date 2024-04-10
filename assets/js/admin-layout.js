var setSizeBox, setSizePage, selImgPost, removeQuadrinho, addQuadro, setColor;
jQuery(document).ready(function ($) {

    function getQuadro($this) {
        return $this.closest('.hq-conf-quadro');
    }

    setSizeBox = function ($this, size) {
        console.log($this);
        var order = get_order($this)
        var id = '#p-' + order.pgAtual + "_q-" + order.boxAtual
        var quadro = document.querySelector(id);
        quadro.style[size] = 'span ' + $this.value;
        //saveConfig()
    }

    selImgPost = function ($this, $pag) {
        var url = hqContent[$this.value];
        var order = get_order($this)
        var id = '#p-' + order.pgAtual + "_q-" + order.boxAtual
        quadro = document.querySelector(id);
        console.log(hqContent[$pag])
        quadro.querySelector('div').style.backgroundImage = 'url(' + url['img'] + ')';
        quadro.querySelector('.ballon').innerHTML = url['txt'];
        //saveConfig()
    }

    removeQuadrinho = function ($this) {
        var quadro = getQuadro($this);
        var pg = $this.closest('.hq-quadros-content')
        quadro.remove();
        updateBoxConfig(pg);
    }

    setSizePage = function ($this) {
        var value = $this.value;
        var dimension = $this.getAttribute('data-dimension');
        var pages = document.querySelectorAll('.hq-page-layout');

        dimension = (dimension == 'larg') ? 'width' : 'height';

        for (var i = 0; i < pages.length; i++) {
            pages[i].style[dimension] = value + "px";
        }



    }


    addQuadro = function ($this) {
        var order = get_order($this)
        var configContent = $this.closest('.hq-config-content');
        var original_config = configContent.querySelectorAll('.hq-conf-quadro')
        original_config = original_config[original_config.length - 1];


        var clone_config = original_config.cloneNode(true);
        var parent = $this.closest('.hq-config-side').querySelector('.hq-quadros-content');

        parent.append(clone_config);

        updateInputsBox(clone_config, $this, order);
        var page = $this.closest('.hq-config-side').querySelector('.hq-quadros-content')
        updateBoxConfig(page)

        // var parent = configContent.querySelector('.page-style');
        // var original_quad = parent.lastElementChild

        // var clone_quad = original_quad.cloneNode(true);
        // clone_quad.style.background = '';
        // clone_quad.id = "p-" + order.pgAtual + "_q" + order.box
        // parent.append(clone_quad);
        // clone_quad.querySelector('h2').innerHTML = order.box

        return;
    }

    setColor = function ($this) {
        var color = $this.value;
        var pages = document.querySelectorAll('.hq-page-layout');

        pages.forEach(function (e) {
            e.style.backgroundColor = color;
        })

    }

})

function updateBoxConfig($page) {

    var boxConfig = $page.children
    var pageContent = $page.closest('.hq-config-content').querySelector('.page-style');
    var boxFront = pageContent.querySelectorAll('.hq-quad-img');
    console.log(pageContent)

    for (var j = 0; j < boxFront.length; j++) {
        boxFront[j].remove();
    }

    for (var i = 0; i < boxConfig.length; i++) {
        boxConfig[i].setAttribute('data-box', i)
        boxConfig[i].querySelector('.hq-conf-quadro-header').querySelector('label').innerHTML = "Quadro " + (i + 1);

        var config = {
            id: boxConfig[i].querySelector('.quadro-id').value,
            w: boxConfig[i].querySelector('.quadro-larg').value,
            h: boxConfig[i].querySelector('.quadro-alt').value,
        }

        addBoxFront(config, pageContent, i);
    }

}

function addBoxFront(config, pageContent, quad) {
    var pagId = pageContent.closest('.hq-page-content-item').getAttribute('data-page')
    var boxContent = document.createElement('div');
    pageContent.append(boxContent);
    boxContent.style['grid-column'] = 'span ' + config.w;
    boxContent.style['grid-row'] = 'span ' + config.h;
    boxContent.classList = 'hq-quad-img';
    boxContent.id = 'p-' + pagId + '_q-' + quad;

    var src = hqContent[config.id] != undefined ? hqContent[config.id].img : '';
    var txt = hqContent[config.id] != undefined ? hqContent[config.id].txt : '';

    var boxBg = document.createElement('div');
    boxBg.classList = 'page-box';
    boxBg.style.backgroundImage = 'url("' + src + '")';

    var headerContent = document.createElement('div');
    headerContent.style.display = 'flex';
    headerContent.style.justifyContent = 'center';
    headerContent.style.alignItems = 'center';
    headerContent.innerHTML = "<h2>" + (quad + 1) + "</h2>"

    var divP = document.createElement('div');
    divP.style.width = '100%';
    divP.style.height = '100%';

    var title = document.createElement('p');
    title.classList = 'ballon';
    title.style.fontSize = '1.2rem';
    title.innerHTML = txt;

    pageContent.append(boxContent);
    boxContent.append(boxBg);
    boxBg.append(headerContent);
    boxBg.append(divP);
    divP.append(title);
}

function get_order($this) {
    var quantPg = document.querySelectorAll('.hq-config-content:not(.clone)').length;
    var pgAtual = $this.closest('.hq-page-content-item').getAttribute('data-page')
    var quantBox = $this.parentNode.querySelectorAll('.hq-conf-quadro').length;
    if ($this.closest('.hq-quadros-content')) {
        var boxAtual = [].slice.call($this.closest('.hq-quadros-content').children).indexOf($this.closest('.hq-conf-quadro'))
    }

    return {
        pgAtual: pgAtual,
        pgTotal: quantPg,
        box: quantBox,
        boxAtual: boxAtual,
    }
}

function updateInputsBox(clone_config, $this, order) {
    var name = 'linha-comic-config[' + order.pgAtual + ']' + '[' + order.box + ']';
    clone_config.setAttribute('data-box', order.box);
    console.log(clone_config)
    clone_config.querySelector('.quadro-larg').value = 2;
    clone_config.querySelector('.quadro-larg').name = name + '[w]'
    clone_config.querySelector('.quadro-alt').value = 3;
    clone_config.querySelector('.quadro-alt').name = name + '[h]';
    clone_config.querySelector('.quadro-id').value = '';
    clone_config.querySelector('.quadro-id').value = name + '[id]';
    clone_config.querySelector('label').innerHTML = "Quadro " + order.box
}

function resetAction() {
    document.querySelectorAll('.hq-page-content-item').forEach(function (e) {
        e.classList.remove('hq-active');
    })
    document.querySelector('.hq-pagination').querySelectorAll('li:not(.add)').forEach(function (e) {
        e.classList.remove('hq-active');
    })
}

function getPage($this) {
    resetAction();
    var paginacao = document.querySelector('.hq-pagination').querySelectorAll('li:not(.add)');
    var clickPag = $this.closest('li');
    var index = null;
    for (var i = 0; i < paginacao.length; i++) {
        paginacao[i].classList.remove('hq-active');
        if (paginacao[i] == clickPag) {
            index = i;
            break;
        }

    }
    $this.parentNode.classList.add('hq-active')
    var paginas = document.querySelectorAll('.hq-page-content-item');
    paginas[index].classList.add('hq-active');
}

function addPage($this) {
    resetAction();
    var last = document.querySelectorAll('.hq-page-content-item').length;
    var clone = document.querySelector('#clone').children[0].cloneNode(true);
    document.querySelector('.hq-page-content-inner').append(clone);
    clone.id = 'pg-' + last;
    clone.classList.add('hq-active');
    clone.classList.remove('clone');
    clone.setAttribute('data-page', last);

    renameAllConfig(clone, last);
    addPagination($this, last);
}

function renameAllConfig($obj, page) {
    renameConfig($obj, page, '.hq-quad-img', 'id')
    renameConfig($obj, page, 'input', 'name');
    renameConfig($obj, page, 'select', 'name');
}

function renameConfig(clone, $number, $dom, config) {
    var boxes = clone.querySelectorAll($dom);
    for (var i = 0; i < boxes.length; i++) {
        var n = boxes[i][config]
        boxes[i][config] = n.replace('#order', $number);
    }
}

function addPagination($this) {
    var ul = $this.closest('ul');
    var btns = ul.querySelectorAll('li:not(.add)');
    var last = btns[btns.length - 1];
    var clone = last.cloneNode(true);
    clone.classList.add('hq-active');
    clone.querySelector('button').innerHTML = (btns.length + 1);
    ul.append(clone)
    ul.append($this.parentNode);
}


function removePage($this) {
    var paginas = $this.closest('.hq-page-content-inner').children;
    var clickPag = $this.closest('.hq-page-content-item');
    var index = null;
    for (var i = 0; i < paginas.length; i++) {
        if (paginas[i] == clickPag) {
            index = i;
        }
    }

    var paginacao = document.querySelector('.hq-pagination').querySelectorAll('li');
    paginacao[0].classList.add('hq-active');
    paginas[0].classList.add('hq-active');
    paginacao[index].remove();

    var paginacao = document.querySelector('.hq-pagination').querySelectorAll('li:not(.add)');
    console.log(paginas);
    for (var i = 0; i < paginacao.length; i++) {
        paginacao[i].querySelector('button').innerHTML = (i + 1)
    }

    clickPag.remove();
}

