const parseMoney = (num: number) => {
  if (num === 0) return '0,00'

  const str = num.toString().replace('.', ',')
  const [int, dec] = str.split(',')
  const decimal = dec ? dec : '00'

  const thousands = int.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  // Make decimal always have 2 digits and if there is more than 2 digits, remove the last one

  if (decimal.length > 2) return `${thousands},${decimal.slice(0, 2)}`

  if (decimal.length === 1) return `${thousands},${decimal}0`

  return `${thousands},${decimal}`
}

export default parseMoney
