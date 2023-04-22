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
  FollowersText,
  ButtonFollow,
  CardUserName,
  CardUserFollowers,
  ButtonLoadMore,
  ImgAvatar,
} from './Cards.styled';
import Logo from '../../images/Logo.png';
import PromoImg from '../../images/picture.png';
import Transverse from '../../images/Rectangle1.png';
import AvatarCards from '../../images/Ellipse(Stroke).png';
import apiUsers from '../../services/api';

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(3);
  const [hasMore, setHasMore] = useState(true);
  const [followedUsers, setFollowedUsers] = useState([]);
  const [buttonColors, setButtonColors] = useState(
    JSON.parse(localStorage.getItem('buttonColors')) || {}
  );

  // local storage color button
  useEffect(() => {
    localStorage.setItem('buttonColors', JSON.stringify(buttonColors));
  }, [buttonColors]);

  // request on render user cards
  useEffect(() => {
    apiUsers
      .fetchUsers()
      .then((users) => {
        setUsers(users);
        if (users.length <= limit) {
          setHasMore(false);
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [users.length, limit]);

  if (error) {
    return <p>{error.message}</p>;
  }

  // click buttom load more
  const handleButtonLoadMore = () => {
    if (hasMore) {
      setLimit(limit + 3);
      if (users.length <= limit + 3) {
        setHasMore(false);
      }
    }
  };

  // request on put followers
  const handleFollowClick = (id, followers) => {
    if (followedUsers.includes(id)) {
      // Отменяем подписку
      apiUsers
        .updateFollowers(id, followers - 1)
        .then(() => {
          setFollowedUsers(followedUsers.filter((userId) => userId !== id));
          setButtonColors((prevButtonColors) => ({ ...prevButtonColors, [id]: false }));
          setUsers((users) => {
            const userIndex = users.findIndex((user) => user.id === id);
            const updatedUser = {
              ...users[userIndex],
              followers: followers - 1,
            };
            const updatedUsers = [...users];
            updatedUsers[userIndex] = updatedUser;
            return updatedUsers;
          });
          localStorage.setItem(`buttonText_${id}`, 'Follow');
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // Подписываемся
      apiUsers
        .updateFollowers(id, followers + 1)
        .then(() => {
          setFollowedUsers([...followedUsers, id]);
          setButtonColors((prevButtonColors) => ({ ...prevButtonColors, [id]: true }));
          setUsers((users) => {
            const userIndex = users.findIndex((user) => user.id === id);
            const updatedUser = {
              ...users[userIndex],
              followers: followers + 1,
            };
            const updatedUsers = [...users];
            updatedUsers[userIndex] = updatedUser;
            return updatedUsers;
          });
          localStorage.setItem(`buttonText_${id}`, 'Following');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <CardList>
        {loading ? (
          <p>Loading...</p>
        ) : (
          users.slice(0, limit).map(({ id, avatar, followers, tweets, user }) => (
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
                <CardUserFollowers>followers:{followers}</CardUserFollowers>
                <TweetsText>tweets:{tweets}</TweetsText>
                <FollowersText>{followers}</FollowersText>
                <ButtonFollow
                  className={buttonColors[id] ? 'button-color-active' : 'button-color'}
                  type="button"
                  onClick={() => handleFollowClick(id, followers)}
                >
                  {localStorage.getItem(`buttonText_${id}`) ||
                    (followedUsers.includes(id) ? 'Following' : 'Follow')}
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
