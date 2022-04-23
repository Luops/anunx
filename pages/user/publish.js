import TemplateDefault from '../../src/templates/Default';
import { useState } from 'react';

import { Container,
         Typography, 
         Box, 
         TextField, 
         Select, 
         Button, 
         IconButton } from '@material-ui/core';

import { useDropzone } from 'react-dropzone';  
import { makeStyles } from '@material-ui/core/styles';
import { DeleteForever } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    mainImage: {
    },
    mask: {
 }, 
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
    },
    thumbsContainer: {
        display: 'flex',
        marginTop: 15,
        flexWrap: 'wrap',
    },
    dropZone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
        margin: '0 15px 15px 0',
        width: 200,
        height: 150,
        backgroundColor: theme.palette.background.default,
        border: '2px dashed black',
    },
    thumb: {
        position: 'relative',  
        width: 200,
        height: 150,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        margin: '0 15px 15px 0',

        '& $mainImage': {
            backgroundColor: 'blue',
            padding: '6px 10px',
            position: 'absolute',
            bottom: 0,
            left: 0,
        },
        '&:hover $mask': {
            display: 'flex',
        },

        '& $mask': {
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            height: '100%',
            width: '100%',
        },
    },
})) 

const Publish = () => {
    const classes = useStyles();
    const [files, setFiles] = useState([]); {/*Criar estado para guardar imagens*/}

    const { getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFile) => {
            {/*Aqui vai ser adicionado o arquivo no estado*/}
                const newFiles = acceptedFile.map(file => {
                    {/*Aqui cria o objeto*/}
                    return Object.assign(file, { 
                        preview: URL.createObjectURL(file)
                    })
            })
            setFiles([
                ...files,
                ...newFiles
                ])
        }
    })

    return (
        <TemplateDefault>
                {/*Título da página*/}
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h2" align='center' color='textPrimarys'>
                    Publicar Anúncio
                </Typography>
                <Typography component="h5" variant="h5" align='center' color='textPrimary'>
                    Quanto mais detalhado, melhor!
                </Typography>
            </Container>
                {/*Títlo e Categoria do Anúncio*/}
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
                {/*Imagens do anúncio*/}
            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color='textPrimary'>
                      Imagens
                    </Typography>
                    <Typography component="div" variant="body2" color='textPrimary'>
                        A imagem principal será a imagem que aparecerá no seu anúncio.
                    </Typography>
                    <Box className={classes.thumbsContainer}>
                        <Box className={classes.dropZone} {...getRootProps()}> {/*Área arrastavel/clicavel para imagens*/}
                            <input {...getInputProps()} />  {/*Habilita a Área arrastavel/clicavel para imagens*/}
                            <Typography variant='body2' color='textPrimary'>
                               Clique para adicionar uma imagem ou arraste aqui.
                            </Typography>
                        </Box>

                        {files.map((file, index) => (
                                <Box 
                                    key={file.name}
                                    className={classes.thumb} 
                                     style={{ backgroundImage: `url(${file.preview})` }}
                                >
                                {
                                    index === 0 ?
                                    <Box className={classes.mainImage}>
                                        <Typography variant='body' color='secondary'>
                                            Principal
                                        </Typography>
                                    </Box>    
                                    : null
                                }
                                <Box className={classes.mask}>
                                    <IconButton color='secondary'>
                                        <DeleteForever fontSize='large'/> 
                                    </IconButton>
                                </Box>
                            </Box>
                        ))
                        }
                    </Box>
                </Box>
            </Container>
                {/*Descrição do anúncio*/}
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
                {/*Dados do anunciante*/}
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
                {/*Botão de publicar*/}
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