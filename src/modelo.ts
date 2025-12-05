export type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva";

export const porcentajesIva = (tipoIva: TipoIva): number => {
  switch (tipoIva) {
    case "general":
      return 1.21;
    case "reducido":
      return 1.1;
    case "superreducidoA":
      return 1.05;
    case "superreducidoB":
      return 1.04;
    case "superreducidoC":
      return 0;
    case "sinIva":
      return 0;
    default:
      throw "Tipo de IVA no válido";
  }
};

export interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}

export interface LineaTicket {
  producto: Producto;
  cantidad: number;
}
