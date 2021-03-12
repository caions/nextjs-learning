import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from 'axios'
import {Estilo} from './styled'
import { Button } from '@material-ui/core'

export default function Home({isAuth}) {

  const session = false
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>

        {!isAuth && (  
          <>
          <h1>Você não está logado</h1>
          <button onClick={(e)=>console.log(e)}>Signin</button>
          </>
        )}
        {
          isAuth &&( 
            <>
            <h1 className={styles.title}>
              <Estilo>
            Bem vindo <a>{isAuth[0]}</a>, você esta logado<br/>
              </Estilo>
            <br/>
            </h1>
        <Button variant="contained" color="primary">
          Login
        </Button>
        <br/>
        <Button variant="contained" color="warning">
          Register
        </Button>
        <h1><a href="./teste">teste</a></h1>
        <h1><a href="./table">table</a></h1>
        </>
          )
        }        
        
      </main>

    </div>
  )  
}
export const getServerSideProps = async () =>{
  
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  const data = await response.data

  if(!data)
  return{
    redirect:{
      destination:'/teste'
    }
  }
  return {
    props:{
      isAuth: true
    }
  }
}
