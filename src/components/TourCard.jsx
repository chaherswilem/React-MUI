import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AccessTime } from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from "@mui/material/styles"; // corrected import
import PropTypes from 'prop-types';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});


const TourCard = ({ tour }) => { // Destructuring the props correctly
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={tour.image} alt="" className="img" />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime style={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>

            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              <Rating name="read-only" value={tour.rating} readOnly precision={0.25} size="small" />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={1.5}>
                ({tour.numberOfReviews} Reviews)
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography variant="h6" component="h2" marginTop={0}>
                From {tour.price} TND
              </Typography>
            </Box>
          </Box>


        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

TourCard.propTypes = {
  tour: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    numberOfReviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default TourCard;
