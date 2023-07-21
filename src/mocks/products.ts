import {Product} from '../types/product';

export const products: Product[] = [{
    "name": "Двушка в центре Питера",
    "price": 30000000,
    "coordinates": [
        59.938784,
        30.323126
    ],
    "seller": {
        "fullname": "Бюро Семёна",
        "rating": 4.7
    },
    "description": "Просторная двушка в центре Питера. Без кухни, зато в историческом здании. Внизу много кафешек, поесть можно и там. Есть выход на крышу, с которой виден весь город. В собственности больше трёх лет.",
    "address": {
        "city": "Санкт-Петербург",
        "street": "ул.Большая Конюшенная",
        "building": "д.19"
    },
    "publish-date": '1684566745000',
    "category": "Недвижимость",
    "photos": [
        "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_1_1.png",
        "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_1_2.png",
        "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_1_3.png",
        "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_1_4.png"
    ],
    "filters": {
        "type": "flat",
        "area": 120,
        "rooms-count": 2
    }
},
    {
        "name": "Однушка в спальнике Питера",
        "price": 10000000,
        "coordinates": [
            60.027449,
            30.340338
        ],
        "seller": {
            "fullname": "Игнат-Агент",
            "rating": 4.2
        },
        "description": "Уютная однушка в тихом спальном районе. Рядом лес и озёра. Согласованная перепланировка. Тонкие стены — вы будете слышать соседей, зато будете в курсе всех событий.",
        "address": {
            "city": "Санкт-Петербург",
            "street": "ул.Лиственная",
            "building": "д.22"
        },
        "publish-date": "1524061214245",
        "category": "Недвижимость",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_2_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_2_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_2_3.png"
        ],
        "filters": {
            "type": "flat",
            "area": 30,
            "rooms-count": 1
        }
    },
    {
        "name": "Трёшка рядом с Кремлём",
        "price": 22000000,
        "coordinates": [
            56.330176,
            43.999294
        ],
        "seller": {
            "fullname": "Виталий Петрович",
            "rating": 5
        },
        "description": "Трёхкомнатная квартира для большой семьи рядом с Кремлём. 2 минуты до набережной и прекрасного вида на Волгу. Сделана шумоизоляция — вы не будете слышать туристов, а они не будут слышать вас. В квартире есть сауна, джакузи и домашний кинотеатр. Перепланировка согласованна.",
        "address": {
            "city": "Нижний Новгород",
            "street": "ул. Рождественская",
            "building": "д.1"
        },
        "publish-date": "1578569567046",
        "category": "Недвижимость",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_3_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_3_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_3_3.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_3_4.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_3_5.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_3_6.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_3_7.png"
        ],
        "filters": {
            "type": "flat",
            "area": 200,
            "rooms-count": 3
        }
    },
    {
        "name": "BMW 5 серии б/у",
        "price": 3370000,
        "coordinates": [
            55.653558,
            37.586329
        ],
        "seller": {
            "fullname": "Пётр Квят",
            "rating": 4.1
        },
        "description": "В хорошем состоянии, пробег 100000 км, в аварии не попадала, есть подушки безопасности. Зимнюю резину отдам в подарок.",
        "address": {
            "city": "Москва",
            "street": "ул. Одесская",
            "building": "д.22 корпус 4"
        },
        "publish-date": "1541068467135",
        "category": "Автомобиль",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_3.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_4.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_5.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_6.png"
        ],
        "filters": {
            "production-year": 2016,
            "transmission": "auto",
            "body-type": "sedan"
        }
    },
    {
        "name": "Opel Corsa D",
        "price": 195000,
        "coordinates": [
            59.851385,
            30.026907
        ],
        "seller": {
            "fullname": "Прокатчик тачек",
            "rating": 3.9
        },
        "description": "Пробег 225000 км, состояние хорошее, коррозии нет. Сзади новые амортизаторы, обновлена подвеска. Есть подушки безопасности.",
        "address": {
            "city": "Санкт-Петербург",
            "street": "ул. Львовская",
            "building": "д.19 корпус 2"
        },
        "publish-date": "1566579599795",
        "category": "Автомобиль",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_5_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_5_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_5_3.png"
        ],
        "filters": {
            "production-year": 2008,
            "transmission": "mechanic",
            "body-type": "hatchback"
        }
    },
    {
        "name": "Apple MacBook Air 13",
        "price": 25000,
        "coordinates": [
            55.180722,
            61.427949
        ],
        "seller": {
            "fullname": "Максим",
            "rating": 4.5
        },
        "description": "На гарантии. Куплен 3 месяца назад за 65990 рублей. Нужно заменить матрицу. Продаю из-за ненадобности. Всё работает идеально. Кроме экрана. Готов поменять на айфон.",
        "address": {
            "city": "Челябинск",
            "street": "ул.Артиллерийская",
            "building": "д.53"
        },
        "publish-date": "1566890933376",
        "category": "Ноутбук",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_2_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_2_2.png"
        ],
        "filters": {
            "type": "-",
            "ram-value": 4,
            "screen-size": 13,
            "cpu-type": "i5"
        }
    },
    {
        "name": "Фотоаппарат Nikon D610",
        "price": 85000,
        "coordinates": [
            55.75206,
            36.959008
        ],
        "seller": {
            "fullname": "Карина",
            "rating": 3.3
        },
        "description": "Профессиональная полнокадровая фотокамера. Фотографии с разрешением 6016х4016 px. Запись видео с разрешением 1920х1080. Съемка 6 кадров в сек. Съемные объективы. Автофокусировка. В комплекте флешки на 64 и 16 гб, зарядник для батареек.",
        "address": {
            "city": "коттеджный посёлок Николин Ручей",
            "street": "ул. Рябиновая",
            "building": "д.13"
        },
        "publish-date": "1580770800663",
        "category": "Фотоаппарат",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_1_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_1_2.png"
        ],
        "filters": {
            "type": "slr",
            "matrix-resolution": "-",
            "supporting": "full-hd"
        }
    }
];
