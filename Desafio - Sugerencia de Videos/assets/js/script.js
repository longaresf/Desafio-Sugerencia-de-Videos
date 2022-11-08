let modulo = (() => {

    let container;

    function privateMostrarMultimedia(urlPriv,idPriv) {
        if (idPriv == 'musica'){
            container =  document.querySelector('#musica > iframe');
            container.setAttribute('src',urlPriv);
        } else if (idPriv == 'peliculas') {
            container =  document.querySelector('#peliculas > iframe');
            container.setAttribute('src',urlPriv);
        } else if (idPriv == 'series') {
            container =  document.querySelector('#series > iframe');
            container.setAttribute('src',urlPriv);
        }
    }
 
  return {
    publicMostrarMultimedia: function (urlPubli,idPubli) {
        privateMostrarMultimedia(urlPubli,idPubli);
    },
  }
})();


class Multimedia{
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
        this.setUrl = (nueva_url) => _url = nueva_url;
    }

    get url(){
        return this.getUrl();
    }

    set url(nueva_url){
        this.setUrl(nueva_url);
    }

    setInicio(){
        return 'Este método es para realizar un cambio en la URL del video';
    }
}

class Reproductor extends Multimedia{
    constructor(url,id){
        super(url);
        this._id = id;
    }

    get id(){
        return this._id;
    }

     playMultimedia(){
        modulo.publicMostrarMultimedia(this.url,this.id);
    }

    setInicio(tiempo_inicio){
        this.url = `${this.url}?start=${tiempo_inicio}`;
    }
}

let musica1 = new Reproductor('https://www.youtube.com/embed/eOQS7Cy6G8Y','musica');
let pelicula1 = new Reproductor('https://www.youtube.com/embed/PkhXLgu-mYM','peliculas');
let serie1 = new Reproductor('https://www.youtube.com/embed/9GgxinPwAGc','series');

serie1.setInicio(70);

let btn1 = document.querySelector('#headingOne > h2 > button');
btn1.addEventListener('click',musica1.playMultimedia());

let btn2 = document.querySelector('#headingTwo > h2 > button');
btn2.addEventListener('click',pelicula1.playMultimedia());

let btn3 = document.querySelector('#headingThree > h2 > button');
btn3.addEventListener('click',serie1.playMultimedia());