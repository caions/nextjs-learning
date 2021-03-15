import { Button, Typography, useTheme } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

export default function tema(){
  const tema = useTheme()
  return(
    <>
    <h1>Tema</h1>
    <Button 
        variant="contained"
        color="primary"
        startIcon={<DeleteIcon />}  
      >
        Delete
      </Button>
      <Typography 
      variant="h1"
      //color="info"
      style={{"color":"blue"}}
      //style={tema.enggaji.cor1}
      >
        texto
      </Typography>
    </>
  )
}