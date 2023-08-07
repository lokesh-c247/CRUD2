import { useEffect,useState} from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
  import { Button } from '@chakra-ui/react';
  import Create from "../components/Create";

const Read = () => {

    const [usersData , setUsersData] = useState([]);
    const [openForm , setOpenForm] = useState(false);
    const [formData , setFormData] = useState({
        "id" : "",
        "name":"",
        "username" : "",
        "email" : ""        
    })
    const [update , setUpdate] = useState(false);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsersData(json))
 } , [])

    const handleForm = () => {
        setUpdate(false);
        setOpenForm(true);
        setFormData({})
    }

    const handleEdit = (user) => {
        setFormData(user)
        setOpenForm(true);
        setUpdate(true);
    }
   
    const handleDelete = (uId) =>{
        const filteredData = usersData.filter((user)=>user.id !== uId)
        setUsersData(filteredData)
    }

    console.log(usersData);

    

    return (

        <>

        <Create openForm = {openForm} setOpenForm = {setOpenForm} formData = {formData} setFormData = {setFormData} usersData = {usersData} setUsersData = {setUsersData} update = {update} setUpdate = {setUpdate}/>

            <div className="btn"  style = {{display : "flex" , justifyContent : "center" , width : "100vw"}}>
            &emsp;
            
            <Button colorScheme='teal' variant='solid' onClick={handleForm} >
                Create Data
            </Button>
            </div>
        
            <TableContainer>
            <Table variant='simple'>
                <Thead>
                <Tr>
                      <Th>{"ID"}</Th>
                      <Th>{"name"}</Th>
                      <Th>{"User name"}</Th>
                      <Th>{"email"}</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {
                    usersData.map((user)=>{
                        return (
                            <Tr key={user.id}>
                            <Td>{user.id}</Td>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.username}</Td>
                            <Td><Button onClick={()=>handleEdit(user)}>Edit</Button></Td>
                            <Td><Button onClick={()=>handleDelete(user.id)}>Delete</Button></Td>
                            </Tr>                        
                     )})
                }
                
                </Tbody>
               
            </Table>
            </TableContainer>
        
        
        </>

        )
}

export default Read;