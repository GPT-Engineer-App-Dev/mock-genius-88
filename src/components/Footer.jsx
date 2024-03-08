import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" mx="auto" py="5" px={{ base: "4", md: "8" }} borderTopWidth="1px">
      © 2024 Your Company
    </Box>
  );
};

export default Footer;
