import { LineaTicket, TipoIva, porcentajesIva } from "./modelo";

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

interface ResultadoLineaTicket {
  nombre: string;
  cantidad: number;
  precioSinIva: number;
  tipoIva: TipoIva;
  precioConIva: number;
}

interface ResultadoTotalTicket {
  totalSinIva: number;
  totalConIva: number;
  totalIva: number;
}

interface TotalPorTipoIva {
  tipoIva: TipoIva;
  cuantia: number;
}

interface TicketFinal {
  lineas: ResultadoLineaTicket[];
  total: ResultadoTotalTicket;
  desgloseIva: TotalPorTipoIva[];
}

export const calcularIvaProducto = (precio: number, tipoIva: TipoIva) => {
  const iva = porcentajesIva(tipoIva);
  return precio * iva;
};

const calcularLineaTicket = (
  producto: string,
  precio: number,
  cantidad: number,
  tipoIva: TipoIva
): ResultadoLineaTicket[] => {
  let lineaTicket: ResultadoLineaTicket[] = [];
  const productoNombre = producto;
  const precioSinIva = precio * cantidad;
  const Iva = tipoIva;
  const precioConIva = calcularIvaProducto(precioSinIva, Iva);

  lineaTicket.push({
    nombre: productoNombre,
    precioSinIva: precioSinIva,
    tipoIva: Iva,
    cantidad: cantidad,
    precioConIva: precioConIva,
  });

  return lineaTicket;
};

const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal[] => {
  let ticketFinal: TicketFinal[] = [];

  for (let i = 0; i < lineasTicket.length; i++) {
    if (!lineasTicket) {
      throw "El ticket está vacío";
    }
    const linea = lineasTicket[i];
  }
  return;
};
