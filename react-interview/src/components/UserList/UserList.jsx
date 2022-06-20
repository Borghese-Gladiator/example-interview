import { useEffect, useState } from "react";
import ErrorBoundary from '../ErrorBoundary';
import useHover from '../../hooks/useHover';

function UserItem({ name }) {
  const [hoverRef, isHovering] = useHover();
  return (
    <div ref={hoverRef}>
      {isHovering ? <b>{name}</b> : name}
    </div>
  )
}

function UserList() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // SAMPLE #1 async/await componentDidMount on page load
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await res.json();
        setUserList(json);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
      }
    }
    fetchUserData();
  }, [])

  // SAMPLE #2 then componentDidMount on page load
  /*
  useEffect(() => {
    setError(null);
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setUserList(json);
        setIsLoading(false);
      })
      .catch(e => setError(e.message))
  }, [])
  */

  if (isLoading) {
    return <p>Loading....</p>
  }

  if (error) {
    return (
      <div>
        <div>Oh no, there was a problem getting the users</div>
        <pre>{error.message}</pre>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <h1>User List</h1>
      <input placeholder="Enter Name" onChange={event => setSearchQuery(event.target.value)} />
      {
        userList
          .filter(({ name }, idx) => name.includes(searchQuery))
          .map((val, idx) => {
            return (
              <div key={`user-item-${idx}`}>
                <UserItem {...val} />
              </div>
            )
          })
      }
    </ErrorBoundary>
  )
}

export default UserList;