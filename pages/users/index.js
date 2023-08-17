import {useEffect, useState} from "react";
import styles from './styles.module.scss'
import {Section} from "@/layouts";
import Link from 'next/link'

export default function Users({users}) {

    // Changes Users in Client but Don't change in users in Server
    /*
     const [users, setUsers] = useState([
         {id: 1, name: 'Name 1'},
         {id: 2, name: 'Name 2'},
         {id: 3, name: 'Name 3'},
     ])
       useEffect(() => {
             async function fetchData() {
                 try {
                     const response = await fetch('https://jsonplaceholder.typicode.com/users');
                     const data = await response.json();
                     setUsers(data)
                 } catch (error) {
                     console.error('Error fetching data: ', error)
                 }
             }

             fetchData()
         }, [])*/

    return (
        <Section title='Users' pageName='Users'>
            <div className={styles.content}>
                <h2 className={styles.name}>Name</h2>
                {users?.map(item => {
                    return (
                        <Link href={`/user/${item.id}`} key={item.id} className={styles.userItem}>
                            <p><span>{item.id + ". "}</span>{item.name}</p>
                        </Link>
                    )
                })}
            </div>
        </Section>
    )
}

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return {
        props: {users}
    }
}