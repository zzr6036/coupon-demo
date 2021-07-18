import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

function HomePage(props) {
  const [isAuth, setIsAuth] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (isAuth) {
      router.push('/coupon')
    }
  }, [isAuth])

  return (
    <div className={styles.container}>
      <p>Redirecting...</p>
    </div>
  )
}

export default HomePage



// import Head from 'next/head'
// import Link from 'next/link'
// import styles from '../../styles/Home.module.css'

// function HomePage(props) {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Welcome to My Coupon</title>
//       </Head>
//       <main className={styles.description}>
//         <div className={styles.grid}>
//           <Link href="/coupon"><a>Get Coupon List</a></Link>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default HomePage
