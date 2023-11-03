
const modalHTML = `
  <div id="myModal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100% ">
    <div style=" margin: 15% auto; padding: 20px; border: 1px solid #888; width: 50%;">
      <span id="closeModal" style="float: right; cursor: pointer;"></span>
      <p>Yaratdığımız Modal burdadır</p>
      <button id="cancelButton">Cancel</button>
    </div>
  </div>
`;


document.body.insertAdjacentHTML('beforeend', modalHTML);


const openButton = document.createElement('button');
openButton.textContent = 'Modal Aç';
document.body.appendChild(openButton);


openButton.addEventListener('click', function() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
});


document.addEventListener('click', function(event) {
  if (event.target.id === 'closeModal') {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
});


document.addEventListener('click', function(event) {
  if (event.target.id === 'cancelButton') {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
});
