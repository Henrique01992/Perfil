
// window.prompt('Olá ! bem vindo, como você se chama ?')

function mudouTamanho() {
    if (window.innerWidth >= 768){
        itens.style.display = 'block'}
    else {
       itens.style.display = 'none'
    }   

}

function clickMenu() {
    if (itens.style.display == 'block') {
       itens.style.display = 'none'
    }
    else {
       itens.style.display = 'block'
    }
}
function direcionar()

{
      itens.style.display = 'block'
      
      window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

}
