const resumos = {
    // Resumos dos livros
    pedraFilosofalLivro: "Harry descobre que é um bruxo e começa sua jornada na Escola de Magia e Bruxaria de Hogwarts. Ele faz amigos e enfrenta Lord Voldemort pela primeira vez.",
    camaraSecretaLivro: "Harry enfrenta a ameaça da Câmara Secreta, que foi aberta novamente, e alunos estão sendo petrificados.",
    prisioneiroAzkabanLivro: "Harry descobre que Sirius Black, um perigoso prisioneiro, escapou de Azkaban e está à sua procura.",
    caliceFogoLivro: "Harry participa do Torneio Tribruxo, onde enfrenta desafios mortais e o retorno de Voldemort.",
    ordemFenixLivro: "Harry forma a Armada de Dumbledore e se prepara para a guerra contra Voldemort, que retornou.",
    enigmaPrincipeLivro: "Harry descobre segredos do passado de Voldemort e inicia a busca pelos Horcruxes.",
    reliquiasLivro: "Harry, Ron e Hermione partem para destruir os Horcruxes de Voldemort, enfrentando perigos mortais no caminho.",

    // Resumos dos filmes
    pedraFilosofal: "Harry descobre que é um bruxo e começa sua jornada em Hogwarts, onde enfrenta Voldemort pela primeira vez.",
    camaraSecreta: "Em seu segundo ano, Harry enfrenta a ameaça da Câmara Secreta e o mistério por trás de ataques a alunos.",
    prisioneiroAzkaban: "Harry descobre que Sirius Black escapou de Azkaban e está à sua procura.",
    caliceFogo: "Harry é misteriosamente inscrito no Torneio Tribruxo, onde perigos mortais e o retorno de Voldemort o aguardam.",
    ordemFenix: "Harry forma a Armada de Dumbledore e se prepara para a guerra contra Voldemort.",
    enigmaPrincipe: "Harry descobre segredos do passado de Voldemort e começa sua busca pelos Horcruxes.",
    reliquiasParte1: "Harry, Ron e Hermione deixam Hogwarts para destruir os Horcruxes, enfrentando muitos perigos.",
    reliquiasParte2: "Harry enfrenta Voldemort na batalha final por Hogwarts, com o destino do mundo mágico em jogo."
};

function mostrarResumo(titulo) {
    const conteudo = resumos[titulo];
    document.getElementById('conteudoResumo').textContent = conteudo;
    document.getElementById('resumosConteudo').scrollIntoView({
        behavior: 'smooth'
    });
}
