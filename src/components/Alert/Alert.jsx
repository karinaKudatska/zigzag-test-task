import React from 'react';
import './Alert.scss';

const Alert = ({ paymentMethod, paymentSum, bonus }) => {
  return (
    <div className="alert">
      <p>Выбранный способ оплаты: {paymentMethod}</p>
      <p>Сумма к пополнению: ${paymentSum}</p>
      <p>Бонус: ${bonus}</p>
    </div>
  )
}

export default Alert;