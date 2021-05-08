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

const Marketplace = ({ album }) => {
  const AuthUser = useAuthUser();
  const classes = useStyles();
  return (
    <>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary">
              Avaliable Photos
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {album.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
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
                    <PurchaseButton userId={AuthUser.id} albumId={card.albumId} photoId={card.id} thumbnailUrl={card.thumbnailUrl}/>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </>
  );
}

export default withAuthUser()(Marketplace);