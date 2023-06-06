//Adiciona o evento de scroll na janela

window.addEventListener('scroll',() =>{
    //obtem a posiçao da janela atual
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    //verifica se a posiçao da janela e maior que 500 pixels
    if(scrollTop > 500){
        //exibe o botao "Voltar ao topo"
        document.getElementById('back-to-top').style.display = "block";
    }else{
        //ocuta o botao c
        document.getElementById('back-to-top').style.display = "none";
    }
});

        //Adiciona o evento de clique ao botao "Voltar ao topo"
        document.getElementById('back-to-top').addEventListener('click', (e) => {
            //previne o comportamento padrao do link
            e.preventDefault();

            //retorna ao topo da pagina
            window.scrollTo({
                top: 0,
                behavior: "smooth", 
            });
        


        });