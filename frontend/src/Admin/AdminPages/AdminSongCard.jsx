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

export const AdminSongCard = ({ music }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [songData,setSongData] = useState([])
  // const [data,setData] = useState([])
  // console.log(music)
   function handleEdit(id){
   
    onOpen()
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
        <button style={{ backgroundColor: "#fb2f2f" }}>Delete</button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Edit Your Song</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type='text' value={music.title} />
            <FormLabel>Artist</FormLabel>
            <Input type='text' value={music.artist} />
            <FormLabel>Source link</FormLabel>
            <Input type='text' value={music.source} />
            <FormLabel>Genre</FormLabel>
            <Input type='text' value={music.genre} />
            <FormLabel>Image link</FormLabel>
            <Input type='text' value={music.image} />
            <FormLabel>Duration</FormLabel>
            <Input type='text' value={music.duration} />
            <Button mt='20px' colorScheme='blue' >Update</Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
