import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import SkillCard from "./SkillCard";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { importAll } from '../utils/importImages';
const skillLogos = importAll(require.context('../assets/img/skills', false, /\.(png|jpe?g|svg)$/));

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2 className="mb-5">Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <SkillCard src={skillLogos['react.svg']} label="ReactJS" />
                <SkillCard src={skillLogos['figma.svg']} label="Figma" />
                <SkillCard src={skillLogos['html5.png']} label="HTML" />
                <SkillCard src={skillLogos['css.svg']} label="CSS" />
                <SkillCard src={skillLogos['js.svg']} label="JavaScript" />
                <SkillCard src={skillLogos['bootstrap.svg']} label="Bootstrap" />
                <SkillCard src={skillLogos['tailwind.svg']} label="TailwindCss" />
                <SkillCard src={skillLogos['supabase.svg']} label="Supabase" />
                <SkillCard src={skillLogos['capacitor.png']} label="Capacitor" />
                <SkillCard src={skillLogos['xcode.png']} label="XCode" />
                <SkillCard src={skillLogos['androidStudio.png']} label="Android Studio" />
                <SkillCard src={skillLogos['uxui.png']} label="UX/UI" />
                <SkillCard src={skillLogos['admob.svg']} label="Google AdMob" />
                <SkillCard src={skillLogos['restApi.png']} label="Rest API" />
                <SkillCard src={skillLogos['electron.png']} label="Electron" />
                <SkillCard src={skillLogos['unity.svg']} label="Unity" />
                <SkillCard src={skillLogos['nodejs.png']} label="NodeJs" />
                <SkillCard src={skillLogos['typescript.png']} label="TypeScript" />
                <SkillCard src={skillLogos['sql.svg']} label="SQL" />
                <SkillCard src={skillLogos['java.svg']} label="Java" />
                <SkillCard src={skillLogos['php.svg']} label="Php" />
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bg-img" />
    </section>
  );
};
