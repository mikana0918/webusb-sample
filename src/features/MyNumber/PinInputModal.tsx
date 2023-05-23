import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;

  onPinComplete: (value: string) => void;
}

export function PinInputModal({ isOpen, onClose, onPinComplete }: Props) {
  const handlePinComplete = (value: string) => {
    onPinComplete(value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>券面情報PINを入力してください</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack>
            <PinInput onComplete={handlePinComplete}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </ModalBody>

        {/* <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            読み取り
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
}
