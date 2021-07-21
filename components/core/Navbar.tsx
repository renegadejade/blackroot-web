import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  HStack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  Container,
  useColorMode,
  Image
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons';
import { SocialMediaLinksHeader } from '../core/SocialMediaLinksHeader';
import SignUpButton from '../auth/SignUpButton'
import  DarkModeSwitch from '../DarkModeSwitch'
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box >
      <Flex 
        bg={useColorModeValue('gray.50', 'gray.600')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'80px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        >
        
        <Flex 
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Image maxH="50" src="./images/logo_text.svg" />
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}  >
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            color={useColorModeValue('gray.800', 'white')}
            fontSize="15"
            fontWeight="bold"
            textTransform='uppercase'>
            BLACKROOT
          </Text> */}
           

          <Flex display={{ base: 'none', md: 'flex' }} ml={10} >
         
            <DesktopNav />
          </Flex>
        </Flex>
          
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            <SocialMediaLinksHeader variant='ghost' display={{ base: 'none', md: 'inline-flex' }}/>
            <DarkModeSwitch display={{ base: 'inline-flex', md: 'inline-flex' }}/>
            <HamburgerIcon as="button" display={{ base: 'inline-flex', md: 'none' }}/>
          <Button
            color={useColorModeValue('gray.800', 'grey.100')}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            variant={'link'}
            textTransform={'uppercase'}
            href={'#'}>
            Sign In
          </Button>
          
          <SignUpButton />
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} >
      {NAV_ITEMS.map((navItem) => (
        <Box maxW="7xl" mx="auto"key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                textTransform={'uppercase'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'gray.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'gray.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <HStack align="center">
      <Button>Sign In</Button>
      <Button>Sign In</Button>
      </HStack>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Heroes',
    children: [
      {
        label: 'Create',
        subLabel: 'Build a new Player-hero',
        href: '/create',
      },
      {
        label: 'Vault',
        subLabel: 'View and manage your Player-heroes',
        href: '/vault',
      }
    ],
  },
  {
    label: 'Tools',
    children: [
      {
        label: 'Bestiary',
        subLabel: 'Curated homebrew adversaries',
        href: '/bestiary',
      },
      {
        label: 'Name Generator',
        subLabel: 'Names for every heroic culture',
        href: '/name-generator',
      },
      {
        label: 'Treasure',
        subLabel: 'Generate treasure on the fly',
        href: '/treasure',
      }
    ],
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'THE ONE RING™',
        subLabel: 'Purchase the one game to rule them all',
        href: '#',
      },
      {
        label: 'Support',
        subLabel: 'Get help with Blackroot',
        href: '/support',
      },
      {
        label: 'Changelog',
        subLabel: 'New features and bug fixes',
        href: '/changelog',
      },
      {
        label: 'API Documenation',
        subLabel: 'Develop your own tools',
        href: '/docs',
      }
    ],
  }
];