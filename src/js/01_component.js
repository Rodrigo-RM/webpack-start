
import '../css/01_style.css';

// 
export const fn_Saludar = ( nombre ) => {

    console.log('fn-Saludar. Creando Etiqueta h1');

    const web_H1 = document.createElement('h1');
    web_H1.innerText = `Hola ${nombre}, .. Excelente Curso Verdad??`;

    document.body.append(web_H1);

}
