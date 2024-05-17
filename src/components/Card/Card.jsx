import './Card.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom";

const Card = ({price, name, img, id}) => {
  
  const navigate = useNavigate()

  const itemPageRouter = (proId) => {
      navigate('/product-page/' + proId)
  }

  return (
    <div className='card'>
        <div className="card__center">
              <img onClick={() => itemPageRouter(id)} src={img} alt="" />
        </div>
        <div className="card__footer">
            <h1>{name}</h1>
            <div className="card__footer--cart">
              <p>${price}.00</p>
              <AddShoppingCartIcon className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Card