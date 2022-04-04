import Card from "../../commons/components/Card";
import API from "../apis";

function FoundCardList(props) {
  const { cardList } = props;

  return (
    <section className="cards">
      <div className="wrapper cards__list">
        { 
          cardList.map((cardData, index) => {
            return <Card key={ index } 
                         name={ cardData?.keywords[0].keyword } 
                         image={ `${ API.IMAGE_KEY }${ cardData?._id }${ API.IMAGE_KEY_PARAMETERS }` } />
          })
        }
      </div>
    </section>
  )
}

export default FoundCardList