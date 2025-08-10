
async function loadMenu() {
  const res = await fetch('/api/menu');
  const menu = await res.json();
  const container = document.getElementById('menu');
  menu.forEach(item => {
    container.innerHTML += `<div>
      <strong>${item.name_ar}</strong> - ${item.price} ريال (${item.calories} سعرة)
      <input type="number" min="0" value="0" id="item-${item.id}">
    </div>`;
  });
}

async function submitOrder() {
  const table = document.getElementById("tableNumber").value;
  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("phoneNumber").value;

  const items = document.querySelectorAll('[id^="item-"]');
  const order = [];

  items.forEach(input => {
    if (parseInt(input.value) > 0) {
      const id = input.id.split('-')[1];
      order.push({ id: parseInt(id), quantity: parseInt(input.value) });
    }
  });

  const res = await fetch('/api/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ table, name, phone, items: order })
  });

  if (res.ok) alert('تم إرسال الطلب للمطبخ!');
}

loadMenu();
