import { createContext, useState, useEffect } from 'react';

// Models
import { User } from 'src/models/user';

type UserProviderProps = {
  children?: React.ReactNode;
};

type UserEdit = {
  user: User;
  isEdit: boolean;
};

interface UserState {
  isLoading: boolean;
  users: User[] | null;
  userEdit: UserEdit;
}

const initialUserState: UserState = {
  isLoading: false,
  users: null,
  userEdit: {
    user: null,
    isEdit: false
  }
};

interface AuthContextValue extends UserState {
  editUser: (user: User) => void;

  deleteUser: (id: string) => void;

  addUser: (newUser: User) => void;

  updateUser: (id: string, user: User) => void;
}

export const UserContext = createContext<AuthContextValue>({
  ...initialUserState,
  addUser: () => {},
  deleteUser: () => {},
  editUser: () => {},
  updateUser: () => {}
});

const URL = 'http://localhost:3001';

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userEdit, setUserEdit] = useState({ user: null, isEdit: false });

  const fetchUsers = async () => {
    const response = await fetch(`${URL}/users`);
    const data = await response.json();

    setUsers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (newUser: User) => {
    const response = await fetch(`${URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newUser)
    });
    const data = await response.json();

    setUsers([data, ...users]);
  };

  const updateUser = async (id: string, user: User) => {
    const response = await fetch(`${URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();

    setUsers(
      users.map((user) => (user.id === id ? { ...user, ...data } : user))
    );
  };

  const deleteUser = async (id: string) => {
    await fetch(`${URL}/users/${id}`, { method: 'DELETE' });

    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user: User) => {
    setUserEdit({ user, isEdit: true });
  };

  return (
    <UserContext.Provider
      value={{
        users,
        isLoading,
        userEdit,
        addUser,
        updateUser,
        deleteUser,
        editUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
