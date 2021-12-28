import { FriendListUl, FriendItem, Status, FriendImg, FriendName } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(f => (
        <FriendItem key={f.id}>
            <Status a={f.isOnline}></Status>
            <FriendImg src={f.avatar} alt={f.name} width="48" />
            <FriendName>{f.name}</FriendName>
        </FriendItem>
      ))}
    </FriendListUl>
  );
}

export default FriendList;
