import React, { useState } from 'react'
import "../Style/AdminAddSong.css"
import music_logo from "../AdminImage/tunewale-logo-white.jpg"
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
import { useToast } from '@chakra-ui/react'

import axios from "axios";

export const AdminAddSong = () => {

    let songObj = {
        title:"",
        artist:"",
        source:"",
        genre:"",
        image:"",
        duration:""
    }

    const [addSong,setAddSong] = useState(songObj)
    const token = localStorage.getItem("token")
    const toast = useToast()

    function handleChange(e){
        const { name, value } = e.target;
        setAddSong((prev) => {
        return {...prev,[name]:name === "duration"? +value: value};
    });
    }

    const headers = {
        Authorization: `Bearer ${token}`
    };

    function handleAddSong(){
        axios.post(`http://localhost:8080/tuneWaves/songs/upload`,addSong,{headers})
        .then(()=>toast({
            title: 'Song Added',
            status: 'success',
            duration: 1000,
            isClosable: true,
          }))
          setAddSong(songObj)
        // console.log(addSong)
    }

  return (
    <div id='admin-add-song' >
        <h2>Add New Song</h2>
        <div id='add-song'>
            <div>
                <img src={music_logo} alt="image not found" />
            </div>
            <div id='add-song-form'>
                <FormControl w={400} m='auto'>
                    <FormLabel>Title</FormLabel>
                    <Input type='text' name="title" value={addSong.title}  onChange={handleChange} />
                    <FormLabel>Artist</FormLabel>
                    <Input type='text' name="artist" value={addSong.artist} onChange={handleChange} />
                    <FormLabel>Source link</FormLabel>
                    <Input type='text' name="source" value={addSong.source} onChange={handleChange} />
                    <FormLabel>Genre</FormLabel>
                    <Input type='text' name="genre" value={addSong.genre} onChange={handleChange} />
                    <FormLabel>Image link</FormLabel>
                    <Input type='text' name="image" value={addSong.image} onChange={handleChange} />
                    <FormLabel>Duration</FormLabel>
                    <Input type='number' name="duration" value={addSong.duration} onChange={handleChange} />
                    <br />
                    <Button mt='20px' colorScheme='blue' onClick={handleAddSong} >Add Song</Button>
                </FormControl>
            </div>
        </div>
    </div>
  )
}
