import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ pt: 4 }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Demo Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Footer;
