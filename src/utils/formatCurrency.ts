export function formatCurrency(valor: number): string {
    return valor.toLocaleString("pt-AO", {
        style: "currency",
        currency: "AOA",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}
