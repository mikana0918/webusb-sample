import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  HStack,
  PinInput,
  PinInputField,
  ModalFooter,
  Button,
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
            <PinInput onComplete={handlePinComplete} mask>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
