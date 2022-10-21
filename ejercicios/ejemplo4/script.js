function abrirRegalo(event){
  const image = event.currentTarget;
  image.src ='https://media.giphy.com/media/27ppQUOxe7k1G/giphy.gift';
  image.removeEventListener('click', abrirRegalo);
}

const image = document.querySelectror('img');
image.addEvenetlistener('click', abrirRegalo);
