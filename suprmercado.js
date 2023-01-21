var items = []

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var valorproduto = document.querySelector('input[name=numero]');

    items.push({
        nome:nomeProduto.value,
        valor: valorproduto.value
    })

    let listaProtos = document.querySelector('.lista-produtos')
    let soma = 0;
    listaProtos.innerHTML =''
    items.map(function(val){
        soma+= parseFloat(val.valor);
        listaProtos.innerHTML+=`
         <div class="lista-produtos-single">
         <h3>`+val.nome+`</h3>
         <h3 class="price-produto"><span>R$`+val.valor+`</span></h3> 
         </div>
        `
    })
  
   soma= soma.toFixed(2) 
   nomeProduto.value = '';
   valorproduto.value = '';

   let mostraSoma = document.querySelector('.soma-produto h2')
   mostraSoma.innerHTML = 'R$'+soma

    document.querySelector('button[class=limpar]')
    .addEventListener('click',()=>{
        items=[];
        
        document.querySelector('.lista-produtos').innerHTML = '';
        document.querySelector('.soma-produto h2').innerHTML='R$00'
    })
})


