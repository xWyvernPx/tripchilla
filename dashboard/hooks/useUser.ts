import React,{useCallback,useEffect,useState} from 'react'

const useUser = () => {
  const [users, setUsers] = useState([])
  const getAllUser = useCallback(async() => {
      // TODO  : get all users
      setUsers([]);
  },[])
  useEffect(() => {
    getAllUser();
  } ,[getAllUser])
  
  const addNewUser = useCallback(async(user:any) => {
      // TODO : API 
      getAllUser();
  },[])

  return (
  { users,
   addNewUser}
  )
}

export default useUser