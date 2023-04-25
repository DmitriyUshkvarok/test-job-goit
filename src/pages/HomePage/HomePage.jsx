import Container from '../../components/Container/Container';
import {
  HomeWrapper,
  SectionHomePage,
  HomePageTitle,
  StyledFaReact,
  FooterContainer,
} from './HomePage.styled';
import Navigation from '../../components/Navigation/Navigation';
import Footer from 'components/Footer/Footer.jsx';

const HomePage = () => {
  return (
    <div>
      <SectionHomePage>
        <Container>
          <HomeWrapper>
            <Navigation />
            <HomePageTitle>
              welcome to the tweets app I created at goit school as a test
              assignment
            </HomePageTitle>
            <StyledFaReact size={150} color="aqua" />
            <FooterContainer>
              <Footer />
            </FooterContainer>
          </HomeWrapper>
        </Container>
      </SectionHomePage>
    </div>
  );
};

export default HomePage;
