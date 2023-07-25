import './App.css';
import netflixFate from "./images/netflixFate.png"
import netflixGambit from "./images/netflixGambit.png"
import netflixOutside from "./images/netflixOutside.png"
import netflixStarTreck from "./images/netflixStarTrek.png"
import netflixWitcher from "./images/netflixWitcher.png"
import airbnbCabin from "./images/airbnbCabin.png"
import airbnbHome from "./images/airbnbHome.png"
import airbnbPets from "./images/airbnbPets.png"
import airbnbUnique from "./images/airbnbUnique.png"
import bbcMorgan from "./images/bbcMorgan.png"
import bbcPandemic from "./images/bbcPandemic.png"
import bbcPay from "./images/bbcPay.png"
import bbcUnilever from "./images/bbcUnilever.png"
import bbcClock from "./images/clock-icon.png"
import bbcComment from "./images/coment-icon.png"


function App() {
  return (
    <div >
      <Break />
      <div className="netflixBox">
        <Netflix imgSrc={netflixFate} alt="tv series fate poster" />
        <Netflix imgSrc={netflixGambit} alt="tv series the queens gambit poster" />
        <Netflix imgSrc={netflixOutside} alt="film outside the wire poster" />
        <Netflix imgSrc={netflixStarTreck} alt="tv series star trek poster" />
        <Netflix imgSrc={netflixWitcher} alt="tv series the witcher poster" />
      </div>
      <Break />
      <div className='airbnbWrap'>
        <AirBnb imgSrc={airbnbHome} alt="example of a home stay" picTitle="Entire homes" />
        <AirBnb imgSrc={airbnbUnique} alt="example of a unique stay" picTitle="Unique stays" />
        <AirBnb imgSrc={airbnbCabin} alt="example of a cabin stay" picTitle="Cabins and cottages" />
        <AirBnb imgSrc={airbnbPets} alt="a dog" picTitle="Pets allowed" />
      </div>
      <Break />
      <div className='bbcWrap'>
        <Bbc imgSrc={bbcPandemic} alt="coronavirus poster" articleTitle="Don't think pandemic is over, Whitty warns" articleText="Unlocking too quickly would lead to a substantial surge in infection, UK chief medical adviser says." howOld="2h" category="Health" commentIconSrc={bbcComment} commentIconAlt="comment icon" />
        <Bbc imgSrc={bbcPay} alt="nurse adminstering injection" articleTitle="Pay rise was set to be 2.1% - NHS chief" articleText="NHS England boss backs ministers over pay dispute but does not rule out a one-off bonus for workers." howOld="1h" category="UK Politics" />
        <Bbc imgSrc={bbcMorgan} alt="Piers & Meghan" articleTitle="Charity criticises Morgan's comments about Meghan" articleText='Mental health charity Mind says it is "disappointed" by comments Piers Morgan made on Monday.' howOld="2h" category="Entertainment & Arts" />
        <Bbc imgSrc={bbcUnilever} alt="someone in front of a mirror" articleTitle="Unilever drops word 'normal' from beauty products" articleText="The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusivity." howOld="10m" category="Business"  />
      </div>
      <Break />
    </div>
  );
}

const Netflix = (props) => {
  return (
    <img className="netflixImages" src={props.imgSrc} alt={props.imgAlt} />
  )
}

const Break = () => {
  return (
    <div>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
    </div>
  )
}

const AirBnb = (props) => {
  return (
    <div className='eachSetWrapAirBnb'>
      <img className="airbnbImages" src={props.imgSrc} alt={props.imgAlt} />
      <p className="airbnbText">{props.picTitle}</p> 
    </div>
  )
}

const Bbc = (props) => {
  return (
    <div className='eachSetWrapBbc'>
      <img className="bbcImages" src={props.imgSrc} alt={props.imgAlt} />
      <h3 className='bbcTitle'>{props.articleTitle}</h3>
      <p className="bbcText">{props.articleText}</p> 
      <BbcExtras howOld={props.howOld} category={props.category} commentIconSrc={props.commentIconSrc} commentIconAlt={props.commentIconAlt} />
    </div>
  )
}

const BbcExtras = (props) => {
  return (
    <div className="bbcExtrasWrap">
      <img className='bbcClock' src={bbcClock} alt="clock icon" />
      <p className="bbcAgeText">{props.howOld}</p>
      <p className="bbcCatText">{props.category}</p>
      <img className="bbcComment" src={props.commentIconSrc} alt={props.commentIconAlt} />
    </div>
  )
}




export default App;
