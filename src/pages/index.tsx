import { Flex } from "@chakra-ui/react";
import { MyNumberCard } from "@/src/features/MyNumber/Card";

export default function Page() {
  return (
    <>
      <Flex justifyContent="center" alignItems="center">
        <MyNumberCard />
      </Flex>
    </>
  );
}
