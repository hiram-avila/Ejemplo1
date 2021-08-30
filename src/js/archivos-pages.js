
const body = document.body;
let inputFile, imgFoto;



const crearInput = ( ) => {
    
    const html = `
         
        <h1 class="mt-5"> Subir archivos </h1>
        <hr>

        <label>Selecciona una foto: </label>
        <input type="file" accept="image/png, image/jpeg"/>
    
        <br>
        <img id="foto" class="img-thumbnail"  src="">
    
    `;

    
    
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append( div );

    inputFile = document.querySelector('input')
    imgFoto = document.querySelector('#foto')
}

const eventos = () => {

    inputFile.addEventListener("change", (e) => {
       
        const file = e.target.files[0];
        console.log(file)
    })
}


const subirArchivo = ( archivo ) => {
    
}

export const init = () => {
    crearInput(); 
    eventos();
}