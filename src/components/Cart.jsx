export const Cart = (props) => {
    const {quantity = 0, handleBasketShow=Function.prototype}=props;

    return (
        <div onClick={handleBasketShow} className="cart red darken-1 white-text">
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    )

}