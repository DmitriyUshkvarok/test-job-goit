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
              welcome to the app I had to create for a test assignment at it
              school goit
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
