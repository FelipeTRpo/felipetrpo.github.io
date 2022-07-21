let carrinho =[];
let cartIdCounter = 1;
let cartValue = 0;
let cartAmount = 0;
let isCartEmpty = true;

function makeCard(obj){
    return (`
    <div class="card">
    <img src="${obj.img}" alt="${obj.nameItem}">
    <div class="card-info">
        <p class="tag">${obj.tag[0]}</p>
        <h3 class="card-title">${obj.nameItem}</h3>
        <p class="card-description">${obj.description}</p>
        <p class="card-price">₽ ${obj.value}</p>
        <button data-addcart="${obj.id}">${obj.addCart}</button>
    </div>
</div> `)
}
function renderCards(arr){
    document.getElementById('initial-pokemon').innerHTML = ""
    document.getElementById('selling-items').innerHTML = ""
    arr.forEach(ele => {

        //render pokemon cards
        if(ele.tag[0]=='Pokemon'){
            document.getElementById('initial-pokemon').innerHTML += `
            <input type="radio" name="starter" id=${ele.nameItem} value=${ele.nameItem}>
            <div><label for=${ele.nameItem}><img src=${ele.img} alt=${ele.nameItem} ></label></div>`
        }
        //render pokemon selling items
        else{
            document.getElementById('selling-items').innerHTML += makeCard(ele)
        }
    });
}
renderCards(data);

function searchByClick(e){
    console.log(e.target.dataset.type)
    if(e.target.dataset.type){
        document.getElementById('selling-items').innerHTML = ""
        data.forEach(ele => {
        if(e.target.dataset.type == ele.tag[0]){
            document.getElementById('selling-items').innerHTML += makeCard(ele)
        }
        if(e.target.dataset.type == 'todos'){
            if(ele.tag[0] != 'Pokemon'){
                document.getElementById('selling-items').innerHTML += makeCard(ele)
            }
        }
    })
    }
    
}
document.getElementById('header-right').addEventListener('click',searchByClick)

function searchByTyping(e){
    document.getElementById('selling-items').innerHTML = ""
    const searchString = document.getElementById('search-input').value.toLowerCase()
    data.forEach(ele=>{
        if(ele.tag[0].toLowerCase().includes(searchString)||ele.nameItem.toLowerCase().includes(searchString)){
            if(ele.tag[0] != 'Pokemon'){
                document.getElementById('selling-items').innerHTML += makeCard(ele)
            }
        }
    })

}

document.getElementById('search-btn').addEventListener('click',searchByTyping)

function makeCartCard(obj){
    return(`<div class="card-carrinho">
    <img src="${obj.img}" alt="${obj.nameItem}">
    <div class="card-carrinho-info">
        <h3 class="card-carrinho-title">${obj.nameItem}</h3>
        <p class="card-carrinho-price">₽ ${obj.value}</p> 
        <button data-removecart="${obj.cartId}">Remover produto</button>
    </div>
    </div>`)
}
function clearCart(){
    document.getElementById('carrinho-body').innerHTML = `<div class="empty-cart">Carrinho Vazio</div><div class="empty-cart-sub">Adicione itens</div>`;
    document.getElementById('carrinho-footer').innerHTML = ''
    isCartEmpty = true;
}
clearCart()
function addToCart(e){
    if(!e.target.dataset.addcart){
        return
    }
    if(isCartEmpty){
        document.getElementById('carrinho-body').innerHTML = ''
        document.getElementById('carrinho-footer').innerHTML = `<div id="carrinho-footer">
        <p id="checkout-carrinho-amount"><span class="checkout-left">Quantidade:</span> <span class="checkout-right">0</span></p>
        <p id="checkout-carrinho-total"><span class="checkout-left">Total:</span> <span class="checkout-right">₽ 0</span></p>
        <button>Finalizar a compra</button>
    </div>`
    }
    isCartEmpty = false;
    let itemAdded
    data.forEach(ele=>{
        if(e.target.dataset.addcart ==ele.id){
            itemAdded = ele
        }
    })
    //deep clone 
    carrinho = JSON.parse(JSON.stringify(carrinho))

    itemAdded.cartId = cartIdCounter
    cartIdCounter++
    document.getElementById('carrinho-body').innerHTML += makeCartCard(itemAdded)
    carrinho.push(itemAdded)
    cartValue +=itemAdded.value
    cartAmount++
    document.querySelector('#checkout-carrinho-amount span.checkout-right').innerHTML= `${cartAmount}`
    document.querySelector('#checkout-carrinho-total span.checkout-right').innerHTML= `₽ ${cartValue}`
}
document.getElementById('vitrine').addEventListener('click',addToCart)

function removeFromCart(e){
    if(!e.target.dataset.removecart){
        return
    }

    let selectItem
    let selectItemIndex = 0;
    carrinho.forEach(ele=>{
        if(e.target.dataset.removecart == ele.cartId){
            selectItem = ele
        }
    })
    //deep clone 
    carrinho = JSON.parse(JSON.stringify(carrinho))
    console.log(selectItem)
    for(let i = 0;i<carrinho.length;i++){
        if(carrinho[i].cartId== selectItem.cartId){
            selectItemIndex = i;
        }
    }
    cartValue -= selectItem.value
    cartAmount--
    document.querySelector('#checkout-carrinho-amount span.checkout-right').innerHTML= `${cartAmount}`
    document.querySelector('#checkout-carrinho-total span.checkout-right').innerHTML= `₽ ${cartValue}`
    carrinho.splice(selectItemIndex,1);
    e.target.parentNode.parentNode.remove()
    if(carrinho.length == 0){
        clearCart()
    }
}
document.getElementById('carrinho-body').addEventListener('click',removeFromCart)

//select pokemon

function selectPokemon(){
    console.log(document.getElementsByName('starter'))
    let radioList =document.getElementsByName('starter')
    let selectedPokemon
    radioList.forEach(ele=>{
        if(ele.checked){
            selectedPokemon = ele
        }
    })
    console.log(selectedPokemon.value)
    data.forEach(ele=>{
        if(ele.nameItem==selectedPokemon.value){
            selectedPokemon = ele
        }
    })
    document.getElementById('choosen-pokemon').innerHTML = ` <img src="${selectedPokemon.img}" alt="${selectedPokemon.nameItem}">  ${selectedPokemon.nameItem}</div>`
}
document.getElementById('initial-pokemon').addEventListener('click',selectPokemon)