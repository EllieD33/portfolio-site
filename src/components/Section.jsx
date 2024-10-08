import { Flex, Heading } from "@chakra-ui/react"

const Section = ({title, children}) => {
    return (
      <Flex id={title.split(' ')[0]} as="section" direction="column" alignItems="center" px={5} py={2} >
          <Heading as="h2">{title}</Heading>
          {children}
      </Flex>
    )
  }
  
  export default Section;