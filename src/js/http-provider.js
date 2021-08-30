

// const url = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const obtenerChiste = async () => {

    try{

       const resp = await fetch( url ); 
    
       if( !resp.ok ) return alert('no se pudo realizar la peticion');

       const { icon_url, id, value } = await resp.json();

       return { icon_url, id, value };

      

    } catch ( err ){
        throw err;
    }
    
}




const obtenerUsuarios = async () => {
    const resp = await fetch( urlUsuarios );
    const {data} = await resp.json();


    return data;
}

export {
    obtenerChiste,
    obtenerUsuarios
}
