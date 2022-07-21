// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "./img/bulbasaur.webp",
    nameItem: "Bulbasaur",
    description:
      'Grass starter',
    value: 0,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokemon"],
  },
  {
    id: 2,
    img: "./img/charmander.webp",
    nameItem: "Charmander",
    description:
      'Fire starter',
    value: 0,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokemon"],
  },
  {
    id: 3,
    img: "./img/squirtle.webp",
    nameItem: "Squirtle",
    description:
      'Water starter',
    value: 0,
    addCart: "Adicionar ao carrinho",
    tag: ["Pokemon"],
  },
  {
    id: 4,
    img: "./img/pokeball.webp",
    nameItem: "Pokeball",
    description:
      'Uma simple bola para jogar nos pokemons selvagens e pega-los',
    value: 200,
    addCart: "Adicionar ao carrinho",
    tag: ["pokeball"],
  },
  {
    id: 5,
    img: "./img/greatball.webp",
    nameItem: "Greatball",
    description:
      'Uma simples bola para jogar nos pokemons selvagens e pega-los, tem mais efeito que a pokeball',
    value: 600,
    addCart: "Adicionar ao carrinho",
    tag: ["pokeball"],
  },
  {
    id: 6,
    img: "./img/ultraball.png",
    nameItem: "Ultratball",
    description:
      'Uma bola para jogar nos pokemons selvagens e pega-los, tem mais efeito que a greatball',
    value: 1200,
    addCart: "Adicionar ao carrinho",
    tag: ["pokeball"],
  },
  {
    id: 7,
    img: "./img/masterball.webp",
    nameItem: "Masterball",
    description:
      'Uma bola para jogar nos pokemons selvagens e pega-los sem falha',
    value: 9999999,
    addCart: "Adicionar ao carrinho",
    tag: ["pokeball"],
  },
  {
    id: 8,
    img: "./img/potion.webp",
    nameItem: "Potion",
    description:
      'Uma poção para recuperar 20 vida de seu pokemon',
    value: 300,
    addCart: "Adicionar ao carrinho",
    tag: ["potion"],
  },
  {
    id: 9,
    img: "./img/superpotion.webp",
    nameItem: "Superpotion",
    description:
      'Uma poção para recuperar 50 vida de seu pokemon',
    value: 700,
    addCart: "Adicionar ao carrinho",
    tag: ["potion"],
  },
  {
    id: 10,
    img: "./img/hyperpotion.png",
    nameItem: "Hyperpotion",
    description:
      'Uma poção para recuperar 200 vida de seu pokemon',
    value: 1500,
    addCart: "Adicionar ao carrinho",
    tag: ["potion"],
  },
  {
    id: 11,
    img: "./img/revive.webp",
    nameItem: "Revive",
    description:
      'Um item que revive um pokemon desmaiado e restaura metade de seus pontos de vida',
    value: 1500,
    addCart: "Adicionar ao carrinho",
    tag: ["potion"],
  },
  {
    id: 12,
    img: "./img/maxrevive.webp",
    nameItem: "Maxrevive",
    description:
      'Um item que revive um pokemon desmaiado e restaura completamente seus pontos de vida',
    value: 5000,
    addCart: "Adicionar ao carrinho",
    tag: ["potion"],
  },
  {
    id: 13,
    img: "./img/ether.png",
    nameItem: "Ether",
    description:
      'Um item que restaura 10 de PP de um determinado golpe',
    value: 1500,
    addCart: "Adicionar ao carrinho",
    tag: ["potion"],
  },
  {
    id: 14,
    img: "./img/ppmax.webp",
    nameItem: "PPmax",
    description:
      'Aumenta os pontos ded PP de um golpe para seu máximo',
    value: 9800,
    addCart: "Adicionar ao carrinho",
    tag: ["medicine"],
  },
  {
    id: 15,
    img: "./img/iron.webp",
    nameItem: "Iron",
    description:
      'Aumenta a defesa do pokemon selecionado',
    value: 9800,
    addCart: "Adicionar ao carrinho",
    tag: ["medicine"],
  },
  {
    id: 16,
    img: "./img/zinc.webp",
    nameItem: "Zinc",
    description:
      'Aumenta a defesa especial do pokemon selecionado',
    value: 9800,
    addCart: "Adicionar ao carrinho",
    tag: ["medicine"],
  },
  {
    id: 17,
    img: "./img/tm.webp",
    nameItem: "TM 10",
    description:
      'Ensina ao seu pokemon o golpe Hidden Power',
    value: 3000,
    addCart: "Adicionar ao carrinho",
    tag: ["machine"],
  },
  {
    id: 18,
    img: "./img/tm.webp",
    nameItem: "TM 06",
    description:
      'Ensina ao seu pokemon o golpe Toxic',
    value: 3000,
    addCart: "Adicionar ao carrinho",
    tag: ["machine"],
  },
  {
    id: 19,
    img: "./img/tm.webp",
    nameItem: "TM 16",
    description:
      'Ensina ao seu pokemon o golpe Ice Wind',
    value: 3000,
    addCart: "Adicionar ao carrinho",
    tag: ["machine"],
  },
  {
    id: 20,
    img: "./img/tm.webp",
    nameItem: "TM 15",
    description:
      'Ensina ao seu pokemon o golpe Hyper Beam',
    value: 3000,
    addCart: "Adicionar ao carrinho",
    tag: ["machine"],
  },
  {
    id: 21,
    img: "./img/tm.webp",
    nameItem: "TM 26",
    description:
      'Ensina ao seu pokemon o golpe Earthquake',
    value: 3000,
    addCart: "Adicionar ao carrinho",
    tag: ["machine"],
  },

];
