import anahata_mandala_image from '../images/anahata.png'
import anahata_mandala_center_image from '../images/anahata_center.png'
import circus_mandala_image from '../images/circus.png'
import tira_image from '../images/tira_zelyonoe_colnce.png'
import tira_image_small from '../images/small/tira_zelyonoe_colnce.png'
import astra_portal_image from '../images/astra_portal.png'
import metatrone_cube_image from '../images/metatrone_cube.png'
import om_friendsheep_image from '../images/om_friendship.png'
import om_friendsheep_center_image from '../images/om_friendship_center.png'
import anahata_mandala_image_small from '../images/small/anahata.png'
import circus_mandala_image_small from '../images/small/circus.png'
import sun_dragonflies_small from '../images/small/sun_dragonflies.png'
import sun_dragonflies_part_small from '../images/small/sun_dragonflies_part.png'
import space_avoska_image_small from '../images/small/space_avoska.png'
import space_avoska_image from '../images/space_avoska.png'
import astra_portal_image_small from '../images/small/astra_portal.png'
import metatrone_cube_image_small from '../images/small/metatrone_cube.png'
import om_friendsheep_image_small from '../images/small/om_friendship.png'
import sun_dragonflies from '../images/sun_dragonflies.png'
import sun_dragonflies_part from '../images/sun_dragonflies_part.png'
import square_15x15_4 from '../images/square_15x15_4.png'
import square_15x15_4_small from '../images/small/square_15x15_4.png'
import square_15x15_4_center from '../images/square_15x15_4_center.png'
import square_15x15_1 from '../images/square_15x15_1.jpg'
import square_15x15_1_small from '../images/small/square_15x15_1.png'
import square_15x15_1_center from '../images/square_15x15_1_center.png'

export const stickers = {
  anahata: {
    image_url: anahata_mandala_image,
    image_small_url: anahata_mandala_image_small,
    center_image_url_backup: anahata_mandala_center_image,
    name: 'Анахата'
  },
  astra_portal: {
    image_url: astra_portal_image,
    image_small_url: astra_portal_image_small,
    name: 'Астра Портал'
  },
  om_friendsheep: {
    image_url: om_friendsheep_image,
    image_small_url: om_friendsheep_image_small,
    center_image_url: om_friendsheep_center_image,
    name: 'Ом Дружбы'
  },
  tira: {
    image_url: tira_image,
    image_small_url: tira_image_small,
    name: 'Тира Зелёное Солнце'
  },
  circus: {
    image_url: circus_mandala_image,
    image_small_url: circus_mandala_image_small,
    default_effect_index: 0,
    name: 'Цирк'
  },
  sun_dragonflies: {
    image_url: sun_dragonflies,
    image_small_url: sun_dragonflies_small,
    default_effect_index: 1,
    name: 'Солнце Стрекоз'
  },
  sun_dragonflies_part: {
    image_url: sun_dragonflies_part,
    image_small_url: sun_dragonflies_part_small,
    name: 'Танец Стрекоз',
  },
  metatrone_cube: {
    image_url: metatrone_cube_image,
    image_small_url: metatrone_cube_image_small,
    default_effect_index: 1,
    name: 'Куб Метатрона'
  },
  space_avoska: {
    image_url: space_avoska_image,
    image_small_url: space_avoska_image_small,
    default_effect_index: 0,
    name: 'Космическая Авоська'
  },
  square_15x15_1: {
    image_url: square_15x15_1,
    image_small_url: square_15x15_1_small,
    name: 'Квадрат 15x15 №1',
    center_image_url: square_15x15_1_center,
    default_effect_index: 0,
    square: true
  },
  square_15x15_4: {
    image_url: square_15x15_4,
    image_small_url: square_15x15_4_small,
    name: 'Квадрат 15x15 №4',
    center_image_url: square_15x15_4_center,
    default_effect_index: 0,
    square: true
  },
}
