import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react'
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu() {
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <ListWrapper
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  <Icon icon="clarity:network-globe-line" />&nbsp;
                  Mainnet
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  English
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/portfolio"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Portfolio"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/trade"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Trade"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/rewards"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Rewards"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/competitions"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Competitions"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/governance"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Governance"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            ref={ref}
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary={
                <Box display="flex" alignItems="center">
                  More
                  <Box display="flex" alignItems="center" pl={0.3}>
                    <ExpandMoreTwoToneIcon fontSize="small" />
                  </Box>
                </Box>
              }
            />
          </ListItem>
        </List>
      </ListWrapper>
      <Menu anchorEl={ref.current} onClose={handleClose} open={isOpen}>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/overview">
          Overview
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/tabs">
          Tabs
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/cards">
          Cards
        </MenuItem>
        <MenuItem sx={{ px: 3 }} component={NavLink} to="/components/modals">
          Modals
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
