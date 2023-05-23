import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Code,
  Heading,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { PinInputModal } from "./PinInputModal";
import { MyNumberCard as MNCDriver } from "my_number_card_driver";

export function GetIdCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleRead = () => {
    onOpen();
  };

  const handlePinComplete = async (pin: string) => {
    const myNumberCard = await MNCDriver.connect();
    const myNumber = await myNumberCard.getMyNumber(pin);

    // TODO: 失敗した場合の処理をどうするか？
    onClose();

    toast({
      title: "マイナンバーカードIDの取得に成功しました",
      description: (
        <>
          あなたのIDは <Code>{myNumber}です</Code>
        </>
      ),
    });
  };

  return (
    <>
      <Card direction={{ base: "column", sm: "row" }}>
        <CardBody>
          <Heading size="md">マイナンバーカード</Heading>
          <Text>カードIDを取得します</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="teal" onClick={handleRead}>
            スタート
          </Button>
        </CardFooter>
      </Card>

      <PinInputModal
        isOpen={isOpen}
        onClose={onClose}
        onPinComplete={handlePinComplete}
      />
    </>
  );
}
