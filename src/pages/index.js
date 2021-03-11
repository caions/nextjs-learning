import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import axios from 'axios'
import teste from "./teste"
import {Estilo} from './styled'

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
        <a href="./teste">teste</a>
            <button onClick={((e)=>e.target(teste))}>Sign Out</button>
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
