import React, { useState } from 'react';
import Alert from '../Alert/Alert';
import Timer from '../Timer/Timer';
import './Window.scss';
import close from '../../images/close.png';
import card from '../../images/card.png';
import deposits from '../../../public/deposits/deposits.json';

const Window = ({ closeWindow }) => {
  const [paymentSum, setPaymentSum] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [activeBlock, setActiveBlock] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [alert, setAlert] = useState(false);

  const allSum = paymentSum + bonus;

  const openAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  }

  return (
    <div className="window">
      <div className="window__content">
        <div className="window__top-element">+100%</div>

        <button 
          className="window__close-button"
          src={close}
          onClick={closeWindow}
        />

        <Timer 
          closeWindow={closeWindow}
        />

        <h1 className="window__title">Увеличьте свой депозит!</h1>

        <div className="window__payment">
          <img src={card}/>
          <select className="window__select" onChange={event => setPaymentMethod(event.target.value)}>
            <option value="">Выберите способ оплаты</option>
            <option value="Банковская карта">Банковская карта</option>
            <option value="Биткоин">Биткоин</option>
            <option value="Выставить счет">Выставить счет</option>
          </select>
        </div>

        <div className="window__main">
          {deposits.map(({ deposit, id }) => (
            <div 
              key={id}
              id={id}
              className={activeBlock === id ? "window__main-block active" : "window__main-block" }
              onClick={() => {
                setPaymentSum(deposit),
                setBonus(deposit*2)
                setActiveBlock(id)
              }}
            >
              <div className="window__deposit">
                <p className="window__deposit-text">Пополнить&nbsp;на</p>
                <span className="window__money">${deposit}</span>
              </div>
              <div className="window__bonus">
                <p className="window__deposit-text">Получить</p>
                <span className="window__money">${deposit*2}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="window__sum-text">
          <span className="window__sum">${allSum},00 </span>
           будет зачислено вам на счет
        </p>
        <button 
          className="window__button"
          onClick={openAlert}
        >Пополнить</button>
        {alert && (
          <Alert 
            paymentMethod={paymentMethod}
            paymentSum={paymentSum}
            bonus={bonus}
          />
        )}
        <p className="window__footer-text">При пополнении счета с банковской карты списание средств происходит по курсу банка клиента</p>
        <a href="#" className="window__link">Подробнее</a>
      </div>
    </div>
  )
}

export default Window;
