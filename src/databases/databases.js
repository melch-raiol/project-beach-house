import ap_05_rooms_01 from "./ap_05_rooms_img_01.jpg";
import ap_04_rooms_01 from "./ap_04_rooms_img_01.jpg";
import ap_03_rooms_01 from "./ap_03_rooms_img_01.jpg";
import ap_studio_01 from "./ap_studio_img_01.jpg";

const apartments = [
  {
    name: "Apartamento 5 quartos",
    images: [ap_05_rooms_01, ap_05_rooms_01, ap_05_rooms_01, ap_05_rooms_01],
    info: [
      {
        rooms:
          "5 quartos com cama casal ( 3 com ar condicionado e 2 com ventilador)",
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
    name: "Apartamento 4 quartos",
    images: [ap_04_rooms_01, ap_04_rooms_01, ap_04_rooms_01, ap_04_rooms_01],
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
    images: [ap_03_rooms_01, ap_03_rooms_01, ap_03_rooms_01, ap_03_rooms_01],
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
    images: [ap_studio_01, ap_studio_01, ap_studio_01, ap_studio_01],
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
