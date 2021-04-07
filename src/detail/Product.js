import React from 'react';
import './Product.css';
import { useStateValue } from '../StateProvider/StateProvider';
import { useHistory} from 'react-router-dom';
import { FaComment, FaShoppingCart } from 'react-icons/fa';
import { ImageData } from '../axios/urlData';

function Product(props) {
  let image = ImageData.image1;

  //dispatch -> how we manipulate with data
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: props.id,
        title: props.title,
        image: image + props.id,
        description: props.description,
        price: props.price,
      },
    });
  };

  let history = useHistory();

  return (
    <div className="product2">
      <img
        className="product2__img"
        src={image + props.id}
        alt=""
        onClick={() => {
          history.push(`/detail/${props.id}`);
        }}
      />

      <div
        className="product2__info"
        onClick={() => {
          history.push(`/detail/${props.id}`);
        }}
      >
        <br />
        <p className="product2__name">{props.title}</p>
        <div className="price_status">
          {' '}
          <strong>₩{new Intl.NumberFormat().format(props.price)}</strong>
          <span className="product2__status">{props.status}</span>
        </div>
        <p className="product2__price">
          <small>{props.description}</small>
        </p>
        <div className="icons">
          <div className="icons1" onClick={addToBasket}>
            <FaShoppingCart className="product__cartIcon" />
          </div>
          <div className="tok">
            <FaComment style={{ color: 'rgba(230, 125, 122, 0.7)' }} />
            <small> &nbsp; ({props.comment})</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
