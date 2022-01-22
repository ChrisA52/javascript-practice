function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "The discounted price is: $" + precioConDescuento
}


//Challenge

const cupones = ["123", "Hellow_world", "JuanDC_es_Batman", "No_le_digas_a_nadie", "es_un_secreto",];

function onClickCuponDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputCupon");
    const cuponValue = inputCupon.value;

    let descuento

    switch(cuponValue) {
        case cupones[0]:
            descuento = 10;
        break;
        case cupones[1]:
            descuento = 15;
        break;
        case cupones[2]:
            descuento = 20;
        break;
        case cupones[3]:
            descuento = 30;
        break;
        case cupones[4]:
            descuento = 50;
        break;
    }

    const precioConCupon = calcularPrecioConDescuento(priceValue, descuento)

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "The discounted price is: $" + precioConCupon
}



