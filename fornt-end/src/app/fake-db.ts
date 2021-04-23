import {Category,Product} from './models';
export const CATEGORIES: Category[] = [
    {
      id: 1,
      name: 'Смартфоны и гаджеты'
    },
    {
      id: 3,
      name: 'Ноутбуки и компьютеры'
    },
    {
      id: 2,
      name: 'Всё для геймеров'
    }
]

export const PRODUCTS: Product[] = [
  {
    cat_id: 1,
    name: 'Смартфон Samsung Galaxy A31 64GB Black',
    uni_id: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/0/d/0d3b4837a905f3f17c1b3386fbdba172145cf7c5_217129_1xxc.jpg',
    price: 99990
  },
  {
    cat_id: 1,
    name: 'Смартфон Apple iPhone 11 128GB Black',
    uni_id: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/3/5/353535e48550691ecf412838d844026d3307ab12_228942_1.jpg',
    price: 369990
  },
  {
    cat_id: 1,
    name: 'Смартфон Apple iPhone 11 128GB Black',
    uni_id: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/c/2/c234de8ff0123145273a7e39a5a50a12383e7e46_228635_1.jpg',
    price: 674990
  },
  {
    cat_id: 1,
    name : 'Смартфон Samsung Galaxy S21 128GB Violet',
    url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/b/0/b0eec3f278a790dade25f967a179779e7fc33472_232886_1a.jpg',
    uni_id: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 379990
  },
  {
    cat_id: 3,
    name:  'Игровой ноутбук Lenovo Legion Y540 i7 9750H / 16ГБ / 1000HDD / 128SSD / 15.6 / GTX1660Ti 6 ГБ / DOS / (81SX009QRK)',
    url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/a/6/a6ca861d72d0d174fecb6ab6bb18574c3de38a20_226373_1.jpg',
    uni_id: 5,
    description: 'Этот ноутбук не уступает по производительности настольным ПК. Теперь вы сможете где угодно наслаждаться играми, в которые раньше можно было играть только дома.',
    price: 574990
  },
  {
    cat_id: 3,
    name: 'Игровой ноутбук Asus TUF Gaming Dash F15 i7 11370H / 16ГБ / 512SSD / RTX3060 6ГБ / 15.6 / DOS / (FX516PM-HN023)',
    url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/5/8/58c6bcfbf56315752dec74e9f20c7ede29738879_234177_1.jpg',
    uni_id : 6,
    description: 'Этот ноутбук не уступает по производительности настольным ПК. Теперь вы сможете где угодно наслаждаться играми, в которые раньше можно было играть только дома.',
    price: 639990
  },
  {
    cat_id : 3,
    name : 'Игровой ноутбук Lenovo Legion Y740 i7 9750H / 16ГБ / 1000SSD / 15.6 / RTX2070 Max Q 8 ГБ / DOS / (81UH00BMRK)',
    url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/3/a/3a166ec202f33a2d8128fe0dce266032df9b8dad_226367_3zxc.jpg',
    uni_id: 7,
    description: 'Невероятно производительные процессоры Intel® Core™ 9-го поколения, которые обычно доступны только на настольных ПК, гарантируют качество игры как на настольном ПК в сочетании с портативностью.',
    price: 784990
  },
  {
    cat_id: 3,
    name : 'Игровой ноутбук Asus TUF Gaming F15 i5 10300H / 8ГБ / 512SSD / GTX1650 Ti 4Гб / 15.6 / DOS / (FX506LI-HN012)',
    url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/3/a/3a3efd0ca729bf6a232550e598baffcd12cec6bb_229863_11c.jpg',
    uni_id: 8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ultrices lectus, nec suscipit enim. Praesent iaculis porttitor semper. Praesent a interdum ligula.',
    price: 359990
  },
  {
    cat_id: 2,
    name: 'Система виртуальной реальности Vive Cosmos Elite (99HART008-00)',
    url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/3/f/3fa9bc662063858fbd643e5db6d212edd58e0d41_222015_1.jpg',
    uni_id: 9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ultrices lectus, nec suscipit enim. Praesent iaculis porttitor semper.',
    price: 564990
  },
  {
    cat_id: 2,
    name : 'Lorem',
    url : 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/9/7/97f72f98c4ac0c1a95c1edb38dd421d71e7a3801_227680_1.jpg',
    uni_id: 10,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ultrices lectus, nec suscipit enim. Praesent iaculis porttitor semper. Praesent a interdum ligula',
    price: 14990
    },
    {
      cat_id : 2,
      name: 'Гарнитура игровая накладная SteelSeries Arctis Pro, Black',
      url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/7/f/7ff629478679a700903398170082a61012de17f1_14596015587358.jpg',
      uni_id: 11,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ultrices lectus, nec suscipit enim. Praesent iaculis porttitor semper. Praesent a interdum ligula.',
      price: 86990
    },
    {
      cat_id: 2,
      name: 'Монитор Игровой 26.9" Samsung LC27G55TQWIXCI 2560х1440 16:9 VA 144ГЦ (HDMI+DP) Curved Black',
      url: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/4/4/4452ff021a08b0ee50330360d87576d6f644a080_230901_3.jpg',
      uni_id: 12,
      description: 'Lorem ipsum',
      price: 154990
    }
  // {
  //   cat_id: 1,
  //   name: 'Smartphone1',
  //   uni_id : 1,


  // },
  // {
  //   cat_id: 1,
  //   name: 'Smartphone2',
  //   uni_id : 2

  // },
  // {
  //   cat_id: 2,
  //   name: 'Notebook1',
  //   uni_id : 3

  // },
  // {
  //   cat_id: 2,
  //   name: 'Notebook2',
  //   uni_id : 4

  // },
  // {
  //   cat_id: 3,
  //   name: 'Mouse1',
  //   uni_id : 5

  // },
  // {
  //   cat_id: 3,
  //   name: 'Keyboard1',
  //   uni_id : 6

  // },
  // {
  //   cat_id: 4,
  //   name: 'TV1',
  //   uni_id : 7

  // },
  // {
  //   cat_id: 4,
  //   name: 'Camera1',
  //   uni_id : 8

  // },
  // {
  //   cat_id: 5,
  //   name: 'Appliances1',
  //   uni_id : 9

  // },
  // {
  //   cat_id: 5,
  //   name: 'Appliances2',
  //   uni_id : 10

  // },
]
