import { Typography, Box } from '@mui/material';
import Container from '@mui/material/Container';
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/Accordian';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import BasicModal from "../components/Modal";


const Tour = () => <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
        Vegas
      </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
    <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor omnis facilis ducimus nisi cumque, blanditiis nostrum eius error rem nulla libero consequatur enim tenetur amet voluptas quibusdam eveniet iusto.
      </Typography>
      </Box>
      <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        Frequently asked questions
      </Typography>
      <CustomizedAccordions/>
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
         
        >
          <BasicModal />
        </BottomNavigation>
      </Paper>
</Container>;

export default Tour
