import Container from '../../components/Container/Container';
import { SectionHomePage, HomePageTitle, StyledFaReact } from './HomePage.styled';
import Navigation from '../../components/Navigation/Navigation';


const HomePage = () => {
  return (
    <div>
      <SectionHomePage>
        <Container>
          <Navigation />
          <HomePageTitle>
            welcome to the app I had to create for a test assignment at it school goit
          </HomePageTitle>
          <StyledFaReact size={150} color="aqua" />
        </Container>
      </SectionHomePage>
    </div>
  );
};

export default HomePage;
