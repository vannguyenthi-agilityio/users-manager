import { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps
} from '@chakra-ui/react';
import {
  FiMenu,
  FiBell,
  FiUser,
  FiMail,
  FiSettings,
  FiDollarSign,
  FiMessageCircle
} from 'react-icons/fi';
import {
  FaUserAlt,
  FaSistrix,
  FaGenderless,
  FaRegFileAlt
} from 'react-icons/fa';

// Components
import { Menu } from '../Menu';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface SidebarMobileProps extends FlexProps {
  onOpen: () => void;
}

const itemsUserMenu = {
  label: 'User',
  items: [
    {
      links: [
        { name: 'List', icon: FaGenderless },
        { name: 'View', icon: FaGenderless }
      ]
    }
  ]
};

const itemsInvoiceMenu = {
  label: 'Invoice',
  items: [
    {
      links: [
        { name: 'List', icon: FaGenderless },
        { name: 'Preview', icon: FaGenderless },
        { name: 'Edit', icon: FaGenderless }
      ]
    }
  ]
};

const itemsMenuHeader = {
  label: '',
  items: [
    {
      links: [
        { name: 'Profile', icon: FiUser },
        { name: 'Inbox', icon: FiMail },
        { name: 'Chat', icon: FiMessageCircle }
      ]
    },
    {
      links: [
        { name: 'Setting', icon: FiSettings },
        { name: 'Pricing', icon: FiDollarSign }
      ]
    }
  ]
};

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => (
  <Box
    transition="3s ease"
    bgColor="secondary.200"
    borderRight="1px"
    w={{ base: 'full', md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Text fontSize="2xl" fontWeight="bold">
        Logo
      </Text>
      <CloseButton
        color="default.light"
        display={{ base: 'flex', md: 'none' }}
        onClick={onClose}
      />
    </Flex>
    <Menu type="sidebar" variant="sidebar" itemsMenu={itemsUserMenu}>
      <FaUserAlt />
    </Menu>
    <Menu type="sidebar" variant="sidebar" itemsMenu={itemsInvoiceMenu}>
      <FaRegFileAlt />
    </Menu>
  </Box>
);

const MobileNav = ({ onOpen, ...rest }: SidebarMobileProps) => (
  <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    height="20"
    alignItems="center"
    bg={useColorModeValue('default.light', 'gray.900')}
    borderBottomWidth="1px"
    borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    justifyContent={{ base: 'space-between', md: 'flex-end' }}
    {...rest}
  >
    <IconButton
      display={{ base: 'flex', md: 'none' }}
      onClick={onOpen}
      variant="outline"
      aria-label="open menu"
      icon={<FiMenu />}
    />
    <Text
      display={{ base: 'flex', md: 'none' }}
      fontSize="2xl"
      fontWeight="bold"
    >
      Logo
    </Text>
    <Flex justifyContent="space-between" w="100%">
      <Flex alignItems="center">
        <IconButton
          aria-label="SearchIcon"
          icon={<FaSistrix />}
          colorScheme="blackAlpha"
          variant="ghost"
        />
        <Text
          color="default.placeholder"
          display={{ base: 'none', md: 'flex' }}
        >
          Search (Ctrl + /)
        </Text>
      </Flex>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems="center">
          <Menu
            size="sm"
            type="base"
            userActive={{
              name: 'John Doe',
              role: 'Admin'
            }}
            itemsMenu={itemsMenuHeader}
          >
            <></>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  </Flex>
);

const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
