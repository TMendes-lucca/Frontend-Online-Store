import React, { Component } from 'react';

class CardCart extends Component {
  state = {
    checkQuantity: false,
  };

  componentDidMount() {
    this.checkQuantity();
  }

  checkQuantity = () => {
    const { cart } = this.props;
    cart.forEach((item) => {
      if (item.quantity >= item.availableQuantity) {
        this.setState({ checkQuantity: true });
      } else {
        this.setState({ checkQuantity: false });
      }
    });
  };

  render() {
    const {
      thumbnail,
      title,
      id,
      handleRemove,
      quantity,
      handleDecrement,
      handleIncrement,
      availableQuantity,
      price,
    } = this.props;

    const { checkQuantity } = this.state;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h2 data-testid="shopping-cart-product-name">{title}</h2>
        <button
          id={ id }
          type="button"
          data-testid="remove-product"
          onClick={ handleRemove }
        >
          Remover
        </button>
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {`Quantidade: ${quantity}`}
        </p>
        <button
          id={ id }
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ handleDecrement }
        >
          -
        </button>
        <button
          id={ id }
          type="button"
          data-testid="product-increase-quantity"
          onClick={ handleIncrement }
          disabled={ checkQuantity }
        >
          +
        </button>
        <p>{`Preço: ${price}`}</p>
      </div>
    );
  }
}

export default CardCart;
