const jogo = {
    personagens: []
}


jogo.personagens.push({ //criando primeiro personagem
    nick: "jogador1",
    vida: 100,
    classe: "guerreiro",
    mana: 50,
    força: 8
})

jogo.personagens.push({ //criando segundo personagem
    nick: "jogador2",
    vida: 50,
    classe: "mago",
    mana: 100,
    força: 12
})



console.log(jogo.personagens) //chama os dados dos personagens