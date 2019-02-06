var buttonMobMenu = document.querySelector('[data-mob-menu="button"]');
var mobMenu = document.querySelector('[data-mob-menu="container"]');
var substrate = document.querySelector('[data-mob-substrate="substrate"]');
var buttonMobCatalog = document.querySelector('[data-mob-catalog="button"]');
var mobCatalog = document.querySelector('[data-mob-catalog="container"]');
var mobDetail = document.querySelector('[data-mob-detail="container"]');
var mobDetailButtonBack = document.querySelector('[ data-mob-detail="button-back"]');
var goods = document.querySelectorAll('.catalog-mob-card');
var goodsArr = [].slice.call(goods);

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
        if (mobDetail.open) {
            detailClose();
            setTimeout(menuOpen,200);
            return;
        }

        if(buttonMobCatalog.open){
            catalogClose();
            setTimeout(menuOpen,200);
            return;
        }

        menuOpen();
    } else {
        menuClose();
    }
}

function catalog() {
    if(!buttonMobCatalog.open) {
        if (mobDetail.open) {
            detailClose();
            setTimeout(catalogOpen,200);
            return;
        }

        if(buttonMobMenu.open){
            menuClose();
            setTimeout(catalogOpen,200);
            return;
        }

        catalogOpen();
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

function detailOpen() {
    mobDetail.classList.add('active');
    substrate.classList.add('active');
    setTimeout(function () {
        substrate.classList.add('visible');
    },10);
    mobDetail.open = true;
}

function detailClose() {
    mobDetail.classList.remove('active');
    substrate.classList.remove('visible');
    setTimeout(function () {
        substrate.classList.remove('active');
    },200);
    mobDetail.open = false;
}

function detail() {
    if(!mobDetail.open) {
        detailOpen();
    } else {
        detailClose();
    }
}

goodsArr.map(function (el) {
    el.addEventListener('click', function () {
        detail();
    })
});

mobDetailButtonBack.addEventListener('click', function () {
    detailClose();
});

buttonMobMenu.addEventListener('click',function () {
    menu();
});

buttonMobCatalog.addEventListener('click',function () {
    catalog();
});

substrate.addEventListener('click', function () {
    if(buttonMobMenu.open){menuClose();}

    if(buttonMobCatalog.open){catalogClose();}

    if(mobDetail.open){detailClose();}
});