import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { useRef, useEffect, useState } from 'react'
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
import Button from 'react-bootstrap/Button'
import { useRouter } from 'next/router'


export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const router = useRouter()

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE,
          color: 0x14b679,
          backgroundColor: 0x15173c,
          maxDistance: 34.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleClick = () => {
    router.push('/LoginPage')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fly Sense</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} ref={vantaRef}>
        <div className="title-intro">
          Fly<span>Sense</span>
        </div>
        <div className={styles.div}>
          <Button variant="outline-primary" onClick={handleClick}>Entra</Button>{' '}
        </div>  
      </main>
      <style jsx>{`
        .title-intro {
          font-size: 40px;
          color: #328dd8;
          margin: 20px;
        }
        span {
          color: #2271b3;
        }
      `}</style>
    </div>
  )
}
