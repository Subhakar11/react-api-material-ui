import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../api';
import { List, ListItem, ListItemText, CircularProgress } from '@mui/material';

const ItemList = ({ searchQuery }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loader">
        <CircularProgress className="loader" />
      </div>
    );
  }

  return (
    <List>
      {filteredUsers.map(user => (
        <ListItem key={user.id} className="list-item">
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
};

export default ItemList;
