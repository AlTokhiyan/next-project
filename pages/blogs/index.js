import styles from './styles.module.scss'
import {Section} from "@/layouts";
import Link from "next/link";

export default function Blogs() {

    const localData = [
        {id: 1, name: 'Name 1'},
        {id: 2, name: 'Name 2'},
        {id: 3, name: 'Name 3'},
        {id: 4, name: 'Name 4'},
        {id: 5, name: 'Name 5'},
    ]

    return (
        <Section title='Blogs' pageName='Blogs'>
            <div className={styles.blogsContainer}>
                {
                    localData.map(item => {
                        return (
                            <Link key={item.id} href={`/blog/${item.id}`} className={styles.blogItem}>
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>
        </Section>
    )
}