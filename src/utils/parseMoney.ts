const parseMoney = (num: number) => {
  if (num === 0) return '0,00'

  const str = num.toString().replace('.', ',')
  const [int, dec] = str.split(',')
  const decmial = dec ? dec : '00'

  const thousands = int.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `${thousands},${decmial}`
}

export default parseMoney
