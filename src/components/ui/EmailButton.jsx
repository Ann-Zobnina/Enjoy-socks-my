import React from 'react';
import emailjs from 'emailjs-com';

export default function EmailButton() {
  const sendEmail = async () => {
    try {
      const params = {
        userEmail: 'info@enjoysocks.ru', // user store mail
        storeEmail: 'info@enjoysocks.ru', // our store mail
        subject: 'Спасибо за покупку в магазине Enjoy Socks',
        message: 'Здравствуйте //userName вы преобрели у нас самые лучшие носки в Москве!',
      };
      const response = await emailjs.send('service_id', 'your_template_id', params, 'your_user_id');
      console.log('Отправка прошла успешно', response);
    } catch (error) {
      console.error('Ошибка при отправке', error);
    }
  };
  return (
    <button onClick={sendEmail}>SEND EMAIL</button>
  );
}
