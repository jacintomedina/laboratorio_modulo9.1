import {
  LineaTicket,
  porcentajesIva,
  ResultadoLineaTicket,
  TotalPorTipoIva,
} from "./modelo";

export const obtenerTotalSinIva = (lineasTicket: LineaTicket[]): number => {
  const totalSinIva = lineasTicket.reduce(
    (acc: number, lineaTicket: LineaTicket) => {
      const subtotal = lineaTicket.cantidad * lineaTicket.producto.precio;
      acc = acc + subtotal;
      // return acc += subtotal
      return acc;
    },
    0
  );

  return totalSinIva;
};

export const obtenerTotalIva = (lineasTicket: LineaTicket[]): number => {
  const totalIva = lineasTicket.reduce(
    (acc: number, lineaTicket: LineaTicket) => {
      const subtotal = lineaTicket.cantidad * lineaTicket.producto.precio;
      const iva = subtotal * porcentajesIva(lineaTicket.producto.tipoIva);
      acc = acc + iva;
      return acc;
    },
    0
  );

  return totalIva;
};

export const obtenerDesgloseIva = (
  lineasTicket: LineaTicket[]
): TotalPorTipoIva[] => {
  /* SOLUCIÓN ALTERNATIVA

    const desgloseIva: TotalPorTipoIva[] = listaTiposIva.map((tipoIva) => {

    const productosFiltradosPorTipoIva = lineasTicket.filter((lineaTicket) => lineaTicket.producto.tipoIva === tipoIva);
    return {
      cuantia: obtenerTotalIva(productosFiltradosPorTipoIva),
      tipoIva: tipoIva
    };
  })

  return desgloseIva.filter(producto => producto.cuantia > 0);
  */

  const desgloseIva = lineasTicket.reduce((acc: TotalPorTipoIva[], linea) => {
    const { tipoIva, precio } = linea.producto;
    const cantidad = linea.cantidad;
    const porcentaje = porcentajesIva(tipoIva);

    const ivaLinea = precio * cantidad * porcentaje;

    const ivaExistente = acc.find((item) => item.tipoIva === tipoIva);

    if (ivaExistente) {
      ivaExistente.cuantia += ivaLinea;
    } else {
      acc.push({ tipoIva: tipoIva, cuantia: ivaLinea });
    }
    return acc;
  }, []);

  desgloseIva.forEach((item) => {
    item.cuantia = parseInt(item.cuantia.toFixed(2));
  });

  return desgloseIva;
};

export const obtenerLineaTicket = (
  lineasTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  const lineaTicket = lineasTicket.map((linea: LineaTicket) => {
    const productoNombre = linea.producto.nombre;
    const cantidad = linea.cantidad;
    const precioSinIva = linea.producto.precio * cantidad;
    const tipoIva = linea.producto.tipoIva;
    const precioConIva =
      precioSinIva * porcentajesIva(linea.producto.tipoIva) + precioSinIva;

    return {
      nombre: productoNombre,
      cantidad: cantidad,
      precioSinIva: precioSinIva,
      tipoIva: tipoIva,
      precioConIva: precioConIva,
    };
  });

  return lineaTicket;
};
