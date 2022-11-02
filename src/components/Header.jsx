import {
  Box,
  Flex,
  Heading,
  Container,
  Stack,
  Link,
  Icon,
  useColorModeValue,
  Img,
  Highlight,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import "../index.css";
import Typical from "react-typical";
import { TbBrandNextjs, TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiNodejs } from "react-icons/di";
import { Divider } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex>
        <Container maxW="60ch">
          <Stack
            as={Box}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 30, md: "5rem" }}
            direction="column"
          >
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 3 }}
              textAlign="center"
            >
              <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow="hidden"
                marginY="25"
              >
                <Img
                  borderRadius="full"
                  src="https://avatar-endpoint.herokuapp.com/api/"
                />
              </Box>
            </Box>

            <Divider my={1} />

            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
              css={{ backdropFilter: "blur(10px)" }}
            >
              {" "}
              <Typical
                steps={[
                  "Hello Bro",
                  500,
                  "Selamat Datang Di Portfolio Sederhana Saya",
                  5000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </Box>

            <Box display={{ md: "flex" }}>
              <Box flexGrow={1}>
                <Heading fontSize="25px">Adhika Candra</Heading>
                <span>Software Engineering</span>, <span>Front End Kids,</span>{" "}
                and <span>Tech Enthusiast.</span>
              </Box>
            </Box>

            <Heading fontSize="25px">About 👨‍💼</Heading>
            <Box>
              <Highlight
                query={[
                  "Adhika",
                  "Software Engineering",
                  "full-stack",
                  "Youtube channel",
                  "kcode",
                ]}
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "red.100",
                }}
              >
                Adhika is currently studying to deepen her major where when she
                was still in school she majored in &quot;Software engineering
                &quot;. Want to try new things with doing business (freelancing)
                and learning programming language in the sense of wanting to be
                "full-stack" his YouTube channel is called &quot;kcode
              </Highlight>
              &quot;
            </Box>

            <Heading fontSize="25px">Stack</Heading>
            <Stack
              paddingX="30"
              justify="center"
              direction="row"
              wrap="wrap"
              fontSize="3.2rem"
              spacing="6"
            >
              <Link pointerEvents="none" as="span">
                <Icon as={TbBrandJavascript} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={AiOutlineHtml5} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={TbBrandCss3} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={DiNodejs} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={FaReact} />
              </Link>
              <Link pointerEvents="none">
                <Icon as={TbBrandNextjs} />
              </Link>
            </Stack>
            <Divider />
          </Stack>
        </Container>
      </Flex>
    </>
  );
}
