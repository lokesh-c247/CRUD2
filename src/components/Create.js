import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Button, Input } from '@chakra-ui/react'



const Create = (props) => {

    const { openForm, setOpenForm, formData, setFormData , usersData, setUsersData , update } = props;
 
    const handleSubmit=()=>{
    const updatedData = [...usersData];
    updatedData.push(formData)
    console.log(updatedData);
    setUsersData(updatedData)
    setOpenForm(false)
    
 }

 const handleEdit=(id)=>{   
    usersData.splice(id,1, usersData)
    console.log(usersData, 'updated data')
}

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    console.log(formData, "DSFsdf")

    return (
        <Modal isOpen={openForm} onClose={setOpenForm} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Data</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input placeholder='Id' size='md' name='id' value = {formData.id}  onChange={handleChange} />
                    &nbsp;
                    <Input placeholder='Name' size='md' name='name'  value = {formData.name} onChange={handleChange} />
                    &nbsp;
                    <Input placeholder='username' size='md' name="username"  value = {formData.username} onChange={handleChange} />
                    &nbsp;
                    <Input placeholder='Email' size='md' name="email" value={formData.email } onChange={handleChange} />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} >
                        Close
                    </Button>
                    {
                        update ? 
                        <Button variant='ghost' onClick={()=>{handleEdit()}}>Update Data</Button>
                        :
                        <Button variant='ghost' onClick={handleSubmit}>ADD Data</Button>

                    }
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default Create;




