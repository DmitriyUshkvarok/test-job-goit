import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';

export const CardsLoader = styled(FaReact)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  animation: rotate 5s infinite linear;
  -webkit-animation: rotate 5s infinite linear;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

export const WrapperForBtnBackAndSelect = styled.div`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
`;

export const CardsItem = styled.li`
  position: relative;
  width: 380px;
  background: var(--backgroundCard);
  border-radius: 20px;
`;

export const MainLogo = styled.img`
  width: 76px;
  height: 22px;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: 180px;
`;

export const PromoImgCards = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  top: 28px;
  left: 36px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const TransverseCards = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 62px;
`;

export const AvatarOvalContainer = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--background-body);
`;

export const AvatarCardsCircle = styled.img`
  width: 92px;
  height: 92px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImgAvatar = styled.img`
  width: 65px;
  height: 65px;
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

export const TweetsContainer = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const TweetsText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;

export const CardUserName = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;

export const CardUserFollowers = styled.p`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--color-text);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;

export const ButtonFollow = styled.button`
  width: 196px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family);
  font-weight: 600;
  line-height: 22px;
  color: var(--color-text);
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 36px;
  background: var(--background-body);
  border: none;
  border-radius: var(--border-radius);
  padding: 14px 28px;
  transition: color var(--transition);
  cursor: pointer;

  &.button-color-active {
    background: var(--button-color-active);
  }

  &:hover {
    background: var(--buttonHover);
    color: var(--button-color-text);
  }
`;

export const ButtonLoadMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: var(--font-family);
  font-weight: 600;
  line-height: 22px;
  color: var(--color-text);
  text-transform: uppercase;
  background: var(--background-body);
  border: none;
  border-radius: var(--border-radius);
  padding: 14px 28px;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    background: var(--buttonHover);
    color: var(--button-color-text);
  }
`;
