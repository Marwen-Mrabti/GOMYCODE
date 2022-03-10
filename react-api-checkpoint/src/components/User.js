import React from 'react';

function User({ user }) {
  return (
    <div className="ui card" style={{ borderBottom: '1px solid orange' }}>
      <div className="ui content">
        <div className="ui header">{user.name}</div>
        <div className="ui meta">username: {user.username} </div>
        <div className="ui meta">e-mail: {user.email} </div>
        <div className="ui description">
          info: {`${user.username} is from ${user.address.city}`}
        </div>
      </div>
    </div>
  );
}

export default User;
