window.onload = () => {
  agenda ();
}

function agenda(){
  const btn_add = document.getElementById('add');
  
  btn_add.addEventListener('click', () => {
    
    //crear elemento input
    const input = document.createElement('input');
    //agrego atributos al input
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'titulo de mi tarea');
    //clase que se agrega a input
    input.classList.add('class', 'form-group');
    input.value;
    //le asigno un padre donde quiero agregar el input en el html
    const contenedor_input = document.getElementById('cont_input');
    contenedor_input.appendChild(input);

    //crear boton ara guardar titulo tarea
    const boton_titulo = document.createElement('button');
    boton_titulo.setAttribute('type', 'button');
    boton_titulo.classList.add('btn', 'btn-success');
    const texto = document.createTextNode('guardar');
    //asignamos padre
    contenedor_input.appendChild(boton_titulo);
    boton_titulo.appendChild(texto);

    //crear caja texto que reciba texto a guardar
    boton_titulo.addEventListener('click', () => {
      //posicion cero ya que esa necesito de la clase
      let tarea = document.getElementsByClassName('form-group')[0].value;
      document.getElementsByClassName('form-group')[0].value='';
      const container_lista = document.createElement('div');
      container_lista.classList.add('col', 'fondo_lista');

      const div_tarea = document.createElement('div');
      div_tarea.classList.add('fondo_tareas');
      const div_titulo = document.createElement('h3');
      let titulo_text = document.createTextNode(tarea);

      const tareas = document.getElementById('tareas');
      tareas.appendChild(div_tarea);
      div_tarea.appendChild(div_titulo);
      div_titulo.appendChild(titulo_text);

    })

  })
}