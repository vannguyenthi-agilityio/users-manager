import { useState, useRef } from 'react';
import { useRouter } from 'next/router';

import {
  Menu as MenuChakra,
  MenuProps as MenuPropsChakra,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  Box,
  HStack,
  Avatar,
  AvatarBadge,
  MenuDivider,
  Link
} from '@chakra-ui/react';

import { IconType } from 'react-icons';

import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import { CSSTransition } from 'react-transition-group';

interface LinkItemProps {
  name: string;
  href: string;
  icon?: IconType;
}

interface ItemsMenuProps {
  label?: string;
  items?: {
    key: string;
    links: Array<LinkItemProps>;
  }[];
}

interface UserActiveProps {
  name: string;
  avatar?: string;
  role?: string;
}

interface MenuProps extends MenuPropsChakra {
  className?: string;
  userActive?: UserActiveProps;
  children: React.ReactNode;
  isIconAngle?: boolean;
  type?: 'base' | 'sidebar';
  itemsMenu?: ItemsMenuProps;
  variant?: 'sidebar' | 'base' | string;
  size?: 'default' | 'sm' | 'md' | string;
}

export const Menu = ({
  userActive = {
    name: '',
    avatar: '',
    role: ''
  },
  className = '',
  children,
  isIconAngle = true,
  type = 'base',
  variant = 'base',
  itemsMenu = {
    label: 'User',
    items: [
      {
        key: 'user',
        links: [
          { name: 'Preview', href: '#', icon: null },
          { name: 'Edit', href: '#', icon: null }
        ]
      }
    ]
  },
  isOpen,
  ...props
}: MenuProps) => {
  const [isOpenMenu, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const { pathname } = useRouter();
  const nodeRef = useRef(null);

  const calcHeight = (length: number) => {
    setIsOpen(!isOpenMenu);
    setMenuHeight(60 * length);
    return;
  };

  return (
    <Box>
      <MenuChakra closeOnSelect={false} variant={variant} {...props}>
        {({ isOpen }) => (
          <Box
            minHeight={isOpen && type !== 'base' ? menuHeight : 'auto'}
            className={className}
          >
            <MenuButton
              color="default.light"
              w="100%"
              textAlign="left"
              onClick={() => calcHeight(itemsMenu?.items[0]?.links?.length)}
            >
              {type === 'base' ? (
                <HStack>
                  <Avatar w={8} h={8} src={userActive.avatar}>
                    {!userActive.avatar && (
                      <AvatarBadge boxSize="16px" bg="green.500" />
                    )}
                  </Avatar>
                </HStack>
              ) : (
                <Flex alignItems="center" justifyContent="space-between">
                  <Flex alignItems="center">
                    {children}
                    <Text ml={5}>{itemsMenu.label}</Text>
                  </Flex>
                  {isIconAngle && isOpen ? <FaAngleDown /> : <FaAngleRight />}
                </Flex>
              )}
            </MenuButton>
            <MenuList py={0}>
              <CSSTransition
                in={isOpen}
                timeout={500}
                unmountOnExit
                nodeRef={nodeRef}
              >
                {type === 'base' ? (
                  <Box ref={nodeRef}>
                    <MenuItem>
                      <Flex py={3}>
                        <Avatar w={8} h={8} src={userActive.avatar}>
                          {!userActive.avatar && (
                            <AvatarBadge boxSize="16px" bg="green.500" />
                          )}
                        </Avatar>
                        <Box ml={4}>
                          <Text
                            color="default.grey.600"
                            fontWeight="600"
                            fontSize="xl"
                          >
                            {userActive.name}
                          </Text>
                          <Text color="default.grey.900" mt={2} lineHeight="1">
                            {userActive.role}
                          </Text>
                        </Box>
                      </Flex>
                    </MenuItem>
                    <MenuDivider mt={0} />
                    {itemsMenu?.items?.map((item) => (
                      <Box key={item.key}>
                        {item?.links?.map((link) => (
                          <MenuItem key={link.name}>
                            <Link href={link.href} display="flex" width="100%">
                              {link.icon && <link.icon size="20" />}
                              <Text ml={5} color="default.grey.600">
                                {link.name}
                              </Text>
                            </Link>
                          </MenuItem>
                        ))}
                        <MenuDivider />
                      </Box>
                    ))}
                    <MenuItem py={2}>
                      <FiLogOut size="20" />
                      <Text ml={5} color="default.grey.600">
                        Sign out
                      </Text>
                    </MenuItem>
                  </Box>
                ) : (
                  <Box>
                    {itemsMenu?.items?.map((item) => (
                      <Box key={item.key}>
                        {item?.links?.map((link) => (
                          <MenuItem
                            key={link.name}
                            className={
                              pathname === link.href ? 'menu-active' : ''
                            }
                          >
                            <Link
                              href={link.href}
                              display="flex"
                              width="100%"
                              alignItems="center"
                            >
                              {link.icon && <link.icon size="20" />}
                              <Text ml={5}>{link.name}</Text>
                            </Link>
                          </MenuItem>
                        ))}
                      </Box>
                    ))}
                  </Box>
                )}
              </CSSTransition>
            </MenuList>
          </Box>
        )}
      </MenuChakra>
    </Box>
  );
};
