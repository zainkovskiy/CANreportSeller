import React from "react";
import './Realtor.scss';

export const Realtor = ({ name, rieltorNumber }) => {
  return (
    <div className="realtor">
      <div className="realtor__wrap">
        <span className="text realtor__weight realtor__title">С заботой о Вас</span>
        <div className="realtor-card">
          <img className="realtor-card__img" 
          src="https://crm.centralnoe.ru/upload/resize_cache/main/205/phckvamomx03b70dtmg1dr8r9jsrt8pa/212_212_1/%D1%84%D0%BE%D1%82%D0%BE%20%D1%8F.png" 
          alt="realtor" />
          <div className="realtor-card__wrap">
            <span className="text realtor-card__text realtor__weight">
              {name}
            </span>
            <a className="text realtor-card__text realtor-card__link" href={`tel:${rieltorNumber}`}>
              {rieltorNumber}
            </a>
          </div>
        </div>
      </div>
      <div className="realtor__wrap">
        <span className="text realtor__weight realtor__title">Комментарий агента</span>
        <p className="text realtor__comment">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi blanditiis mollitia inventore deserunt assumenda quae alias! Porro culpa ipsum, voluptas delectus accusantium eligendi placeat reiciendis fugiat, maiores cupiditate reprehenderit deserunt!
          Dolor at consequuntur quia adipisci maxime. Ad, nobis debitis vitae veniam dolore quasi velit nesciunt assumenda architecto accusantium possimus officia modi, quos id consequuntur? Minus, eveniet nulla? Aperiam, aut ex.
          Consequuntur officia a distinctio temporibus magni suscipit ad tempore, mollitia aut eum nostrum? Nihil, accusantium. Sit modi maiores, officia accusantium quam deserunt ipsa, magnam eum quia optio rem unde facilis.</p>
      </div>
    </div>
  )
}