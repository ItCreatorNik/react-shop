export const BasketItem = (props) => {
  const { id, name, quantity, price, removeFromBasket = Function.prototype, decQuantity=Function.prototype,incQuantity=Function.prototype } = props;
  return (<li className="collection-item ">
      {name} <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i> x {quantity}{" "}
      <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i> = {price * quantity } грн
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
        </span>
  </li>)
};
