import { Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from "react";
import { debounce } from "../../utils/debounce";
import { ThemeContext } from "../../App";
import { User } from "../../types/user";
import { getUserByName } from "../../utils/usersAPI";

const DEBOUNCE_MS = 300;

type SearchComponentProps = {
  onDebouncedQueryChange?: (query: string) => void;
  setUsers: Dispatch<SetStateAction<Array<User>>>;
};

export default function SearchComponent({onDebouncedQueryChange,setUsers}: SearchComponentProps) {

  const theme = useContext(ThemeContext);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const setDebouncedQueryDebounced = useMemo(
    () => debounce((value: string) => setDebouncedQuery(value), DEBOUNCE_MS),
    []
  );

  useEffect(() => {
    onDebouncedQueryChange?.(debouncedQuery);
  }, [debouncedQuery]);




  return (
    <input
    style = {{
      width: '50%',
      minHeight: '35px',
      textAlign: 'center',
      border: `2px solid ${theme?.theme.colors.border}`,
      borderRadius: '5px',
      margin: 10,
      backgroundColor: theme?.theme.colors.background,
      color: 'inherit'
    }}
      onChange={(e) => {
        const value = e.target.value;
        setDebouncedQueryDebounced(value);
      }}
      aria-label="Search"
    />
  );
}