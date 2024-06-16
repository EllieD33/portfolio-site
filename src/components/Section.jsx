import { Flex, Heading, Text } from "@chakra-ui/react"

const Section = ({title, text, children}) => {
    return (
      <Flex as="section" direction="column" >
          <Heading as="h3" fontSize="xl" >{title}</Heading>
          <Text>{text}</Text>
          {children}
      </Flex>
    )
  }
  
  export default Section;