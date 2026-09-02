let cart=[];function addToCart(name,price){cart.push({name,price});renderCart();toggleCart(true)}function renderCart(){document.getElementById('cartCount').textContent=cart.length;let box=document.getElementById('cartItems');let total=cart.reduce((s,x)=>s+x.price,0);document.getElementById('total').textContent='₹'+total.toLocaleString('en-IN');if(!cart.length){box.innerHTML='<p class="empty">Your cart is empty.</p>';return}box.innerHTML=cart.map((x,i)=>`<div class="cart-item"><span>${x.name}</span><strong>₹${x.price.toLocaleString('en-IN')}</strong></div>`).join('')}function toggleCart(force){let c=document.getElementById('cart'),o=document.getElementById('overlay');let open=force===true?true:!c.classList.contains('open');c.classList.toggle('open',open);o.classList.toggle('show',open)}function checkout(){if(!cart.length){alert('Your cart is empty!');return}alert('Checkout is a demo for now. Connect a payment gateway to accept real orders.')}renderCart();


function openSearch() {
  const search = prompt("Search WORNOVA products:");
  
  if (search) {
    alert("You searched for: " + search);
  }
}

