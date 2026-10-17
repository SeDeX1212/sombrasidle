// ==========================================
// BANCO DE DADOS - SOMBRAS DA SOCIEDADE
// ==========================================
const personagens = [
    {
        id: "akane",
        nome: "Akane Chigiri",
        genero: "Feminino",
        aliases: ["akane", "akane chigiri", "chigiri"],
        frase: "Aquilo... aquele dia não era eu...",
        imagem: "assets/akane.png",
        estado: "Vivo",
        afiliacao: "Desajustados",
        statusSocial: "Herói",
        idade: "20 a 25 anos",
        arco: "Registros",
        nomeIndividualidade: "Hemo Cinetica - Vascularis",
        tipoIndividualidade: "Controle Corporal",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "allen",
        nome: "Allen Kalel",
        genero: "Masculino",
        aliases: ["allen", "allen kal", "kalel"],
        frase: "To com sono...",
        imagem: "assets/allen.png",
        estado: "Vivo",
        afiliacao: "Desajustados",
        statusSocial: "Anti-herói",
        idade: "-20 anos",
        arco: "Registros",
        tipoIndividualidade: "Espiritual",
        nomeIndividualidade: "Polthergheist",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "ron",
        nome: "Ron Chair",
        genero: "Masculino",
        aliases: ["ron", "chair", "doutor"],
        frase: "Vou contar ate 10...",
        imagem: "assets/ron.png",
        estado: "Vivo",
        afiliacao: "Desajustados",
        statusSocial: "Anti-herói",
        idade: "20 a 25 anos",
        arco: "Registros",
        tipoIndividualidade: "Influência",
        nomeIndividualidade: "Stop Time",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "mori",
        nome: "Kakumori Jinseien",
        genero: "Masculino",
        aliases: ["kakumori", "jinseien", "mori"],
        frase: "Vai ver aqui é as cidades subterrâneas",
        imagem: "assets/mori.png",
        estado: "Vivo",
        afiliacao: "Desajustados",
        statusSocial: "Herói",
        idade: "+30 anos",
        arco: "Registros",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Imortalidade",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "shohei",
        nome: "Shohei Shiratori",
        genero: "Masculino",
        aliases: ["shohei", "shohei shi"],
        frase: "Ninguem vai passar desse ponto",
        imagem: "assets/shohei.png",
        estado: "Vivo",
        afiliacao: "Second Chance",
        statusSocial: "Anti-herói",
        idade: "25 a 30 anos",
        arco: "Tartarus",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Impact Event",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "yuto",
        nome: "Yuto Ushinata",
        genero: "Masculino",
        aliases: ["yuto", "ushinata", "yuto ushinata"],
        frase: "Por qual motivo vocês fazem isso?...",
        imagem: "assets/yuto.png",
        estado: "Vivo",
        afiliacao: "Second Chance",
        statusSocial: "Anti-herói",
        idade: "20 a 25 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Destruente",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "taichi",
        nome: "Taichi Kobayashi",
        genero: "Masculino",
        aliases: ["taichi", "kobayashi", "taichi Kobayashi"],
        frase: "Eu? Eu diria que sou apenas um Bisbilhoteiro",
        imagem: "assets/taichi.png",
        estado: "Vivo",
        afiliacao: "Nenhuma",
        statusSocial: "Anti-herói",
        idade: "Desconhecido",
        arco: "Tartarus",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Bright Sight",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "ashley",
        nome: "Ashley",
        genero: "Feminino",
        aliases: ["caçadora", "ash", "ashley"],
        frase: "Você precisa de mim por que ele envolve...uma caçada?",
        imagem: "assets/ashley.png",
        estado: "Vivo",
        afiliacao: "Espetaculo",
        statusSocial: "Vilão",
        idade: "25 a 30 anos",
        arco: "Ato Final",
        tipoIndividualidade: "Influência",
        nomeIndividualidade: "Comando",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "akinori",
        nome: "Akinori",
        genero: "Masculino",
        aliases: ["fantasma", "akinori"],
        frase: "Você ja se sentiu um fantasma?...",
        imagem: "assets/akinori.png",
        estado: "Vivo",
        afiliacao: "Espetaculo",
        statusSocial: "Vilão",
        idade: "25 a 30 anos",
        arco: "Ato Final",
        tipoIndividualidade: "Espiritual",
        nomeIndividualidade: "Vínculo Espiritual",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "arata",
        nome: "Arata Tsune",
        genero: "Masculino",
        aliases: ["arata", "tsune"],
        frase: "Eu nunca me esqueceria do rosto daquele desgraçado",
        imagem: "assets/arata.png",
        estado: "Vivo",
        afiliacao: "Shie Hassaikai",
        statusSocial: "Vilão",
        idade: "+30 anos",
        arco: "Registros",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Golden Edge",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "nero",
        nome: "Nero Kiyama",
        genero: "Masculino",
        aliases: ["nero", "overlord"],
        frase: "Vamos mostrar pra esse verme o poder da nossa Shie Hassaikai",
        imagem: "assets/nero.png",
        estado: "Vivo",
        afiliacao: "Shie Hassaikai",
        statusSocial: "Vilão",
        idade: "25 a 30 anos",
        arco: "Registros",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Emoção Monstruosa",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "ishiro",
        nome: "Ishiro Shiratori",
        genero: "Masculino",
        aliases: ["abismo", "ishiro"],
        frase: "O que acha de termos uma conversa sobre o mundo que vem por aí?",
        imagem: "assets/ishiro.png",
        estado: "Vivo",
        afiliacao: "Espetaculo",
        statusSocial: "Vilão",
        idade: "+35 anos",
        arco: "Registros",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Mímica",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "sadao",
        nome: "Sadao Kiyama",
        genero: "Masculino",
        aliases: ["sadao"],
        frase: "Que espetáculo incrivel, telespectadores",
        imagem: "assets/sadao.png",
        estado: "Morto",
        afiliacao: "Cronos",
        statusSocial: "Vilão",
        idade: "+35 anos",
        arco: "Tartarus",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Manipulação Corporal",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "miku",
        nome: "Miku Izuri",
        genero: "Feminino",
        aliases: ["miku", "izuri"],
        frase: "Mas se um dos dois criarem algo, o credito fica com quem?",
        imagem: "assets/miku.png",
        estado: "Vivo",
        afiliacao: "Shie Hassaikai",
        statusSocial: "Vilão",
        idade: "-20 anos",
        arco: "Erros",
        tipoIndividualidade: "Espiritual",
        nomeIndividualidade: "Toque da Alma",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "mei",
        nome: "Mei",
        genero: "Feminino",
        aliases: ["mei"],
        frase: "Vamos viver a nossa vida juntas de uma forma bem mágica...! O que me diz...?",
        imagem: "assets/mei.png",
        estado: "Morto",
        afiliacao: "Cronos",
        statusSocial: "Vilão",
        idade: "20 a 25 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Chave de Ferrugem",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "loge",
        nome: "Logue - Loge",
        genero: "Masculino",
        aliases: ["loge", "logue"],
        frase: "???",
        imagem: "assets/logue.png",
        estado: "Morto",
        afiliacao: "Cronos",
        statusSocial: "Vilão",
        idade: "25 a 30 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Duplicação",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "hyro",
        nome: "Hyro - Hyrrokkin",
        genero: "Masculino",
        aliases: ["Hyro", "Hyrrokkin"],
        frase: "Noite bonita não e? ate mais...",
        imagem: "assets/hyro.png",
        estado: "Vivo",
        afiliacao: "Cronos",
        statusSocial: "Vilão",
        idade: "20 a 25 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Teleportação",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "dafari",
        nome: "Dafari - Mundilfari",
        genero: "Masculino",
        aliases: ["dafari", "mundilfari"],
        frase: "Eu vou matar a outra garota pra ver como você reage",
        imagem: "assets/dafari.png",
        estado: "Morto",
        afiliacao: "Cronos",
        statusSocial: "Vilão",
        idade: "30 a 35 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Influencia",
        nomeIndividualidade: "Pressao Mental",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "fenrir",
        nome: "Fenrir",
        genero: "Masculino",
        aliases: ["fenrir"],
        frase: "???",
        imagem: "assets/fenrir.png",
        estado: "Morto",
        afiliacao: "Cronos",
        statusSocial: "Vilão",
        idade: "25 a 30 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Espinheiro",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "narvi",
        nome: "Narvi",
        genero: "Masculino",
        aliases: ["narvi"],
        frase: "Eu sempre quis ser um vilão",
        imagem: "assets/narvi.png",
        estado: "Morto",
        afiliacao: "Cronos",
        statusSocial: "Vilão",
        idade: "30 a 35 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Chamas",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "mashiro",
        nome: "Mashiro Shiratori",
        genero: "Masculino",
        aliases: ["mashiro"],
        frase: "O mundo não é dos fracos, nós devemos conserta-lo pois somos fortes.",
        imagem: "assets/mashiro.png",
        estado: "Morto",
        afiliacao: "Cronos",
        statusSocial: "Vilão",
        idade: "20 a 25 anos",
        arco: "Erros",
        tipoIndividualidade: "Influência",
        nomeIndividualidade: "Submissão",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "destroyer",
        nome: "Destroyer",
        genero: "Masculino",
        aliases: ["destroyer"],
        frase: "???",
        imagem: "assets/destroyer.png",
        estado: "Vivo",
        afiliacao: "Nenhum",
        statusSocial: "Vilão",
        idade: "Desconhecido",
        arco: "Tartarus",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Destruição",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "ginko",
        nome: "Ginko",
        genero: "Feminino",
        aliases: ["ginko"],
        frase: "O que você ta fazendo na minha casa? seu CANALHA",
        imagem: "assets/ginko.png",
        estado: "Vivo",
        afiliacao: "Nenhum",
        statusSocial: "Civil",
        idade: "30 a 35 anos",
        arco: "Erros",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "indestrutibilidade Interna",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "reverse",
        nome: "Reverse",
        genero: "Masculino",
        aliases: ["reverse"],
        frase: "HEHE, IAI MORI",
        imagem: "assets/reverse.png",
        estado: "Vivo",
        afiliacao: "Nenhum",
        statusSocial: "Vilão",
        idade: "25 a 30 anos",
        arco: "Tartarus",
        tipoIndividualidade: "Influência",
        nomeIndividualidade: "Reverse",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "suzune",
        nome: "Suzune",
        genero: "Masculino",
        aliases: ["suzune"],
        frase: "HEHE, IAI MORI",
        imagem: "assets/suzune.png",
        estado: "Vivo",
        afiliacao: "Shie Hassaikai",
        statusSocial: "Vilão",
        idade: "20 a 25 anos",
        arco: "Tartarus",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Bomba de Fumaça",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "curse",
        nome: "Curse",
        genero: "Masculino",
        aliases: ["curse", "raizen"],
        frase: "...",
        imagem: "assets/curse.png",
        estado: "Vivo",
        afiliacao: "Shie Hassaikai",
        statusSocial: "Vilão",
        idade: "25 a 30 anos",
        arco: "Erros",
        tipoIndividualidade: "Psicoemocional",
        nomeIndividualidade: "Estabilização e Desestabilização",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "glacier",
        nome: "Glacier",
        genero: "Masculino",
        aliases: ["glacier", "koichi"],
        frase: "Mandou bem garota do sangue!",
        imagem: "assets/glacier.png",
        estado: "Vivo",
        afiliacao: "Shie Hassaikai",
        statusSocial: "Vilão",
        idade: "20 a 25 anos",
        arco: "Registros",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Frostwalker",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "kurona",
        nome: "Kurona Chigiri",
        genero: "Feminino",
        aliases: ["kurona", "dama da noite"],
        frase: "Ah vocês chegaram, gostaram das pistas que eu deixei?",
        imagem: "assets/kurona.png",
        estado: "Vivo",
        afiliacao: "Shie Hassaikai",
        statusSocial: "Vilão",
        idade: "20 a 25 anos",
        arco: "Registros",
        tipoIndividualidade: "Influencia",
        nomeIndividualidade: "Hemo-Kinética Moderatio",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "vyris",
        nome: "Vyris",
        genero: "Masculino",
        aliases: ["nemesis", "vyris"],
        frase: "Vocês não estavam tentando fugir neh?",
        imagem: "assets/vyris.png",
        estado: "Vivo",
        afiliacao: "Shie Hassaikai",
        statusSocial: "Vilão",
        idade: "Desconhecido",
        arco: "Erros",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "???",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "yuki e tsuki",
        nome: "Yuki e Tsuki",
        genero: "Masculino",
        aliases: ["yuki", "tsuki"],
        frase: "SIM (sim), NÃO (não)",
        imagem: "assets/yt.png",
        estado: "Vivo",
        afiliacao: "Second Chance",
        statusSocial: "Civil",
        idade: "-20 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Psicoemocional",
        nomeIndividualidade: "Sentidos Ecoados",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "christian",
        nome: "Christian Martena",
        genero: "Masculino",
        aliases: ["christian", "cálice"],
        frase: "VOCE PRECIA DE TERAPIA, A GENTE TEM AQUI TAMBÉM",
        imagem: "assets/christian.png",
        estado: "Vivo",
        afiliacao: "Second Chance",
        statusSocial: "Civil",
        idade: "25 a 30 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Santo Graal",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "amara",
        nome: "Amara Paradiz",
        genero: "Feminino",
        aliases: ["amara", "paradiz"],
        frase: "(ofega) deu trabalho levar tudo isso.",
        imagem: "assets/amara.png",
        estado: "Vivo",
        afiliacao: "Second Chance",
        statusSocial: "Civil",
        idade: "-20 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "4D",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "lamiriya",
        nome: "Lamiriya Paradiz",
        genero: "Feminino",
        aliases: ["Lamiriya"],
        frase: "...",
        imagem: "assets/lamiriya.png",
        estado: "Vivo",
        afiliacao: "Second Chance",
        statusSocial: "Civil",
        idade: "+35 anos",
        arco: "Belo Show",
        tipoIndividualidade: "Psicoemocional",
        nomeIndividualidade: "Abismo",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "kenzo",
        nome: "Kenzo",
        genero: "Masculino",
        aliases: ["kenzo"],
        frase: "",
        imagem: "assets/kenzo.png",
        estado: "Vivo",
        afiliacao: "Second Chance",
        statusSocial: "Anti-Heroi",
        idade: "+35 anos",
        arco: "Registros",
        tipoIndividualidade: "Não Possui",
        nomeIndividualidade: "Não Possui",
        estadoIndividualidade: "Não Possui"
    },
    {
        id: "naomi",
        nome: "Naomi",
        genero: "Feminino",
        aliases: ["naomi"],
        frase: "...",
        imagem: "assets/naomi.png",
        estado: "Vivo",
        afiliacao: "Tartarus",
        statusSocial: "Civil",
        idade: "25 a 30 anos",
        arco: "Tartarus",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Brabuleta",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "asashiki",
        nome: "Asashiki",
        genero: "Masculino",
        aliases: ["asashiki"],
        frase: "...",
        imagem: "assets/asashiki.png",
        estado: "Vivo",
        afiliacao: "Tartarus",
        statusSocial: "Civil",
        idade: "20 a 25 anos",
        arco: "Tartarus",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "CONTRA ATAQUE QUANTICO",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "mai",
        nome: "Mai Yozora",
        genero: "Feminino",
        aliases: ["mai", "nebula", "dark nebula"],
        frase: "Eu vou evoluir não quantas vezes forem precisas",
        imagem: "assets/mai.png",
        estado: "Vivo",
        afiliacao: "Torre dos Herois",
        statusSocial: "Heroi",
        idade: "30 a 35 anos",
        arco: "Registros",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Perfect Zero",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "sunburst",
        nome: "Yoshida Hyakusen",
        genero: "Masculino",
        aliases: ["sunburst", "yoshida"],
        frase: "O sol, brilha mais forte do que nunca, seu bossal do caralho",
        imagem: "assets/sunburst.png",
        estado: "Vivo",
        afiliacao: "Torre dos Herois",
        statusSocial: "Heroi",
        idade: "30 a 35 anos",
        arco: "Tartarus",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Sun Burst",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "aegis",
        nome: "Yari Keshiro",
        genero: "Feminino",
        aliases: ["aegis", "yari"],
        frase: "Ai que preguiça de trabalhar hoje",
        imagem: "assets/aegis.png",
        estado: "Vivo",
        afiliacao: "Torre dos Herois",
        statusSocial: "Heroi",
        idade: "20 a 25 anos",
        arco: "Erros",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Sistema de Barreira",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "moira",
        nome: "Moira",
        genero: "Feminino",
        aliases: ["Moira"],
        frase: "Ai que preguiça de trabalhar hoje",
        imagem: "assets/moira.png",
        estado: "Vivo",
        afiliacao: "Torre dos Herois",
        statusSocial: "Heroi",
        idade: "25 a 30 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Carretel",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "kumatori",
        nome: "Kumatori",
        genero: "Masculino",
        aliases: ["Kumatori"],
        frase: "...",
        imagem: "assets/kumatori.png",
        estado: "Vivo",
        afiliacao: "Torre dos Herois",
        statusSocial: "Heroi",
        idade: "25 a 30 anos",
        arco: "Ato final",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Urso",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "hakuen",
        nome: "Hakuen",
        genero: "Masculino",
        aliases: ["hakuen"],
        frase: "Aqueles que lutaram nas sombas, eles sim são os verdadeiros herois",
        imagem: "assets/hakuen.png",
        estado: "Vivo",
        afiliacao: "Torre dos Herois",
        statusSocial: "Heroi",
        idade: "+35 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Banco de Vapor",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "ariete",
        nome: "Ariete",
        genero: "Masculino",
        aliases: ["Ariete"],
        frase: "Aí, os meus estragos eu que pago",
        imagem: "assets/ariete.png",
        estado: "Vivo",
        afiliacao: "Torre dos Herois",
        statusSocial: "Heroi",
        idade: "30 a 35 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Charge",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "ophius",
        nome: "Ophius ",
        genero: "Feminino",
        aliases: ["Ophius"],
        frase: "Vocês não são tipo, PALADINOS DA JUSTIÇA?",
        imagem: "assets/ophius.png",
        estado: "Vivo",
        afiliacao: "Torre dos Herois",
        statusSocial: "Heroi",
        idade: "25 a 30 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Serpente",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "faceless",
        nome: "Faceless",
        genero: "Masculino",
        aliases: ["faceless"],
        frase: "Perae. Responder a muié",
        imagem: "assets/faceless.png",
        estado: "Vivo",
        afiliacao: "Torre dos Herois",
        statusSocial: "Heroi",
        idade: "20 a 25 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Faceless",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "king",
        nome: "King",
        genero: "Masculino",
        aliases: ["king"],
        frase: "O KING NUNCA PERDE",
        imagem: "assets/king.png",
        estado: "Vivo",
        afiliacao: "Torre dos Herois",
        statusSocial: "Heroi",
        idade: "25 a 30 anos",
        arco: "Noite de Caça",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Felis catus",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "naki",
        nome: "Naki",
        genero: "Masculino",
        aliases: ["naki", "hi'hell", "hell"],
        frase: "O KING NUNCA PERDE",
        imagem: "assets/naki.png",
        estado: "Vivo",
        afiliacao: "Torre dos Herois",
        statusSocial: "Heroi",
        idade: "25 a 30 anos",
        arco: "Registros",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Hell Touch",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "kazuya",
        nome: "Kazuya Awara",
        genero: "Masculino",
        aliases: ["kazuya"],
        frase: "Não pode fala palavrão 🫢",
        imagem: "assets/kazuya.png",
        estado: "Vivo",
        afiliacao: "Second Chance",
        statusSocial: "Heroi",
        idade: "20 a 25 anos",
        arco: "Tartarus",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Manipulação de Ossos",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "espectro",
        nome: "Espectro",
        genero: "Masculino",
        aliases: ["espectro"],
        frase: "Vamo da uma volta",
        imagem: "assets/espectro.png",
        estado: "Vivo",
        afiliacao: "Estrangeiros",
        statusSocial: "Heroi",
        idade: "25 a 30 anos",
        arco: "Cupula",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Dash",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "thunderbird",
        nome: "Thunderbird",
        genero: "Masculino",
        aliases: ["thunderbird"],
        frase: "...",
        imagem: "assets/thunderbird.png",
        estado: "Vivo",
        afiliacao: "Estrangeiros",
        statusSocial: "Heroi",
        idade: "25 a 30 anos",
        arco: "Cupula",
        tipoIndividualidade: "Fisico",
        nomeIndividualidade: "Thunderbird",
        estadoIndividualidade: "Despertada"
    },
    {
        id: "love",
        nome: "Love",
        genero: "Masculino",
        aliases: ["love"],
        frase: "Que lindo espetaculo, bravo, bravo",
        imagem: "assets/love.png",
        estado: "Vivo",
        afiliacao: "Estrangeiros",
        statusSocial: "Heroi",
        idade: "30 a 35 anos",
        arco: "Cupula",
        tipoIndividualidade: "Criação",
        nomeIndividualidade: "Exibição Brilhante",
        estadoIndividualidade: "Não Despertada"
    },
    {
        id: "ion",
        nome: "Ion",
        genero: "Feminino",
        aliases: ["ion"],
        frase: "...",
        imagem: "assets/ion.png",
        estado: "Vivo",
        afiliacao: "Estrangeiros",
        statusSocial: "Heroi",
        idade: "20 a 25 anos",
        arco: "Cupula",
        tipoIndividualidade: "Influência",
        nomeIndividualidade: "Ion",
        estadoIndividualidade: "Não Despertada"
    }
];
// ==========================================
// SISTEMA DE MODOS (DIÁRIO E LIVRE)
// ==========================================
// Remove duplicatas (se houver)
const personagensUnicos = Array.from(new Map(personagens.map(p => [p.id, p])).values());

