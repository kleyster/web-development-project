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
      name:'БЫт'
    }

]

export const PRODUCTS: Product[] = [
  {
    cat_id: 1,
    name: 'Smartphone',
    uni_id : 1

  },
  {
    cat_id: 2,
    name: 'Smartphone',
    uni_id : 2

  }
]
