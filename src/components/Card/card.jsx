import './card.css'

function Card(props) {

  return (
    <>   
      <div className={props.className}>
            <img src={props.src} className={props.imgStyle} />
            <div className={props.textStyle}>{props.text}</div>
      </div> 
    </>
  )
}

export default Card
