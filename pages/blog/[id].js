import {Section} from '@/layouts/section'
import {useRouter} from "next/router";
import styles from './styles.module.scss'
import {GoBack} from "@/components";

export default function () {
    // const router = useRouter()
    const {query} = useRouter() // destructuring

    return (
        <Section title='Blog' pageName='Blog'>
            <GoBack/>
            <div className={styles.blog}>
                <p>Name {query.id}</p>
            </div>
        </Section>
    )
}