import TemplateDefault from '../../src/templates/Default';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions
} from '@material-ui/core';

import ButtonAppBar from '../../src/components/Header';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4, 0, 4)
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    buttonAdd: {
        margin: '30px auto',
        display: 'block'
    }

        }))
export default function Home() {
    const classes = useStyles();
  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h2" align='center'>
            Meus Anúncios
        </Typography>
        <Button variant='contained' color='primary' className={classes.buttonAdd}>
            Publicar novo anúncio
        </Button> 
      </Container>
      <Container maxWidth='md'>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia 
                        className={classes.cardMedia}
                        image={'https://source.unsplash.com/random'}
                        title="Título da imagem"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Título do anúncio
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            R$ 100,00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Editar
                        </Button>
                        <Button size="small" color="primary">
                            Excluir
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia 
                        className={classes.cardMedia}
                        image={'https://source.unsplash.com/random'}
                        title="Título da imagem"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Título do anúncio
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            R$ 100,00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Editar
                        </Button>
                        <Button size="small" color="primary">
                            Excluir
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia 
                        className={classes.cardMedia}
                        image={'https://source.unsplash.com/random'}
                        title="Título da imagem"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Título do anúncio
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            R$ 100,00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Editar
                        </Button>
                        <Button size="small" color="primary">
                            Excluir
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardMedia 
                        className={classes.cardMedia}
                        image={'https://source.unsplash.com/random'}
                        title="Título da imagem"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Título do anúncio
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            R$ 100,00
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Editar
                        </Button>
                        <Button size="small" color="primary">
                            Excluir
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}
