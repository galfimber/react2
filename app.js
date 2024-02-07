const Logo = (props) => <div className={props.class}></div>;
const Tel = (props) => (
  <div className={props.class}>
    <a href="tel:7(962)556-1234">+7(962)556-1234</a>
  </div>
);
const bgImg1 = {
  backgroundImage: "url(./images/1.svg)",
};
const bgImg2 = {
  backgroundImage: "url(./images/2.svg)",
};
const bgImg3 = {
  backgroundImage: "url(./images/3.svg)",
};
const bgImg4 = {
  backgroundImage: "url(./images/4.svg)",
};
const Btn = (props) => (
  <button className={props.class}>
    <span>{props.text}</span>
  </button>
);
const FeaturesSliderItem = (props) => (
  <div className="features-slider_item">
    <div className="features-img" style={props.bg}></div>
    <div className="features-feature">Первое целевое преимущество</div>
  </div>
);
const SliderBtn = (props) => (
  <button className={props.class}>
    <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z"></path>
    </svg>
  </button>
);
const Input = (props) => (
  <input type={props.type} placeholder={props.placeholder}></input>
);

class Render extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="wrapper">
            <div className="header">
              <a href="#">
                <Logo class="header-logo" />
              </a>
              <a href="tel:888" className="header-phone"></a>
              <Tel class="header-phonelink" />
            </div>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <div className="main">
              <h1 className="main-head">
                Заголовок c уникальным торговым предложение по системе 4U
              </h1>
              <div className="main-small">
                Описания предлжения компании. Сайт рыбатекст поможет дизайнеру,
                верстальщику, вебмастеру сгенерировать несколько абзацев более.
              </div>
              <Btn class="btn main-btn" text="Подробнее" />
            </div>
          </div>
        </main>
        <section className="features">
          <div className="wrapper">
            <div className="features-wrapper">
              <h2 className="features-head">
                Уникальный заголовок для преимущества компании
              </h2>
              <div className="features-subhead">О нас</div>
              <div className="features-description">
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать несколько абзацев более менее осмысленного текста
                рыбы на русском языке, а начинающему оратору отточить.
              </div>
              <div className="features-slider">
                <div className="features-slider_items">
                  <FeaturesSliderItem bg={bgImg1} />
                  <FeaturesSliderItem bg={bgImg2} />
                  <FeaturesSliderItem bg={bgImg3} />
                  <FeaturesSliderItem bg={bgImg4} />
                </div>
                <SliderBtn class="features-slider-arrow features-slider-prev" />
                <SliderBtn class="features-slider-arrow features-slider-next" />
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="wrapper">
            <div className="contact-wrapper">
              <h2 className="contact-title">Остались вопросы?</h2>
              <div className="contact-description">
                Оставьте номер телефона, и мы перезвоним вам
              </div>
              <form action="../mailer.smart.php" className="contact-form">
                <Input type="text" placeholder="Ваше имя" />
                <Input type="tel" placeholder="Телефон" />
                <Input type="email" placeholder="E-mail" />

                <Btn class="btn contact-btn" text="Позвоните мне" />
              </form>
              <div className="contact-personal">
                Я даю своё <a href="#">согласие</a> на обработку моих
                персональных данных.
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer">
            <Logo class="footer-logo" />

            <div className="footer-company">
              <span>© 2020 XXXcompany. Все права защищены.</span>
            </div>
            <a href="tel:888" className="footer-phone"></a>
            <div className="footer-websurfer">
              <span className="footer-websurfer_build">Сделано</span>
              <a href="#">Ваше имя</a>
            </div>
            <Tel class="footer-phonelink" />
          </div>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<Render />, document.getElementById("root"));
