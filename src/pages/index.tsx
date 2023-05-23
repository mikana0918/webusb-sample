import { Flex } from "@chakra-ui/react";
import { GetIdCard } from "@/src/features/MyNumber/GetIdCard";
import { GetBasicInfoCard } from "../features/MyNumber/GetBasicInfoCard";

export default function Page() {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap={4}
      >
        <GetIdCard />
        <GetBasicInfoCard />
      </Flex>
    </>
  );
}
