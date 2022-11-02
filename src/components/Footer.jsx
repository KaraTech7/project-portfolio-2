import { Text, Icon } from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";
import "../index.css";

export default function Footer() {
  return (
    <>
      <div className="email">
        <Text marginTop="6" fontFamily="mono" textAlign="center">
          Get in touch 👉{" "}
          <a className="git" href="https://www.github.com/KaraTech7">
            github.com
          </a>
        </Text>
        <div className="linked">
          <Text fontSize="5xl" fontWeight="thin">
            <Icon as={DiGithubBadge} />
          </Text>
          <div className="copyright">
            <p>&copy; 2022 KaraTech7_</p>
          </div>
        </div>
      </div>
    </>
  );
}
