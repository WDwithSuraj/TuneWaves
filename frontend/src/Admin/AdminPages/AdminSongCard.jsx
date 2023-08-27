import React, { useEffect, useState } from "react";
import "../Style/AdminManageSong.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";
import axios from "axios";

export const AdminSongCard = ({ music,getMusicData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [songUpdate,setSongUpdate] = useState(music)
  const token = localStorage.getItem("token")
  console.log(token)
  function handleChange(e){
    const { name, value } = e.target;
    setSongUpdate((prev) => {
      return {...prev,[name]:name === "duration"? +value: value};
    });
  }

  const headers = {
    Authorization: `Bearer ${token}`
  };

   function handleEdit(id){
     onOpen()
    }
    
    function handleUpdate(id){
      // alert(id)
      axios.put(`http://localhost:8080/tuneWaves/songs/update/${id}`,songUpdate,{headers})
      .then(()=>getMusicData())
      .then(()=>onClose())
      
    }

    function handleDelete(id){
      // alert(id)
      axios.delete(`http://localhost:8080/tuneWaves/songs/delete/${id}`,{headers})
      .then(()=>getMusicData())
    }

  return (
    <div id="music-card">
      <div className="music-img">
        <img src={music.image} alt="not found" />
      </div>
      <div className="music-detail">
        <h3>Title: {music.title}</h3>
        <h3>Artist: {music.artist} </h3>
        <h3>Duration: {music.duration} sec</h3>
      </div>
      <div className="music-btn">
        <button onClick={()=>handleEdit(music._id)} style={{ backgroundColor: "#52eaa8" }}>
          Edit
        </button>
        <button style={{ backgroundColor: "#fb2f2f" }} onClick={()=>handleDelete(music._id)} >Delete</button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Edit Your Song</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type='text' name="title" value={songUpdate.title} onChange={handleChange} />
            <FormLabel>Artist</FormLabel>
            <Input type='text' name="artist" value={songUpdate.artist} onChange={handleChange} />
            <FormLabel>Source link</FormLabel>
            <Input type='text' name="source" value={songUpdate.source} onChange={handleChange} />
            <FormLabel>Genre</FormLabel>
            <Input type='text' name="genre" value={songUpdate.genre} onChange={handleChange} />
            <FormLabel>Image link</FormLabel>
            <Input type='text' name="image" value={songUpdate.image} onChange={handleChange} />
            <FormLabel>Duration</FormLabel>
            <Input type='number' name="duration" value={songUpdate.duration} onChange={handleChange} />
            <Button mt='20px' colorScheme='blue' onClick={()=>handleUpdate(music._id)} >Update</Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
