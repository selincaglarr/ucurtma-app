import React from 'react';
import { Flex, Button } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

function MenuItems({ isDrawer, items, ...otherProps }) {
  const drawerProps = {
    wrapper: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    button: {
      justifyContent: 'flex-start',
      width: 'full',
      p: '1rem 0',
      borderRadius: 0,
      borderBottom: '2px solid',
      borderBottomColor: 'bodyBg',
    },
  };

  const clickHandler = href => {
    const element = document.querySelector(href);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Flex {...(isDrawer && drawerProps.wrapper)} {...otherProps}>
      {items?.map((navItem, i) => (
        <Button
          as={Link}
          to={navItem.href}
          onClick={() => navItem.href[0] === '#' && clickHandler(navItem.href)}
          key={i.toString()}
          ml={isDrawer ? 0 : 4}
          color={navItem.color}
          variant={isDrawer ? 'link' : 'ghost'}
          size="sm"
          {...(isDrawer && drawerProps.button)}
          {...navItem.buttonProps}
        >
          {navItem.label}
        </Button>
      ))}
    </Flex>
  );
}

export default MenuItems;
