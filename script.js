//DOM -> document object model

const $ = ( selector ) => document.querySelector( selector );
//const $$ = ( selector ) => document.querySelectorAll( selector )

const $formulario = $( '#chat-form' );
const $input = $( '#chat-input' );
const $chatTemplate = $( '#chat-template' );
const $listaMensajesChat = $( 'ul' );
const $boton = $( 'button' );
const $main = $( 'main' );
const $textoIndicacionDeCarga = $( 'small' );

let mensajesChat = []

const agregarMensaje = ( mensaje = '', remitente = '' ) => {
  const template = $chatTemplate.content.cloneNode( true );
  //const otroTemplate = $chatTemplate.content.cloneNode( true );
  const [ span, p ] = template.querySelectorAll( 'span,p' );
  // const p = template.getElementsByTagName('p')[0]
  // const span = template.querySeletorAll( 'span' )
  span.textContent = remitente;
  p.textContent = mensaje;
  template.querySelector( 'li' ).classList.add( 'message', remitente );
  $listaMensajesChat.appendChild( template );
  $main.scrollTop = $main.scrollHeight;
  return p
}

$formulario.onsubmit = async ( evento ) => {
  evento.preventDefault()
  const mensaje = $input.value
  if ( !mensaje ) return;
  agregarMensaje( mensaje, 'user' )
  // agregarMensaje( 'Mensaje de prueba', 'user' )
  // agregarMensaje( 'Mensaje de prueba', 'bot' )
  const mensajeUsuario = {
    role: 'user',
    content: mensaje
  }

  mensajesChat.push( mensajeUsuario )



}
