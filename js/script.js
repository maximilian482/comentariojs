function alterarCss() {
  var name = document.getElementById('nome').value
  var comment = document.getElementById('comment').value
  var postagem = document.getElementById('post')
  var corTexto = document.getElementById('cortexto').value
  var corFundo = document.getElementById('corfundo').value

  postagem.innerHTML +=
    '<div class="postagem" style="color: ' +
    corTexto +
    '; background-color: ' +
    corFundo +
    ';"><strong>' +
    name +
    '</strong><hr /><br />' +
    comment +
    ' </div>'

  document.getElementById('nome').value = ''
  document.getElementById('comentario').value = ''
}
