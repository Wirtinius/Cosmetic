import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './index.css';

export function About() {
  return (
    <div className="about-container">
      <h1>О Нас</h1>
      <section>
        <h2>О нашей косметике</h2>
        <p>Добро пожаловать в мир красоты и ухода! Наша компания специализируется на производстве высококачественной косметики, которая помогает вам выглядеть и чувствовать себя великолепно. Мы используем только натуральные ингредиенты и инновационные технологии, чтобы предложить вам лучшие продукты для ухода за кожей и волосами.</p>
      </section>
      <section>
        <h2>Контакты</h2>
        <p>Телефон: +7 (123) 456-78-90</p>
        <p>Email: info@cosmetics.com</p>
        <p>Адрес: ул. Примерная, д. 123, г. Алматы, Казахстан</p>
      </section>
      <section>
        <h2>Наши достижения</h2>
        <ul>
          <li>Лауреаты премии "Лучшая косметическая компания года" 2022</li>
          <li>Сертифицированы международными стандартами качества</li>
          <li>Более 100,000 довольных клиентов по всему миру</li>
        </ul>
      </section>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
