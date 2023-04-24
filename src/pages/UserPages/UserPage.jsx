import Container from '../../components/Container/Container';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import FilterCards from 'components/FilterCards/FilterCards';
import {
  PageUserWrapper,
  PageUserTitle,
  PageUserDescription,
  StyledScrollToTop,
} from './UserPage.styled';
import Navigation from '../../components/Navigation/Navigation';
import { Link, useLocation } from 'react-router-dom';

const UserPage = ({ users }) => {
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
        <FilterCards users={users} />
      </Container>
    </PageUserWrapper>
  );
};

export default UserPage;
