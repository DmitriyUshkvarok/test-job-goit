import Container from '../../components/Container/Container';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import Cards from 'components/Cards/Cards';
import {
  PageUserWrapper,
  PageUserTitle,
  PageUserDescription,
  StyledScrollToTop,
} from './UserPage.styled';
import Navigation from '../../components/Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';

const UserPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/home';

  return (
    <PageUserWrapper>
      <StyledScrollToTop smooth />
      <Container>
        <Navigation />
        <PageUserTitle>Users Tweets</PageUserTitle>
        <Link to={backLink}>
          <ButtonBack />
        </Link>
        <PageUserDescription>Tweet Cards</PageUserDescription>
        <Cards />
      </Container>
    </PageUserWrapper>
  );
};

export default UserPage;
