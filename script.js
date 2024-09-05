const resumos = {
    pedraFilosofal: "Harry descobre que é um bruxo e começa sua jornada na Escola de Magia e Bruxaria de Hogwarts, onde faz amigos e enfrenta Lord Voldemort pela primeira vez.",
    camaraSecreta: "Em seu segundo ano em Hogwarts, Harry enfrenta uma ameaça dentro da escola: a Câmara Secreta foi aberta e alunos estão sendo petrificados.",
    prisioneiroAzkaban: "Harry descobre que um perigoso prisioneiro, Sirius Black, escapou de Azkaban e está à sua procura. Ele também aprende mais sobre seu passado.",
    caliceFogo: "Harry é misteriosamente inscrito no Torneio Tribruxo, uma competição entre escolas de magia, onde perigos mortais e o retorno de Voldemort o aguardam.",
    ordemFenix: "Harry forma a Armada de Dumbledore para treinar seus amigos enquanto a Ordem da Fênix se prepara para a guerra contra Voldemort, que voltou ao poder.",
    enigmaPrincipe: "Harry descobre segredos do passado de Voldemort e começa sua busca pelos Horcruxes, objetos que contêm pedaços da alma do vilão.",
    reliquiasParte1: "Harry, Ron e Hermione deixam Hogwarts para encontrar e destruir os Horcruxes de Voldemort, enfrentando muitos perigos no caminho.",
    reliquiasParte2: "A batalha final em Hogwarts chega ao clímax, e Harry enfrenta Voldemort pela última vez, com o destino do mundo mágico em jogo."
};

function mostrarResumo(filme) {
    const conteudo = resumos[filme];
    document.getElementById('conteudoResumo').textContent = conteudo;
}