function addProductId(id){
    let myArr3 = [];
    let cartProducts = JSON.parse(window.localStorage.getItem("ids"));
    if(cartProducts === null){
        myArr3.push(id);
        window.localStorage.setItem("ids",JSON.stringify(myArr3));

    }else {
        let myArr4 = [];
        myArr4 = JSON.parse(localStorage.getItem("ids")); 
        myArr4.push(id)
        window.localStorage.setItem("ids",JSON.stringify(myArr4))

    }

}