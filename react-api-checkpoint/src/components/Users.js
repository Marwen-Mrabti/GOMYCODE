import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from './User';

function Users() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
        {}
      );
      setListOfUsers(data);
    };
    const TimeoutId = setTimeout(() => {
      search();
    }, 1000);

    return () => {
      clearTimeout(TimeoutId);
    };
  }, []);

  return !listOfUsers.length ? (
    <div className="ui active centered loader">Loading...</div>
  ) : (
    <div className="users">
      <div className="ui cards">
        {listOfUsers.map((user) => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
}

export default Users;
