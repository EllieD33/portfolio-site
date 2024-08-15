import '../background.css'; 
import { useColorMode } from '@chakra-ui/react';

const Background = () => {
    const { colorMode } = useColorMode();

    return(
        <div className="background" style={{backgroundColor: colorMode === 'dark' ? "#232323" : "#fff"}} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Background;