import "./style.css";
import { LineaTicket, TicketFinal } from "./modelo";
import {
  obtenerTotalSinIva,
  obtenerTotalIva,
  obtenerLineaTicket,
  obtenerDesgloseIva,
} from "./motor";

const productos: LineaTicket[] = [
  {
    producto: {
      nombre: "Legumbres",
      precio: 2,
      tipoIva: "general",
    },
    cantidad: 2,
  },
  {
    producto: {
      nombre: "Perfume",
      precio: 20,
      tipoIva: "general",
    },
    cantidad: 3,
  },
  {
    producto: {
      nombre: "Leche",
      precio: 1,
      tipoIva: "superreducidoC",
    },
    cantidad: 6,
  },
  {
    producto: {
      nombre: "Lasaña",
      precio: 5,
      tipoIva: "superreducidoA",
    },
    cantidad: 1,
  },
];

const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  const totalSinIva = obtenerTotalSinIva(lineasTicket);
  const totalIva = obtenerTotalIva(lineasTicket);
  const totalLineas = obtenerLineaTicket(lineasTicket);
  const totalDesgloseIva = obtenerDesgloseIva(lineasTicket);

  return {
    total: {
      totalConIva: totalSinIva + totalIva,
      totalIva: totalIva,
      totalSinIva: totalSinIva,
    },
    desgloseIva: totalDesgloseIva,
    lineas: totalLineas,
  };
};

console.log(calculaTicket(productos));
