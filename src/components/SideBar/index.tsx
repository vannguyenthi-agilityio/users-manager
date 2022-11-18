import { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  AvatarBadge,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import { FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';
import { FaUserAlt, FaSistrix } from 'react-icons/fa';
import { MdChevronRight } from 'react-icons/md';

import { CSSTransition } from 'react-transition-group';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface SidebarMobileProps extends FlexProps {
  onOpen: () => void;
}

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
    <Menu closeOnSelect={false} variant="sidebar">
      <MenuButton
        color="default.light"
        w="100%"
        textAlign="left"
        p={4}
        bgColor="default.grey.800"
        transition="all 0.2s"
        borderRadius="sidebar"
        borderWidth="none"
        _hover={{ bg: 'gray.400' }}
        _expanded={{ bg: 'default.grey.800' }}
        _focus={{ boxShadow: 'none' }}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <FaUserAlt />
            <Text ml={5}>User</Text>
          </Flex>
          <MdChevronRight />
        </Flex>
      </MenuButton>
      <MenuList pl={2}>
        <CSSTransition in="main" timeout={500} unmountOnExit>
          <Box ml={{ base: '-10px', md: '-22px' }}>
            <MenuItem>List</MenuItem>
            <MenuItem>View</MenuItem>
          </Box>
        </CSSTransition>
      </MenuList>
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
          <Menu size="sm">
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar w={8} h={8}>
                  <AvatarBadge boxSize="16px" bg="green.500" />
                </Avatar>
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Jone</Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
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
