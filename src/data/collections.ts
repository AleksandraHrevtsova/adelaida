// export const collections = {
//   fire: {
//     slug: 'fire',
//     title: 'fireTitle',
//     description: 'fireDescription',
//     images: [
//       'https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/states_fire_desire_wzvezj',
//       'https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/states_fire_desire_wzvezj',
//     ],
//   },

//   water: {
//     slug: 'water',
//     title: 'waterTitle',
//     description: 'waterDescription',
//     images: [
//       'https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/states_fire_desire_wzvezj',
//       'https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/states_fire_desire_wzvezj',
//     ],
//   },
// };

const imgUrl = 'https://res.cloudinary.com/dbiudjxuw/image/upload/w_1400,h_1800,c_fill/states_fire_desire_wzvezj';

export type Artwork = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export type Collection = {
  slug: string;
  title: string;
  description: string;
  artworks: Artwork[];
};

export const collections: Record<string, Collection> = {
  fire: {
    slug: 'fire',

    title: 'Маски колекції DEMONS',

    description:
      'Вогонь тут не руйнування, а первинна енергія психіки. Протягом життя людина носить безліч соціальних масок, приховуючи одну з найважливіших частин себе — тінь. Усе, що вважається небезпечним, сороміцьким, незручним або неприйнятним, витісняється всередину. Але тінь не зникає. Невизнана, вона стає руйнівною. Демони цієї колекції — не релігійні істоти, а архетипи людської психіки: бажання, лють, сором, влада, страх, вразливість, інстинкт. Ці маски не про перетворення на демона. Вони про зустріч із ним. Про визнання того, що зазвичай заборонено визнавати. Світло без визнання тіні стає лицемірним. Тінь, замкнена у темряві, стає небезпечною. Колекція досліджує внутрішню напругу між пригніченням і прийняттям. Баланс виникає не через контроль, а через усвідомлення.',

  artworks: [
    {
      id: 1,
      title: 'Страж',
      subtitle: '«Кожен перехід вимагає зустрічі з тим, хто охороняє вхід».',
      description:
        'Архетип внутрішнього опору. Ціна трансформації.',
      image: imgUrl,
        // 'https://res.cloudinary.com/dbiudjxuw/image/upload/w_1400,h_1800,c_fill/v1747340300/create_mask_process_craft_cojqed.jpg',
    },

    {
      id: 2,
      title: 'Бажання',
      subtitle:
        '«Бажання завжди знає, куди ми боїмося дивитися».',
      description:
        'Маска потягу, інстинкту та внутрішнього голоду.',
      image: imgUrl,
        // 'https://res.cloudinary.com/dbiudjxuw/image/upload/w_1400,h_1800,c_fill/v1747340300/create_mask_process_paiting_tt7xuq.jpg',
    },

    {
      id: 3,
      title: 'Лють',
      subtitle:
        '«Те, що пригнічується найдовше, повертається найгучніше».',
      description:
        'Архетип руйнівної сили та захисту одночасно.',
      image: imgUrl,
        // 'https://res.cloudinary.com/dbiudjxuw/image/upload/w_1400,h_1800,c_fill/v1747340300/create_mask_process_craft_cojqed.jpg',
    },

    {
      id: 4,
      title: 'Свідок',
      subtitle:
        '«Справжнє бачення починається після втрати ілюзій».',
      description:
        'Фігура внутрішнього спостерігача та памʼяті.',
      image: imgUrl,
        // 'https://res.cloudinary.com/dbiudjxuw/image/upload/w_1400,h_1800,c_fill/v1747340300/create_mask_process_paiting_tt7xuq.jpg',
    },

    {
      id: 5,
      title: 'Сором',
      subtitle:
        '«Сором народжується там, де людина перестає дивитися на себе з любовʼю».',
      description:
        'Архетип прихованості та страху бути побаченим.',
      image: imgUrl,
        // 'https://res.cloudinary.com/dbiudjxuw/image/upload/w_1400,h_1800,c_fill/v1747340300/create_mask_process_craft_cojqed.jpg',
    },

    {
      id: 6,
      title: 'Ілюзія',
      subtitle:
        '«Маска, яка виглядає найбезпечнішою, часто приховує порожнечу».',
      description:
        'Проекція образу, створеного для світу.',
      image: imgUrl,
        // 'https://res.cloudinary.com/dbiudjxuw/image/upload/w_1400,h_1800,c_fill/v1747340300/create_mask_process_paiting_tt7xuq.jpg',
    },

    {
      id: 7,
      title: 'Порожнеча',
      subtitle:
        '«Після руйнування всіх ролей залишається лише тиша».',
      description:
        'Фінальна точка зустрічі із собою.',
      image: imgUrl,
        // 'https://res.cloudinary.com/dbiudjxuw/image/upload/w_1400,h_1800,c_fill/v1747340300/create_mask_process_craft_cojqed.jpg',
    },
  ],
},
};