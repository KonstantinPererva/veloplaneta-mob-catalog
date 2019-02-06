var buttonMobMenu = document.querySelector('[data-mob-menu="button"]');
var mobMenu = document.querySelector('[data-mob-menu="container"]');
var substrate = document.querySelector('[data-mob-substrate="substrate"]');
var buttonMobCatalog = document.querySelector('[data-mob-catalog="button"]');
var mobCatalog = document.querySelector('[data-mob-catalog="container"]');
var mobDetail = document.querySelector('[data-mob-detail="container"]');
var mobDetailButtonBack = document.querySelector('[ data-mob-detail="button-back"]');
var goods = document.querySelectorAll('.catalog-mob-card');

function menuOpen() {
    buttonMobMenu.classList.add('active');
    mobMenu.classList.add('active');
    substrate.classList.add('active');
    setTimeout(function () {
        substrate.classList.add('visible');
    },10);
    buttonMobMenu.open = true;
}

function menuClose() {
    buttonMobMenu.classList.remove('active');
    mobMenu.classList.remove('active');
    substrate.classList.remove('visible');
    setTimeout(function () {
        substrate.classList.remove('active');
    },200);
    buttonMobMenu.open = false;
}

function menu() {
    if(!buttonMobMenu.open) {
        [].forEach.call(goods, function (el) {
            if(el.open){
                detailClose(el);
                setTimeout(menuOpen,200);
            }
        });
        if(buttonMobCatalog.open){
            catalogClose();
            setTimeout(menuOpen,200);
        } else {
            menuOpen();
        }
    } else {
        menuClose();
    }
}

function catalog() {
    if(!buttonMobCatalog.open) {
        [].forEach.call(goods, function (el) {
            if(el.open){
                detailClose(el);
                setTimeout(catalogOpen,200)
            }
        });
        if(buttonMobMenu.open){
            menuClose();
            setTimeout(catalogOpen,200)
        } else {
            catalogOpen();
        }

    } else {
        catalogClose();
    }
}

function catalogOpen() {
    buttonMobCatalog.classList.add('active');
    mobCatalog.classList.add('active');
    substrate.classList.add('active');
    setTimeout(function () {
        substrate.classList.add('visible');
    },10);
    buttonMobCatalog.open = true;
}

function catalogClose() {
    buttonMobCatalog.classList.remove('active');
    mobCatalog.classList.remove('active');
    substrate.classList.remove('visible');
    setTimeout(function () {
        substrate.classList.remove('active');
    },200);
    buttonMobCatalog.open = false;
}

function detailOpen(el) {
    mobDetail.classList.add('active');
    substrate.classList.add('active');
    setTimeout(function () {
        substrate.classList.add('visible');
    },10);
    el.open = true;
}

function detailClose(el) {
    mobDetail.classList.remove('active');
    substrate.classList.remove('visible');
    setTimeout(function () {
        substrate.classList.remove('active');
    },200);
    el.open = false;
}

function detail(el) {
    if(!el.open) {
        detailOpen(el);
    } else {
        detailClose(el);
    }
}

[].forEach.call(goods, function (el) {
    el.addEventListener('click', function () {
        detail(el);

        mobDetailButtonBack.addEventListener('click', function () {
            detailClose(el);
        });
    })
});

buttonMobMenu.addEventListener('click',function () {
    menu();
});

buttonMobCatalog.addEventListener('click',function () {
    catalog();
});

substrate.addEventListener('click', function () {
    menuClose();
    catalogClose();
    [].forEach.call(goods, function (el) {
        detailClose(el);
    });
});