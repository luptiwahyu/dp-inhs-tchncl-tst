export function numeric(value: number, decimal?: boolean): string {
  return new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: decimal ? 2 : 0,
  }).format(value)
}
