import four_rooms_deck_img_01 from "../assets/Images/4_rooms_deck/img_01_4_rooms_with_deck.jpeg";
import four_rooms_deck_img_02 from "../assets/Images/4_rooms_deck/img_02_4_rooms_with_deck.jpeg";
import four_rooms_deck_img_03 from "../assets/Images/4_rooms_deck/img_03_4_rooms_with_deck.jpeg";
import four_rooms_deck_img_04 from "../assets/Images/4_rooms_deck/img_04_4_rooms_with_deck.jpeg";
import four_rooms_deck_img_05 from "../assets/Images/4_rooms_deck/img_05_4_rooms_with_deck.jpeg";
import four_rooms_deck_img_06 from "../assets/Images/4_rooms_deck/img_06_4_rooms_with_deck.jpeg";
import four_rooms_deck_img_07 from "../assets/Images/4_rooms_deck/img_07_4_rooms_with_deck.jpeg";

import three_rooms_img_01 from "../assets/Images/3_rooms/img_01_3_rooms.jpg";
import three_rooms_img_02 from "../assets/Images/3_rooms/img_02_3_rooms.png";
import three_rooms_img_03 from "../assets/Images/3_rooms/img_03_3_rooms.JPG";
import three_rooms_img_04 from "../assets/Images/3_rooms/img_04_3_rooms.JPG";
import three_rooms_img_05 from "../assets/Images/3_rooms/img_05_3_rooms.JPG";
import three_rooms_img_06 from "../assets/Images/3_rooms/img_06_3_rooms.JPG";

import studio_img_01 from "../assets/Images/studio/img_studio_01.jpg";
import studio_img_02 from "../assets/Images/studio/img_studio_02.png";
import studio_img_03 from "../assets/Images/studio/img_studio_03.JPG";
import studio_img_04 from "../assets/Images/studio/img_studio_04.JPG";
import studio_img_05 from "../assets/Images/studio/img_studio_05.JPG";
import studio_img_06 from "../assets/Images/studio/img_studio_06.JPG";
import studio_img_07 from "../assets/Images/studio/img_studio_07.JPG";

import three_rooms_yard_img_01 from "../assets/Images/4_rooms_yard/img_01_3_rooms_yard.JPG";
import three_rooms_yard_img_02 from "../assets/Images/4_rooms_yard/img_02_3_rooms_yard.png";
import three_rooms_yard_img_03 from "../assets/Images/4_rooms_yard/img_03_3_rooms_yard.JPG";
import three_rooms_yard_img_04 from "../assets/Images/4_rooms_yard/img_04_3_rooms_yard.JPG";
import three_rooms_yard_img_05 from "../assets/Images/4_rooms_yard/img_05_3_rooms_yard.JPG";
import three_rooms_yard_img_06 from "../assets/Images/4_rooms_yard/img_06_3_rooms_yard.JPG";
import three_rooms_yard_img_07 from "../assets/Images/4_rooms_yard/img_07_3_rooms_yard.JPG";

import ap_04_rooms_01 from "./ap_04_rooms_img_01.jpg";
// import ap_03_rooms_01 from "./ap_03_rooms_img_01.jpg";
import ap_studio_01 from "./ap_studio_img_01.jpg";

const apartments = [
  {
    name: "Apartamento 4 quartos com deck",
    images: [four_rooms_deck_img_01, four_rooms_deck_img_02,four_rooms_deck_img_03, four_rooms_deck_img_04, four_rooms_deck_img_05, four_rooms_deck_img_06, four_rooms_deck_img_07],
    info: [
      {
        rooms:
          "4 quartos com cama casal ( 3 com ar condicionado e 2 com ventilador)",
        wiFi: "WiFi",
        livingRoom: "sala com smart TV",
        bathroom: "2 banheiros",
        privateArea: "area de churrasqueira privada com vista ao mar",
        grill: "Churrasqueira",
        kitchen: "Cozinha completa",
        quantityOfPeaple: "Capacidade para até 10 pessoas",
        fullInfo:
          "Nosso apartamento de 5 quartos tem Wi-Fi, sala com smart TV, 2 banheiros, area de churrasqueira privada com vista ao mar, 5 quartos com cama casal ( 3 com ar condicionado e 2 com ventilador) e cozinha completa. Capacidade para até 10 pessoas.",
      },
    ],
  },
  {
    name: "Apartamento 4 quartos com quintal",
    images: [three_rooms_yard_img_01, three_rooms_yard_img_02, three_rooms_yard_img_03, three_rooms_yard_img_04, three_rooms_yard_img_05, three_rooms_yard_img_06, three_rooms_yard_img_07],
    info: [
      {
        rooms:
          "4 quartos (2 casal com ar condicionado, 1 quarto casal com ventilador e 1 quarto solteiro com ventilador)",
        wiFi: "tem WiFi",
        livingRoom: "sala com smart TV",
        bathroom: "2 banheiro",
        privateArea: "Sacada com vista ao mar",
        grill: "Churrasqueira",
        kitchen: "cozinha completa",
        quantityOfPeaple: "Capacidade para até 8 pessoas",
        fullInfo:
          "Nosso apartamento de 4 quartos tem Wi-Fi, sala com smart TV, 2 banheiros, area de churrasqueira privada com vista ao mar, cozinha completa, 4 quartos (2 casal com ar condicionado, 1 casal com ventilador e 1 solteiro com ventilador) e cozinha completa. Capacidade para até 8 pessoas.",
      },
    ],
  },
  {
    name: "Apartamento 3 quartos",
    images: [three_rooms_img_01, three_rooms_img_02, three_rooms_img_03, three_rooms_img_04, three_rooms_img_05, three_rooms_img_06],
    info: [
      {
        rooms:
          " 3 quartos com ar condicionado ( 2 com cama casal, 1 com cama casal e beliche)",
        wiFi: "WiFi",
        livingRoom: "Sala smart TV",
        bathroom: "1 banheiro",
        privateArea: "se localiza a 20 metros da praia  (sem vista ao mar)",
        grill: "Churrasqueira",
        kitchen: "cozinha completa",
        quantityOfPeaple: "Capacidade para entre 6 a 8 pessoas",
        fullInfo:
          "Nosso apartamento de 3 quartos tem Wi-Fi, sala com smart TV, 1 banheiro, churrasqueira portátil, sacada com vista ao mar, 3 quartos com ar condicionado ( 2 com cama casal e 1 com cama casal e beliche) e cozinha completa. Capacidade de 6 a 8 pessoas.",
      },
    ],
  },
  {
    name: "Apartamento Studio",
    images: [studio_img_01, studio_img_02, studio_img_03, studio_img_04, studio_img_05, studio_img_06, studio_img_07],
    info: [
      {
        rooms: "Um só ambiente",
        wiFi: "WiFi",
        livingRoom: "Smart TV com Netflix",
        bathroom: "1 banheiro",
        privateArea: "Localiza-se a 20 metros da praia (sem vista ao mar)",
        grill: "Churrasqueira",
        kitchen: "Cozinha completa",
        quantityOfPeaple: "Capacidade para até 4 pessoas",
        fullInfo:
          "Nosso apartamento studio tem um só ambiente, se localiza a 20 metros da praia (sem vista ao mar) e possui 1 cama casal, 1 sofa cama casal, Wi-Fi, smart TV com Netflix, ar condicionado, 1 banheiro, churrasqueira e cozinha completa. Capacidade para até 4 pessoas",
      },
    ],
  },
];

export default apartments;
