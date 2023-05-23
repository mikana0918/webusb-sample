import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

function MyNumberCard() {
  return (
    <Card direction={{ base: "column", sm: "row" }}>
      <CardBody>
        <Heading size="md">マイナンバーカード</Heading>
        <Text>NFCマイナンバーカードリーダーサンプル</Text>
      </CardBody>
      <CardFooter>
        <Button>USB接続</Button>
      </CardFooter>
    </Card>
  );
}

export default function Page() {
  return (
    <>
      <Flex justifyContent={"center"} alignItems="center">
        <MyNumberCard />
      </Flex>
    </>
  );
}
