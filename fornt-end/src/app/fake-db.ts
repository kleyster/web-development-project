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
    },
    {
      id: 4,
      name:'ТВ,аудио,видео'
    },
    {
      id: 5,
      name:'Бытовая техника'
    }

]

export const PRODUCTS: Product[] = [
  {
    cat_id: 1,
    name: 'Smartphone1',
    uni_id : 1

  },
  {
    cat_id: 1,
    name: 'Smartphone2',
    uni_id : 2

  },
  {
    cat_id: 2,
    name: 'Notebook1',
    uni_id : 3

  },
  {
    cat_id: 2,
    name: 'Notebook2',
    uni_id : 4

  },
  {
    cat_id: 3,
    name: 'Mouse1',
    uni_id : 5

  },
  {
    cat_id: 3,
    name: 'Keyboard1',
    uni_id : 6

  },
  {
    cat_id: 4,
    name: 'TV1',
    uni_id : 7

  },
  {
    cat_id: 4,
    name: 'Camera1',
    uni_id : 8

  },
  {
    cat_id: 5,
    name: 'Appliances1',
    uni_id : 9

  },
  {
    cat_id: 5,
    name: 'Appliances2',
    uni_id : 10

  },
]
