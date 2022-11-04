const numeros = [];
const num_sorteados = [];

for (var i = 0; i <= 50; i++) {
    numeros.push(i);
};



function sortear_num (){
    const numero_sorteado  = Math.floor(Math.random() * numeros.length);
    const repetido = num_sorteados.find (e => e === numero_sorteado);
    console.log(repetido);

    if (repetido != undefined) {  //se repetido não for undefined é porque veio numero repetido
        
        // document.getElementById('numbers').innerHTML = '<h5>Clique novamente</h5>';
        sortear_num();

    } else {

        document.getElementById('numbers').innerHTML = numero_sorteado;

        num_sorteados.push(numero_sorteado);
        document.getElementById('sorteados').innerHTML = num_sorteados;
    }
             

}

var ult_num = 1; //essa constante receberá o ultimo numero da cartela e impedirá de repetir

function minha_cartela() {
    const cartela = [];
    
    
    for (let i = 0; i < 5; i++) {

        if (cartela[i] != ult_num){

            cartela[i] = Math.floor(Math.random() * numeros.length);
            ult_num = cartela[i];
        
        } else {
            minha_cartela();
        }
        

    }
       

    document.getElementById('cartela').innerHTML = cartela;
    console.log(cartela);
}

const viagens = [
    { 
        lugar: '<h2>Pirâmides do Egito</h2>',
        frase: '<h3>Se você gosta de calor e de história está indo no lugar certo!</h3>',
        img: '<img class="img-viagem" src="https://img-aws.ehowcdn.com/750x400p/s3.amazonaws.com/uploadedimages.demandmedia/178375366.jpeg"></img>'
    }, 

    { 
        lugar: '<h2>Ilhas Gregas</h2>',
        frase: '<h3>Se você gosta de mitologia e de águas crsitalinas tá aí um bom lugar!</h3>',
        img: '<img class="img-viagem" src="https://www.viajali.com.br/wp-content/uploads/2017/12/ilhas-gregas-1-1.jpg"></img>'
    },
    
    { 
        lugar: '<h2>Morro do Alemão</h2>',
        frase: '<h3>Se você gosta de correr risco de vida e de balas perdidas este é o lugar!</h3>',
        img: '<img class="img-viagem" src="https://www.vozdascomunidades.com.br/wp-content/uploads/2016/05/historiadocomplexo.jpg"></img>'
    },

    { 
        lugar: '<h2>Fernando de Noronha</h2>',
        frase: '<h3>Aqui é lindo mas até o ar que se respira é pago!</h3>',
        img: '<img class="img-viagem" src="https://www.viagenscinematograficas.com.br/wp-content/uploads/2013/03/Fernando-de-Noronha-O-que-Fazer.jpg"></img>'
    },

    { 
        lugar: '<h2>Savana Africana</h2>',
        frase: '<h3>A natureza aqui é linda mas um Leão pode te comer a qualquer momento</h3>',
        img: '<img class="img-viagem" src="https://s4.static.brasilescola.uol.com.br/be/2021/08/savana-africana.jpg"></img>'
    },

    { 
        lugar: '<h2>Alasca</h2>',
        frase: '<h3>Aqui é muito frio, ou seja você tá Alascado</h3>',
        img: '<img class="img-viagem" src="https://www.girassolviagens.com/wp-content/uploads/2017/12/girassol_alasca-900x530.jpg"></img>'
    },

    { 
        lugar: '<h2>New York</h2>',
        frase: '<h3>Cuidado com o colesterol porque aqui é a terra do fast food</h3>',
        img: '<img class="img-viagem" src="https://classic.exame.com/wp-content/uploads/2017/10/ny-1.jpg?quality=70&strip=info&w=1024"></img>'
    },

    { 
        lugar: '<h2>Beco de Zé Borges</h2>',
        frase: '<h3>Corre, senão morre!! Porque aqui é pipoco!</h3>',
        img: '<img class="img-viagem" src="https://i1.wp.com/www.pbhoje.com.br/wp-content/uploads/2017/10/07fef47b5e20171004071815.jpg?fit=709%2C400&quality=90&strip=all&ssl=1"></img>'
    },

    { 
        lugar: '<h2>Guarabira</h2>',
        frase: '<h3>Dona de um calor quase infernal, essa cidade vai te cozinhar vivo! </h3>',
        img: '<img class="img-viagem" src="https://brejo.com/wp-content/uploads/2020/05/guarabira-rose-video.jpg"></img>'
    },
];

const viagem_sorteada = Math.floor(Math.random() * viagens.length);

function mostrar_viagem(){
    document.getElementById('res-viagem').innerHTML = viagens[viagem_sorteada].lugar+'<br>'+viagens[viagem_sorteada].img+'<br>'+viagens[viagem_sorteada].frase;
}

// document.getElementById('giro').addEventListener('click', sortear);

