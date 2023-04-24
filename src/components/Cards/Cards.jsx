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
} from './Cards.styled';
import Logo from '../../images/Logo.png';
import PromoImg from '../../images/picture.png';
import Transverse from '../../images/Rectangle1.png';
import AvatarCards from '../../images/Ellipse(Stroke).png';
import apiUsers from '../../services/api';

const Cards = ({ users }) => {
  const [cardUsers, setCardUsers] = useState([]);
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

  // request on render user cards
  useEffect(() => {
    apiUsers
      .fetchUsers()
      .then(users => {
        setCardUsers(users);
        if (users.length <= limit) {
          setHasMore(false);
        }
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [users.length, limit]);

  // request on put followers
  const handleFollowClick = (id, followers, isFollowed) => {
    if (followedUsers.includes(id)) {
      // Отменяем подписку
      apiUsers
        .updateFollowers(id, followers - 1, false)
        .then(() => {
          setFollowedUsers(followedUsers.filter(userId => userId !== id));
          setButtonColorsAndText(prevButtonColors => ({
            ...prevButtonColors,
            [id]: false,
          }));
          setCardUsers(users => {
            const userIndex = users.findIndex(user => user.id === id);
            const updatedUser = {
              ...users[userIndex],
              followers: followers - 1,
              isFollowed: false,
            };
            const updatedUsers = [...users];
            updatedUsers[userIndex] = updatedUser;
            return updatedUsers;
          });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // Подписываемся
      apiUsers
        .updateFollowers(id, followers + 1, true)
        .then(() => {
          setFollowedUsers([...followedUsers, id]);
          setButtonColorsAndText(prevButtonColors => ({
            ...prevButtonColors,
            [id]: true,
          }));
          setCardUsers(users => {
            const userIndex = users.findIndex(user => user.id === id);
            const updatedUser = {
              ...users[userIndex],
              followers: followers + 1,
              isFollowed: true,
            };
            const updatedUsers = [...users];
            updatedUsers[userIndex] = updatedUser;
            return updatedUsers;
          });
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
    }
  };

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <CardList>
        {cardUsers && loading ? (
          <CardsLoader size={50} color="aqua" />
        ) : (
          users
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
