const parseMoney = (num: number) => {
  return num
    .toString()
    .replace(/\./g, ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export default parseMoney
