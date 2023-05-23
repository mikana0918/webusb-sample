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

export function GetBasicInfoCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const handleRead = () => {
    onOpen();
  };

  const handlePinComplete = async (pin: string) => {
    const myNumberCard = await MNCDriver.connect();
    const personalData = await myNumberCard.getPersonalData(pin);

    onClose();

    toast({
      title: "基本4情報の読み取りに成功しました",
      description: (
        <>
          <Text>
            あなたの住所は <Code>{personalData.address}です</Code>
          </Text>
          <Text>
            あなたの誕生日は <Code>{personalData.birthday.toString()}です</Code>
          </Text>
          <Text>
            あなたの名前は <Code>{personalData.name}です</Code>
          </Text>
          <Text>
            あなたの性別は <Code>{personalData.sex}です</Code>
          </Text>
        </>
      ),
    });
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
