import React from "react";
import { Avatar, AvatarBadge, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
    <VStack>
      <Avatar boxSize={100}
      src="https://i.pravatar.cc/150?img=7"
      ></Avatar>
      <Heading fontSize={18}>{greeting}</Heading>
    </VStack>
    <VStack>
      <Heading fontSize={50}>{bio1}</Heading>
      <Heading fontSize={50}>{bio2}</Heading>
    </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
