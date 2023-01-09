import { useContext } from 'react';

import {
  Box,
  alpha,
  Stack,
  lighten,
  Divider,
  IconButton,
  Tooltip,
  styled,
  useTheme
} from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import HeaderMenu from './Menu';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        // @media (min-width: ${theme.breakpoints.values.lg}px) {
        //     left: ${theme.sidebar.width};
        //     width: auto;
        // }
`
);

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
                lighten(theme.colors.primary.main, 0.7),
                0.15
              )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
                theme.colors.alpha.black[100],
                0.2
              )}, 0px 5px 22px -4px ${alpha(
                theme.colors.alpha.black[100],
                0.1
              )}`
      }}
    >
      <Stack
        direction="row"
        // divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      >
        <a href="/" style={{display: 'flex'}}>
          <svg width="22" height="22" viewBox="0 0 135 145" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.986 0L0 144.988H31.0048L132.514 0H100.986Z" fill="white"></path>
            <path d="M34.2346 0L63.9475 42.7232L48.4451 66.0268L2.58386 0H34.2346Z" fill="url(#paint0_linear)"></path>
            <path d="M103.995 145L71.0526 97.7455L86.555 75.0893L135 145H103.995Z" fill="url(#paint1_linear)"></path>
            <defs>
              <linearGradient id="paint0_linear" x1="27.1293" y1="9.0625" x2="69.773" y2="60.4324" gradientUnits="userSpaceOnUse">
                <stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0.55"></stop>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="111.1" y1="133.996" x2="58.6959" y2="63.4999" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6966FF"></stop>
                <stop offset="1" stopColor="#6966FF" stopOpacity="0.36"></stop>
              </linearGradient>
            </defs>
          </svg>
        </a>
        <HeaderMenu />
      </Stack>
      <Box display="flex" alignItems="center">
        <HeaderButtons />
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
