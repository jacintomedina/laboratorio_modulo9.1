import { calcularIvaProducto } from "./motor";
import { LineaTicket, Producto, TipoIva } from "./modelo";

describe("calcularIvaProducto", () => {
  it("debería calcular el IVA de cada producto correctamente", () => {
    // Arrange
    const precio: number = 58;
    const tipoIva: TipoIva = "superreducidoB";
    const resultadoEsperado = 60.32;

    // Act
    const resultado = calcularIvaProducto(precio, tipoIva);

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
