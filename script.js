const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const normal_p = document.querySelector('p');
const class_p = document.querySelector('.class_p');
const id_p = document.getElementById('id_p');
const placeholder_input = document.querySelector('input');
const image1 = document.createElement('img');

placeholder_input.value = 'as6d541as6d';
console.log(placeholder_input.value);
console.log({
    h1,
    h2,
    id_p,
    normal_p,
    class_p,
    placeholder_input,
});

h1.innerText = 'new DOM H1 <s> example';
normal_p.innerHTML = 'new paragraph EDITED <s> example';
console.log(h1.getAttribute('something'));
    console.log(h2.getAttribute('class'));
h1.setAttribute('something', 'wherever3');
console.log(h1.getAttribute('something'));
    h2.classList.add('wherever4');
    h2.classList.replace('wherever2', 'wherever5');
    h2.classList.remove('wherever5');
    console.log(h2.getAttribute('class'));

id_p.innerHTML = "";
image1.setAttribute('src', 'https://images.hola.com/imagenes/mascotas/20201104178485/consejos-gatos-para-principiantes/0-884-859/gatito-m.jpg?tx=w_680');
console.log(image1);
id_p.append(image1);

