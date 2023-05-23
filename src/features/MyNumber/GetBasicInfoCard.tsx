import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { PinInputModal } from "./PinInputModal";
import { MyNumberCard as MNCDriver } from "my_number_card_driver";

export function GetBasicInfoCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRead = () => {
    onOpen();
  };

  const handlePinComplete = async (pin: string) => {
    const myNumberCard = await MNCDriver.connect();
    const myNumber = await myNumberCard.getMyNumber(pin);

    console.log("myNumber", myNumber);
  };

  return (
    <>
      <Card direction={{ base: "column", sm: "row" }}>
        <CardBody>
          <Heading size="md">マイナンバーカード</Heading>
          <Text>基本4情報(住所・氏名・年齢・性別)を取得</Text>
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
