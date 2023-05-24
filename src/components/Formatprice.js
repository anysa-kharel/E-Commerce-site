

const Formatprice = ({price}) => {
  return Intl.NumberFormat("ne-NP",{
   style: "currency",
   currency: "NPR",
   maximumFractionDigits: 2,
  }).format(price/100).replace(/NPR/g, 'रू');
}

export default Formatprice