// Verifica a URL para saber qual modo carregar
const urlParams = new URLSearchParams(window.location.search);
const modoAtual = urlParams.get('modo') || 'diario'; // Se não tiver nada na URL, padrão é diario

let respostaDoDia;

if (modoAtual === 'livre') {
    // MODO LIVRE: Sorteia aleatório a cada F5
    const indiceAleatorio = Math.floor(Math.random() * personagensUnicos.length);
    respostaDoDia = personagensUnicos[indiceAleatorio];
} else {
    // MODO DIÁRIO: Sorteia baseado no dia do ano (Muda apenas à meia-noite)
    const hoje = new Date();
    const dataString = `${hoje.getFullYear()}-${hoje.getMonth() + 1}-${hoje.getDate()}`;
    
    // Hash matemático da data
    let hashData = 0;
    for (let i = 0; i < dataString.length; i++) {
        hashData = ((hashData << 5) - hashData) + dataString.charCodeAt(i);
        hashData |= 0; 
    }
    hashData = Math.abs(hashData);
    
    const indiceDiario = hashData % personagensUnicos.length;
    respostaDoDia = personagensUnicos[indiceDiario];
}

// ==========================================
// CAMPOS QUE SERÃO COMPARADOS
// ==========================================
const CAMPOS_COMPARAVEIS = [
    { chave: "estado",                label: "Estado" },
    { chave: "afiliacao",             label: "Afiliação" },
    { chave: "genero",                label: "Genero" },
    { chave: "statusSocial",          label: "Status Social" },
    { chave: "idade",                 label: "Idade" },
    { chave: "arco",                  label: "Arco" },
    { chave: "tipoIndividualidade",   label: "Tipo de Individualidade" },
    { chave: "estadoIndividualidade", label: "Estado da Individualidade" }
];

