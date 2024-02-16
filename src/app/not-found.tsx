import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '70vh',
          }}
        >
          <Typography variant="h1" style={{ color: '#1976d2' }}>
            404
          </Typography>
          <Typography variant="h6" style={{ color: '#1976d2' }}>
            The page you’re looking for doesn’t exist.
          </Typography>
          <Button variant="contained">Back Home</Button>
        </Box>
      </Grid>
    </Grid>
  );
}
