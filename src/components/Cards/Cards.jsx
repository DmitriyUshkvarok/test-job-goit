import { useEffect, useState } from 'react';
import {
  CardList,
  CardsItem,
  MainLogo,
  PromoImgCards,
  TransverseCards,
  AvatarWrapper,
  AvatarOvalContainer,
  AvatarCardsCircle,
  TweetsContainer,
  TweetsText,
  ButtonFollow,
  CardUserName,
  CardUserFollowers,
  ButtonLoadMore,
  ImgAvatar,
  CardsLoader,
  WrapperForBtnBackAndSelect,
} from './Cards.styled';
import Logo from '../../images/Logo.png';
import PromoImg from '../../images/picture.png';
import Transverse from '../../images/Rectangle1.png';
import AvatarCards from '../../images/Ellipse(Stroke).png';
import apiUsers from '../../services/api';
import DropDown from 'components/DropDown/DropDown';
import { toast } from 'react-toastify';

const options = [
  { value: 'all', label: 'Show all' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

const Cards = () => {
  const [filter, setFilter] = useState('all');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(3);
  const [hasMore, setHasMore] = useState(true);
  const [followedUsers, setFollowedUsers] = useState(
    JSON.parse(localStorage.getItem('followedUsers')) || []
  );
  const [buttonColorsAndText, setButtonColorsAndText] = useState(
    JSON.parse(localStorage.getItem('buttonColors')) || {}
  );

  // local storage color button
  useEffect(() => {
    localStorage.setItem('buttonColors', JSON.stringify(buttonColorsAndText));
    localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
  }, [buttonColorsAndText, followedUsers]);

  useEffect(() => {
    switch (filter) {
      case 'follow':
        setFilteredUsers(users.filter(({ id }) => followedUsers.includes(id)));
        break;
      case 'following':
        setFilteredUsers(users.filter(({ id }) => !followedUsers.includes(id)));
        break;
      default:
        setFilteredUsers(users);
        break;
    }
  }, [users, followedUsers, filter]);

  // request on render user cards
  useEffect(() => {
    apiUsers
      .fetchUsers()
      .then(users => {
        setUsers(users);
        if (users.length <= limit) {
          setHasMore(false);
          toast.error('sorry no more cards found');
        }
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [users.length, limit]);

  // request on put followers
  const handleFollowClick = (id, followers) => {
    if (followedUsers.includes(id)) {
      // Отменяем подписку
      apiUsers
        .updateFollowers(id, followers - 1)
        .then(() => {
          setFollowedUsers(followedUsers.filter(userId => userId !== id));
          setButtonColorsAndText(prevButtonColors => ({
            ...prevButtonColors,
            [id]: false,
          }));
          setUsers(users => {
            const userIndex = users.findIndex(user => user.id === id);
            const updatedUser = {
              ...users[userIndex],
              followers: followers - 1,
            };
            const updatedUsers = [...users];
            updatedUsers[userIndex] = updatedUser;
            return updatedUsers;
          });
          toast.warning(`you signed off `);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // Подписываемся
      apiUsers
        .updateFollowers(id, followers + 1)
        .then(() => {
          setFollowedUsers([...followedUsers, id]);
          setButtonColorsAndText(prevButtonColors => ({
            ...prevButtonColors,
            [id]: true,
          }));
          setUsers(users => {
            const userIndex = users.findIndex(user => user.id === id);
            const updatedUser = {
              ...users[userIndex],
              followers: followers + 1,
            };
            const updatedUsers = [...users];
            updatedUsers[userIndex] = updatedUser;
            return updatedUsers;
          });
          toast.success(`you signed up `);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  // click buttom load more
  const handleButtonLoadMore = () => {
    if (hasMore) {
      setLimit(limit + 3);
      if (users.length <= limit + 3) {
        setHasMore(false);
      }
      if (hasMore) {
        const targetY = window.pageYOffset + 500;
        window.requestAnimationFrame(function smoothScroll() {
          if (window.pageYOffset < targetY) {
            window.scrollTo(0, window.pageYOffset + 50);
            window.requestAnimationFrame(smoothScroll);
          }
        });
      }
    }
  };

  const handleFilterChange = value => {
    setFilter(value);
  };

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <WrapperForBtnBackAndSelect>
        <DropDown
          options={options}
          filter={filter}
          onFilterChange={handleFilterChange}
        />
      </WrapperForBtnBackAndSelect>
      <CardList>
        {loading ? (
          <CardsLoader size={50} color="aqua" />
        ) : (
          filteredUsers
            .slice(0, limit)
            .map(({ id, avatar, followers, tweets, user }) => (
              <CardsItem key={id}>
                <MainLogo src={Logo} alt="Logo" />
                <PromoImgCards src={PromoImg} alt="PromoImg" />
                <AvatarWrapper>
                  <TransverseCards src={Transverse} alt="Transverse" />
                  <AvatarOvalContainer>
                    <AvatarCardsCircle src={AvatarCards} alt="Transverse" />
                    <ImgAvatar src={avatar} alt={user} />
                  </AvatarOvalContainer>
                </AvatarWrapper>
                <TweetsContainer>
                  <CardUserName>user:{user}</CardUserName>
                  <TweetsText>tweets:{tweets}</TweetsText>
                  <CardUserFollowers>
                    followers:
                    {followers.toLocaleString('en-US', { useGrouping: true })}
                  </CardUserFollowers>
                  <ButtonFollow
                    className={
                      buttonColorsAndText[id]
                        ? 'button-color-active'
                        : 'button-color'
                    }
                    type="button"
                    onClick={() => handleFollowClick(id, followers)}
                  >
                    {buttonColorsAndText[id] ? 'Following' : 'Follow'}
                  </ButtonFollow>
                </TweetsContainer>
              </CardsItem>
            ))
        )}
      </CardList>
      {hasMore && (
        <ButtonLoadMore type="button" onClick={handleButtonLoadMore}>
          load more
        </ButtonLoadMore>
      )}
    </>
  );
};
export default Cards;
