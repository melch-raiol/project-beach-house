import img1 from "./ap_05_rooms_img_01.jpg";
import img2 from "./ap_04_rooms_img_01.jpg";
import img3 from "./ap_03_rooms_img_01.jpg";
import img4 from "./ap_studio_img_01.jpg";

const apartments = [
  {
    name: "Apartamento 5 quartos",
    image: img1,
    info: [
      {
        rooms:
          "5 quartos com cama casal ( 3 com ar condicionado e 2 com ventilador)",
      },
      { wiFi: "tem WiFi" },
      { livingRoom: "sala com smart TV" },
      { bathroom: "2 banheiros" },
      { privateArea: "area de churrasqueira privada com vista ao mar" },
      { kitchen: "cozinha completa" },
      { quantityOfPeaple: "Capacidade para até 10 pessoas" },
      {
        fullInfo:
          "Nosso apartamento de 5 quartos tem Wi-Fi, sala com smart TV, 2 banheiros, area de churrasqueira privada com vista ao mar, 5 quartos com cama casal ( 3 com ar condicionado e 2 com ventilador) e cozinha completa. Capacidade para até 10 pessoas.",
      },
    ],
  },
  {
    name: "Apartamento 4 quartos",
    image: img2,
    info: [
      {
        rooms:
          "4 quartos (2 casal com ar condicionado, 1 quarto casal com ventilador e 1 quarto solteiro com ventilador)",
      },
      { wiFi: "tem WiFi" },
      { livingRoom: "sala com smart TV" },
      { bathroom: "2 banheiro" },
      { privateArea: "churrasqueira portátil, sacada com vista ao mar" },
      { kitchen: "cozinha completa" },
      { quantityOfPeaple: "Capacidade para até 8 pessoas" },
      {
        fullInfo:
          "Nosso apartamento de 4 quartos tem Wi-Fi, sala com smart TV, 2 banheiros, area de churrasqueira privada com vista ao mar, cozinha completa, 4 quartos (2 casal com ar condicionado, 1 casal com ventilador e 1 solteiro com ventilador) e cozinha completa. Capacidade para até 8 pessoas.",
      },
    ],
  },
  {
    name: "Apartamento 3 quartos",
    image: img3,
    info: [
      { rooms: "Possui 3 quartos" },
      { wiFi: "tem WiFi" },
      { livingRoom: "Sala smart TV" },
      { bathroom: "1 banheiro" },
      {
        privateArea:
          "se localiza a 20 metros da praia com churrasqueira (sem vista ao mar)",
      },
      {
        rooms:
          " 3 quartos com ar condicionado ( 2 com cama casal, 1 com cama casal e beliche)",
      },
      { kitchen: "cozinha completa" },
      { quantityOfPeaple: "Capacidade para até 6 a 8 pessoas" },
      {
        fullInfo:
          "Nosso apartamento de 3 quartos tem Wi-Fi, sala com smart TV, 1 banheiro, churrasqueira portátil, sacada com vista ao mar, 3 quartos com ar condicionado ( 2 com cama casal e 1 com cama casal e beliche) e cozinha completa. Capacidade de 6 a 8 pessoas.",
      },
    ],
  },
  {
    name: "Studio",
    image: img4,
    info: [
      {
        rooms: "um só ambiente",
        wiFi: "tem WiFi",
        livingRoom: "smart TV com Netflix",
        bathroom: "1 banheiro",
        privateArea:
          "se localiza a 20 metros da praia com churrasqueira (sem vista ao mar)",
        kitchen: "cozinha completa",
        quantityOfPeaple: "Capacidade para até 4 pessoas",
        fullInfo:
          "Nosso apartamento studio tem um só ambiente, se localiza a 20 metros da praia (sem vista ao mar) e possui 1 cama casal, 1 sofa cama casal, Wi-Fi, smart TV com Netflix, ar condicionado, 1 banheiro, churrasqueira e cozinha completa. Capacidade para até 4 pessoas",
      },
    ],
  },
];

export default apartments;
