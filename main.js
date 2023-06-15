const errorMessage = document.getElementById('error-message');
const form = document.getElementById('form');
const sucessContainer = document.getElementById('sucess-message');
const campoB = document.getElementById('campoB');
const campoA = Number(document.getElementById('campoA').value);
let formIsValid = false;

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const campoA = Number(document.getElementById('campoA').value);
  const campoB = Number(document.getElementById('campoB').value);
  const sucessMessage = `O número <b>${campoB} é maior que <b>${campoA}</b>`;
  if (formIsValid) {
    sucessContainer.innerHTML = sucessMessage;
    sucessContainer.style.display = 'block';
    errorMessage.style.display = 'none';
  }
});

campoB.addEventListener('keyup', function(e){
  const campoAValue = Number(document.getElementById('campoA').value);
  const campoBValue = Number(document.getElementById('campoB').value);
  const sucessMessage = `O número <b>${campoBValue} é maior que <b>${campoAValue}</b>`;
  if(campoBValue > campoAValue) {
    formIsValid = true;
    errorMessage.style.display = 'none';
    campoB.classList.remove('error');
  } else {
    errorMessage.style.display = 'block';
    campoB.classList.add('error');
    btn = false;
  }
});
