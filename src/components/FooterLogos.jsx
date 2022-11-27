
export const FooterLogos = ({logoImg,logoName}) => {
  return (
    <div className="h-8 group">
    <a href="#">
        <img src={logoImg} alt={logoName} className='h-6'/>
    </a>
</div>
  )
}