// ==========================================
// ESTADO DO JOGO
// ==========================================
const tentativas = []; 

// ==========================================
// INICIALIZAÇÃO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    configurarInput();
    configurarModos();
});

// Configura os botões visuais para mostrar qual está ativo
function configurarModos() {
    const btnDiario = document.getElementById("btn-modo-diario");
    const btnLivre = document.getElementById("btn-modo-livre");

    if (modoAtual === 'livre') {
        if(btnLivre) btnLivre.classList.add("ativo");
    } else {
        if(btnDiario) btnDiario.classList.add("ativo");
    }
}

function configurarInput() {
    const input = document.getElementById("input-personagem");
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") processarChute(input.value);
    });
    input.addEventListener("input", () => input.classList.remove("erro", "acerto"));
}

// ==========================================
// PROCESSA O CHUTE
// ==========================================
function processarChute(texto) {
    const chute = texto.trim().toLowerCase();
    const input = document.getElementById("input-personagem");
    if (chute === "") return;

    const chutado = personagens.find(p =>
        p.aliases.some(alias => alias.toLowerCase() === chute)
    );

    if (!chutado) {
        input.classList.add("erro");
        input.value = "";
        input.placeholder = "❌ Personagem desconhecido...";
        setTimeout(() => {
            input.placeholder = "Digite o nome do personagem...";
            input.classList.remove("erro");
        }, 2000);
        return;
    }

    if (tentativas.some(t => t.id === chutado.id)) {
        input.classList.add("erro");
        input.value = "";
        input.placeholder = `"${chutado.nome}" já foi chutado!`;
        setTimeout(() => {
            input.placeholder = "Digite o nome do personagem...";
            input.classList.remove("erro");
        }, 2000);
        return;
    }

    tentativas.push(chutado);
    input.classList.add("acerto");
    input.value = "";
    setTimeout(() => input.classList.remove("acerto"), 600);

    renderizarComparacao(chutado);

    if (chutado.id === respostaDoDia.id) {
        setTimeout(() => {
            revelarResposta();
        }, 800);
    }
}

