import React from 'react'
import { Modal, Input, Button, useDisclose } from "native-base";

function ModalOverlay() {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();
	return <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header fontSize={"4xl"} fontWeight={"bold"}>
            Add Event
          </Modal.Header>
          <Modal.Body>
            maybe event add instructions here
            <Input mt={4} placeholder={"Lorem ipsum dolor sit"} />
          </Modal.Body>
          <Modal.Footer>
            <Button colorScheme={"blue"} mr={1}>
              Save
            </Button>
            <Button onPress={onClose}>Close</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button onPress={onOpen}>Open Modal</Button>
    </>;
}

export default ModalOverlay