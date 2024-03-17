'use client';

import { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import List from '@mui/material/List';
import ExpandCollapse from '@/components/ExpandCollapse';
import Link from 'next/link';
import { TMainMenuType, TSubMenuType } from '@/types/TNavBar';

const NavBar = ({ menuItems }: { menuItems: TMainMenuType[] }) => {
  const [expandedMenuItems, setExpandedMenuItems] = useState(menuItems);

  const toggleMenu = (key: string) => {
    const newStatus = expandedMenuItems.map((item) => {
      return item.Key == key
        ? { ...item, IsExpand: !item.IsExpand }
        : { ...item };
    });
    setExpandedMenuItems(newStatus);
  };

  return (
    <List key="left-main-menu" disablePadding sx={{ mt: 2 }}>
      {menuItems.map((item: TMainMenuType) => {
        const expandMenu =
          expandedMenuItems.find((i) => i.Key == item.Key)?.IsExpand ?? false;
        return (
          <>
            <ListItemButton key={item.Key} onClick={() => toggleMenu(item.Key)}>
              <ListItemIcon>{item.Icon}</ListItemIcon>
              <Link href={item.Url} passHref legacyBehavior>
                <ListItemText primary={item.Title} />
              </Link>
              {item.SubMenu.length > 0 && (
                <ExpandCollapse isExpand={expandMenu} />
              )}
            </ListItemButton>
            {item.SubMenu.length > 0 && (
              <Collapse
                key={item.Key + 'Collapse'}
                in={expandMenu}
                timeout="auto"
                unmountOnExit
              >
                {item.SubMenu.map((submenuItem: TSubMenuType) => {
                  return (
                    <List
                      key={submenuItem.Key + 'Collapse-list'}
                      component="div"
                      disablePadding
                    >
                      <ListItemButton
                        key={submenuItem.Key + 'Collapse-list-item-button'}
                        sx={{ pl: 4 }}
                      >
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <Link href={submenuItem.Url} passHref legacyBehavior>
                          <ListItemText primary={submenuItem.Title} />
                        </Link>
                      </ListItemButton>
                    </List>
                  );
                })}
              </Collapse>
            )}
          </>
        );
      })}
    </List>
  );
};

export default NavBar;
