import Card from "./components/Card/card";
import faceImg from "./assets/faceImg.svg";
import "./App.css";

function App() {
  return (
    <>
      <Card src={faceImg} className="mainCard" imgStyle="face" textStyle='mainCardText' text="Мальцев Никита Юрьевич" />
      <div className="competenceCards">
        <Card src={faceImg} className='mediumCard' imgStyle="mediumCardImg" textStyle='mediumCardText' text="Node Js" />
        <Card src={faceImg} className='mediumCard' imgStyle="mediumCardImg" textStyle='mediumCardText' text="JavaScript" />
        <Card src={faceImg} className='mediumCard' imgStyle="mediumCardImg" textStyle='mediumCardText' text="TypeScript" />
        <Card src={faceImg} className='mediumCard' imgStyle="mediumCardImg" textStyle='mediumCardText' text="Python" />
      </div>
      <div className="whantToLearnCards">
        <Card className='smallCard' textStyle='smallCardText' text="Алгоритмические навыки" />
        <Card className='smallCard' textStyle='smallCardText' text="Умение работать с базами данных" />
        <Card className='smallCard' textStyle='smallCardText' text="Умение работать с веб-технологиями" />
        <Card className='smallCard' textStyle='smallCardText' text="Тестирование и отладка" />
        <Card className='smallCard' textStyle='smallCardText' text="Опыт работы с инструментами разработки" />
        <Card className='smallCard' textStyle='smallCardText' text="Опыт работы с операционными системами" />
        <Card className='smallCard' textStyle='smallCardText' text="Умение работать в команде" />
        <Card className='smallCard' textStyle='smallCardText' text="Проектирование и архитектура" />
        <Card className='smallCard' textStyle='smallCardText' text="Знание сетевых технологий" />
        <Card className='smallCard' textStyle='smallCardText' text="Умение изучать новые технологии" />
      </div>
    </>
  );
}

export default App;
