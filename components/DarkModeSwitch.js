import { useColorMode, Button } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


function DarkModeSwitch(props){
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  
  return (
    <Button {...props} onClick={toggleColorMode} variant="ghost">
      {isDark
        ? <SunIcon />
        : <MoonIcon />
      }
    </Button>
    // <Switch
    //   // position="fixed"
    //   // top="1rem"
    //   // right="1rem"
    
    //   color="gray"
    //   isChecked={isDark}
    //   onChange={toggleColorMode}
    // />
  )
}
export default DarkModeSwitch