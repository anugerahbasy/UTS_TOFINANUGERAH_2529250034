
const jsonData = {
  "month": "18 sd 31 Maret 2026",
  "unit": "IDR/gram",
  "data": [
    {"date":"18-03-2026","price":2636968,"change":-90523,"status":"turun"},
    {"date":"19-03-2026","price":2522486,"change":-114482,"status":"turun"},
    {"date":"20-03-2026","price":2450125,"change":-72361,"status":"turun"},
    {"date":"22-03-2026","price":2438116,"change":-12009,"status":"turun"},
    {"date":"23-03-2026","price":2411218,"change":-26898,"status":"turun"},
    {"date":"24-03-2026","price":2474507,"change":63289,"status":"naik"},
    {"date":"25-03-2026","price":2439206,"change":-35301,"status":"turun"},
    {"date":"26-03-2026","price":2393403,"change":-45803,"status":"turun"},
    {"date":"27-03-2026","price":2452389,"change":58986,"status":"naik"},
    {"date":"29-03-2026","price":2425897,"change":-26492,"status":"turun"},
    {"date":"30-03-2026","price":2462462,"change":36565,"status":"naik"},
    {"date":"31-03-2026","price":2559850,"change":97388,"status":"naik"}
  ]
};


function displayData(json) {
  // Nomor 4: Isi info month dan unit
  document.getElementById('info-bulan').innerText = "Periode: " + json.month;
  document.getElementById('info-unit').innerText = "Satuan: " + json.unit;

  const gridContainer = document.getElementById('gold-grid');

  json.data.forEach(item => {
    const card = `
      <div class="col">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">${item.date}</h6>
            <h5 class="card-title text-primary">Rp ${item.price.toLocaleString()}</h5>
            <p class="card-text small ${item.status === 'naik' ? 'text-success' : 'text-danger'}">
              ${item.status === 'naik' ? '▲' : '▼'} ${item.change.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `;
    gridContainer.innerHTML += card;
  });
}

displayData(jsonData);
