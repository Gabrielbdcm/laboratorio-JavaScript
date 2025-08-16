conteudo.style = "block";
            
        function experimento1(){
            const exp = document.querySelectorAll(".exp");  
            exp.forEach(exp => {            // forAach é para add o evento para cada um individualmente
                exp.addEventListener("mouseenter", () => {    
            //as duas linhas serve para pegar o tamanho da div,evitando q saia da tela
                    const expWidth = exp.offsetWidth;     
                    const expHeight = exp.offsetHeight; 

      
                    const x = Math.random() * (window.innerWidth - expWidth);
                    const y = Math.random() * (window.innerHeight - expHeight);

      
                    exp.style.position = "absolute";
                    exp.style.left = x + "px";
                    exp.style.top = y + "px";
                    });
                    });
        }      
        function experimento2() {
            const exps = document.querySelectorAll(".exp");
                function sortearcor(){
                const r = Math.floor(Math.random()*256)
                const g = Math.floor(Math.random()*256)
                const b = Math.floor(Math.random()*256)
                return `rgb(${r},${g},${b})`;
            }
            setInterval(() => {
                exps.forEach(exps => {
                exps.style.backgroundColor = sortearcor();
            }, 500);
            });
        }
        function experimento3 (){
            const exps = document.querySelectorAll(".exp");
            exps.forEach (exp => {
            exp.style.transition = "transform 0.5s linear";
            let angulo = 0;
            setInterval (() => {
                angulo += 30;
                exp.style.transform = `rotate(${angulo}deg)`; // rodar 10 graus (deg) a  cada 100 milesimos
            },100);
            });
        }
        function experimento4(){
            const styleTag = document.querySelector("head style"); // seleciona a primeira <style> dentro do head
            
                 styleTag.remove(); // remove do DOM
            
        }
        function desativar(){
            location.reload(true);
        }
        function creditos(){
         let creditos= document.getElementById ("creditos");
         let conteudo= document.getElementById ("conteudo");
        conteudo.style.display = "none";
        creditos.style.display = "block";
            
        }
        function home(){
            let creditos= document.getElementById ("creditos");
            let conteudo= document.getElementById ("conteudo");
            
            conteudo.style.display = "grid";
            creditos.style.display = "none";
        }