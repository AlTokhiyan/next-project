import {Section} from '@/layouts/section'
import {useRouter} from "next/router";
import styles from './styles.module.scss'
import {GoBack} from "@/components";

export default function ({user}) {
    const {query} = useRouter() // destructuring

    return (
        <Section title='User' pageName='User'>
            <GoBack/>
            <div className={styles.user}>
                <p><span>Id: </span> {query.id}</p>
                <p><span>Name: </span> {user.name}</p>
            </div>
        </Section>
    )
}

export const getServerSideProps = async ({params}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
        props: {user}
    }
}