let boton1 = document.getElementById("comentario");
let total: number = 0;
let boton2 = document.getElementById("dejarDeComentar");
let cantidad = document.getElementById("cantidad");
const sumarComentarios = (): void => {
  total++;
  alert("Este es el comentario número" + total);
  cantidad?.innerHTML = total;
};

boton1.addEventListener("click", sumarComentarios);

const restarComentarios = (): void => {
  if (total > 0) {
    total--;
    alert("Este es el comentario número" + total);
    cantidad?.innerHTML = total;
  } else {
    total = total;
  }
};
boton2.addEventListener("click", restarComentarios);
