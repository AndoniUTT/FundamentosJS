const containerGal = document.querySelector('.container');
const imageCon = document.querySelector('.modal-body img')

function getImage(e){
    alert(e.target.src);

}

containerGal.addEventListener('click', getImage);   