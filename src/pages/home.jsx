
import TourCard from '../components/TourCard'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cities from '../data.json'
import Typography from '@mui/material/Typography';

const home = () => {
  return (
    <div className="app">
    
    <Container sx={{marginY: 5}}>
      {cities.map((city) => (
         <>
         <Typography key={city.id} variant="h4" component="h2" marginTop={5} marginBottom={3}>Top {city.name} Tours </Typography>
         <Grid container spacing={5}>
         {city.tours.map((tour, index) => (
<TourCard key={index} tour={tour} />
))}

      </Grid>
         </>
      ))}
      
    </Container>
     
  </div>
  )
}

export default home
