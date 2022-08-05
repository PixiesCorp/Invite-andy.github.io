let btnForm = document.querySelector('#btn-form');
let form = document.querySelector('#form');
let btnSend = document.querySelector('#btn-send');

btnForm.addEventListener('click', () =>{
  form.classList.toggle('close-open');
});

btnSend.addEventListener('click', enviarMensaje);
function enviarMensaje(){
  let inputName = document.querySelector('.inputwts').value;
  let url = "https://api.whatsapp.com/send?phone=526561630250&text=Nombre: %0A" + inputName;

  window.open(url);

}

//https://api.whatsapp.com/send?phone=526561630250&text=hola,%20asistire%20a%20la%20fiesta%20de%20Andrea:)
