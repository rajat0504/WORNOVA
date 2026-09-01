let cart=[];function addToCart(name,price){cart.push({name,price});renderCart();toggleCart(true)}function renderCart(){document.getElementById('cartCount').textContent=cart.length;let box=document.getElementById('cartItems');let total=cart.reduce((s,x)=>s+x.price,0);document.getElementById('total').textContent='₹'+total.toLocaleString('en-IN');if(!cart.length){box.innerHTML='<p class="empty">Your cart is empty.</p>';return}box.innerHTML=cart.map((x,i)=>`<div class="cart-item"><span>${x.name}</span><strong>₹${x.price.toLocaleString('en-IN')}</strong></div>`).join('')}function toggleCart(force){let c=document.getElementById('cart'),o=document.getElementById('overlay');let open=force===true?true:!c.classList.contains('open');c.classList.toggle('open',open);o.classList.toggle('show',open)}function checkout(){if(!cart.length){alert('Your cart is empty!');return}alert('Checkout is a demo for now. Connect a payment gateway to accept real orders.')}renderCart();


function openSearch() {
  const search = prompt("Search WORNOVA products:");
  
  if (search) {
    alert("You searched for: " + search);
  }
}
.history-section {
  padding: 120px 8vw;
  background: #111;
  color: #f1f0eb;
}

.history-section .eyebrow {
  letter-spacing: 4px;
  font-size: 12px;
  font-weight: 700;
}

.history-section h2 {
  font-size: clamp(50px, 8vw, 120px);
  line-height: .9;
  margin: 25px 0 45px;
  letter-spacing: -5px;
}

.history-section h2 em {
  font-style: normal;
  color: #b8ff00;
}

.history-section p {
  max-width: 650px;
  font-size: 18px;
  line-height: 1.6;
}

.history-line {
  margin-top: 70px;
  padding-top: 25px;
  border-top: 1px solid #f1f0eb;
  display: flex;
  gap: 18px;
  align-items: center;
  flex-wrap: wrap;
  font-size: 18px;
}

.history-line strong {
  font-size: 30px;
}

.history-line span {
  letter-spacing: 3px;
  margin-right: 35px;
}
