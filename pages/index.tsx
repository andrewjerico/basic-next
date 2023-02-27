import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from "../components/Header"
import Footer from '@/components/Footer'
import Layout from '@/components/Layout'


export default function Home() {
  return (
      <Layout pageTitle='Home Page'>
        <Image src={"/pinocchio.jpg"} width={200} height={300} alt="pinocchio"/>
        <h1 className={styles['title-home']}>Welcome Andrew</h1>
      </Layout>
    
  )
}
