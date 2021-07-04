const coupons = [
    {
        name: "HOLAMUNDO",
        discount: 15
    },
    {
        name: "QUETALMUNDO",
        discount: 30
    },
    {
        name: "CHAOMUNDO",
        discount: 50
    }

]

// Función que  valida un cupón y calcula el precio con el descuento correspondiente al cupón.
function calculateDiscountCoupon(priceValue,couponValue) {

    //Creamos un objeto  "coupon" cuyo atributo "name" sea la variable "cuponValue" (el string que hemos introducido). Lo almacenamos en la variable isCouponValueValid. De este modo se obtiene que isCouponValueValid = {name:"couponValue"}

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    // Ahora lo que hacemos es buscar un objeto que coincida con el que hemos creado y devolvemos el resultado. En este resultado se encuentra también el %descuento, este objeto lo llamamos userCoupon = {name:"couponValue",discount:"discountValue"} 
    const userCoupon = coupons.find(isCouponValueValid);
    
    // Si no se encuentra ningún cupón en la lista, devuelve una alerta. Si lo encuentra, calcula el precio con el descuento correspondiente al cupón.
    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = priceValue *(100-descuento)/100;
        return precioConDescuento
    }
}

// Función del botón que calcula el precio con descuento del producto introduciendo el precio y un cupón.
function onClickButtonPriceDiscount() {
    const price = document.getElementById("InputPrice").value;
    const coupon = document.getElementById("InputDiscount").value;
    const priceWithDiscount = calculateDiscountCoupon(price,coupon);
    document.getElementById("OutputDiscountPrice").innerText = "El precio con descuento son: " + priceWithDiscount + "€"
 }