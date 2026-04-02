import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import SearchComponent from "../components/SearchComponent";
import { User } from "../types/user";
import {  getUserByName, getUsers } from "../utils/usersAPI";
import UserCardComponent from "../components/UserCardComponent";
import { PageStyle } from "../styles/GeneralStyles";
import { ThemeContext } from "../App";

type UserContextType = {
  users: Array<User>;
  setUsers: Dispatch<SetStateAction<Array<User>>>;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function SearchPage() {
  const [users,setUsers] = useState<Array<User>>([]);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  },[]);

  return (
    <UserContext.Provider value = {{users,setUsers}}>
    <div style = {PageStyle(theme?.theme!)}>
      <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <SearchComponent onDebouncedQueryChange={(query) => {getUserByName(query).then((res) => (setUsers(res)))}} setUsers={setUsers}/>
      <div style = {{display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
      {users.map((user) => {return <UserCardComponent key =  {user.id} user={user}/>})}
      </div>
      </div>
    </div>
    </UserContext.Provider>
  );
}