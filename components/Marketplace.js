import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import PurchaseButton from '../components/PurchaseButton'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import useStyles from '../styles/Marketplace.module'
import { useAuthUser, withAuthUser } from 'next-firebase-auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Marketplace = ({ album }) => {
  const AuthUser = useAuthUser();
  const classes = useStyles();
  const notify = () => toast.success('Successfully bought for $10', {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });;
  return (
    <>
      <Container maxWidth="lg">
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Avaliable Photos
        </Typography>
      </Container>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          {album.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.thumbnailUrl}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Photo
                  </Typography>
                  <Typography>
                    {card.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <PurchaseButton notify={notify} userId={AuthUser.id} albumId={card.albumId} photoId={card.id} thumbnailUrl={card.thumbnailUrl}/>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <ToastContainer
              position="bottom-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
      />
    </>
  );
}

export default withAuthUser()(Marketplace);