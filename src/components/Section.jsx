import { Flex, Heading, Text } from "@chakra-ui/react"

const Section = ({title, text, children}) => {
    return (
      <Flex as="section" direction="column" px={5} py={2} >
          <Heading as="h2" >{title}</Heading>
          <Text>{text}</Text>
          {children}
      </Flex>
    )
  }
  
  export default Section;