// ==========================================
// RENDERIZA O CARD DE COMPARAÇÃO
// ==========================================
function renderizarComparacao(chutado) {
    const container = document.getElementById("fichas-container");

    const card = document.createElement("div");
    card.className = "card-comparacao";

    const tagsHTML = CAMPOS_COMPARAVEIS.map(campo => {
        const valorChutado = chutado[campo.chave] || "Desconhecido";
        const valorCerto = respostaDoDia[campo.chave] || "Desconhecido";
        
        // Compara ignorando maiúsculas/minúsculas
        const igual = valorChutado.toLowerCase() === valorCerto.toLowerCase();
        
        const classe = igual ? "certo" : "errado";
        const icone = igual ? "✓" : "✕";
        
        return `
            <div class="stat-group">
                <span class="stat-title">${campo.label}</span>
                <span class="tag ${classe}">${icone} ${valorChutado}</span>
            </div>
        `;
    }).join("");

    const acertouTudo = CAMPOS_COMPARAVEIS.every(campo =>
        (chutado[campo.chave] || "").toLowerCase() === (respostaDoDia[campo.chave] || "").toLowerCase()
    );

    card.innerHTML = `
        <div class="comparacao-header">
            <div class="nome-tentativa">
                <span class="nome">${chutado.nome}</span>
                ${acertouTudo ? '<span class="badge-acerto">ACERTOU!</span>' : ''}
            </div>
            <img src="${chutado.imagem}" alt="${chutado.nome}" class="mini-portrait"
                 onerror="this.style.display='none'">
        </div>
        
        <p class="frase-mini">"${chutado.frase}"</p>
        
        <div class="stats-grid">
            ${tagsHTML}
        </div>
    `;

    container.appendChild(card);

    setTimeout(() => {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 200);
}

// ==========================================
// REVELA A RESPOSTA QUANDO O JOGADOR ACERTA
// ==========================================
function revelarResposta() {
    const container = document.getElementById("fichas-container");

    const vitoria = document.createElement("div");
    vitoria.className = "tela-vitoria";
    vitoria.innerHTML = `
        <h2>Alvo Encontrado</h2>
        <div class="idle-container ficha-nova">
            <div class="info-section">
                <h1 class="char-name">${respostaDoDia.nome}</h1>
                <p class="char-quote">"${respostaDoDia.frase}"</p>

                <div class="stats-grid">
                    <div class="stat-group">
                        <span class="stat-title">Estado</span>
                        <span class="tag certo">✓ ${respostaDoDia.estado}</span>
                    </div>
                    <div class="stat-group">
                        <span class="stat-title">Afiliação</span>
                        <span class="tag certo">✓ ${respostaDoDia.afiliacao}</span>
                    </div>
                    <div class="stat-group">
                        <span class="stat-title">Gênero</span>
                        <span class="tag certo">✓ ${respostaDoDia.genero}</span>
                    </div>
                    <div class="stat-group">
                        <span class="stat-title">Status Social</span>
                        <span class="tag certo">✓ ${respostaDoDia.statusSocial}</span>
                    </div>
                    <div class="stat-group">
                        <span class="stat-title">Idade</span>
                        <span class="tag certo">✓ ${respostaDoDia.idade}</span>
                    </div>
                    <div class="stat-group">
                        <span class="stat-title">Arco</span>
                        <span class="tag certo">✓ ${respostaDoDia.arco}</span>
                    </div>
                </div>

                <div class="detail-row">
                    <span class="detail-title">Individualidade</span>
                    <div class="individualidade-box revelada">
                        <h3>${respostaDoDia.nomeIndividualidade}</h3>
                        <div class="individ-status">
                            <span class="stat-title">Estado da Individualidade</span>
                            <span class="tag certo">✓ ${respostaDoDia.estadoIndividualidade}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="image-section">
                <img src="${respostaDoDia.imagem}" alt="${respostaDoDia.nome}" class="char-portrait"
                     onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22500%22><rect fill=%22%23222%22 width=%22400%22 height=%22500%22/><text x=%2250%25%22 y=%2250%25%22 fill=%22%23666%22 font-size=%2220%22 text-anchor=%22middle%22>Sem imagem</text></svg>'">
            </div>
        </div>
    `;

    container.appendChild(vitoria);
    setTimeout(() => vitoria.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
}