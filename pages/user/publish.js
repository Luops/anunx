import TemplateDefault from '../../src/templates/Default';


import { Container, Typography, Box, TextField, Select, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4, 0, 4)
    },
    boxContainer: {
        paddingBottom: theme.spacing(4)
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    }
}))

const Publish = () => {
    const classes = useStyles();

    return (
        <TemplateDefault>
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h2" align='center' color='textPrimarys'>
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" variant="h5" align='center' color='textPrimary'>
                    Quanto mais detalhado, melhor!
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color='textPrimary'>
                        Título do anúncio
                    </Typography>
                    <TextField
                        label="ex.: Casa em Nova Iorque"
                        size='small'
                        fullWidth
                    />
                    <br /><br />
                    <Typography component="h6" variant="h6" color='textPrimary'>
                        Categoria
                    </Typography>
                    <Select
                        native
                        value=''
                        fullWidth
                        onChange={() => { }}
                        inputProps={{
                            name: 'age',
                        }}
                    >
                        <option value=""> Selecione uma categoria </option>
                        <option value={1}>Casa</option>
                        <option value={2}>Apartamento</option>
                        <option value={3}>Terreno</option>
                        <option value={4}>Comércio</option> 
                        <option value={5}>Imóvel</option>
                        <option value={6}>Informática</option>
                        <option value={7}>Eletrônico</option>
                        <option value={8}>Móveis</option>
                        <option value={9}>Outros</option>
                    </Select>
                </Box>
                
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color='textPrimary'>
                      Imagens
                    </Typography>
                    <Typography component="div" variant="body2" color='textPrimary'>
                        A imagem principal será a imagem que aparecerá no seu anúncio.
                    </Typography>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color='textPrimary'>
                      Descrição
                    </Typography>
                    <Typography component="div" variant="body2" color='textPrimary'>
                        Escreva os detalhes do que está vendendo.
                    </Typography>
                    <TextField 
                        multiline
                        rows={6}
                        fullWidth
                        variant='outlined'
                    />
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color='textPrimary' gutterBottom>
                      Dados de contato
                    </Typography>
                    <TextField
                        label="Nome"
                        fullWidth
                        size='small'  
                        variant='outlined'
                    />
                    <br/><br/>
                    <TextField
                        label="E-mail"
                        fullWidth
                        size='small'  
                        variant='outlined'
                    />
                    <br/><br/>
                    <TextField
                        label="Telefone"
                        fullWidth
                        size='small'
                        variant='outlined'
                    />
                    
                </Box>
            </Container>
 
            <Container maxWidth="md" className={classes.boxContainer}>
                <Box>
                    <Button variant='contained' color='primary'>
                        Publicar Anúncio 
                    </Button> 
                </Box>
            </Container>
        </TemplateDefault>
    )
}
export default Publish