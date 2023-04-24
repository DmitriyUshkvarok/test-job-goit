import { useState, useEffect } from 'react';
import apiUsers from 'services/api';
import DropDown from 'components/DropDown/DropDown';
import Cards from 'components/Cards/Cards';
import { WrapperForBtnBackAndSelect } from './FilterCards.styled';

const FilterCards = () => {
  const [filter, setFilter] = useState('all');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (filter === 'all') {
      apiUsers.fetchUsers().then(users => {
        setFilteredUsers(users);
      });
    } else if (filter === 'follow') {
      apiUsers.filterUsersByFollowStatus(true).then(users => {
        setFilteredUsers(users);
      });
    } else if (filter === 'following') {
      apiUsers.filterUsersByFollowStatus(false).then(users => {
        const filteredUsers = users.filter(user => !user.isFollowed);
        setFilteredUsers(filteredUsers);
      });
    }
  }, [filter]);

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  return (
    <div>
      <WrapperForBtnBackAndSelect>
        <DropDown filter={filter} onFilterChange={handleFilterChange} />
      </WrapperForBtnBackAndSelect>
      <Cards users={filteredUsers} />
    </div>
  );
};

export default FilterCards;
