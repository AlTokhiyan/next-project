import {MainContainer} from '@/layouts/mainContainer'

import '@/styles/main.scss'
import '@/styles/global.scss'
import '@/styles/utility.scss'
import '@/styles/fonts.scss'
import '@/styles/varibles.scss'
export default function App({Component, pageProps}) {
    return (
        <MainContainer>
            <Component {...pageProps} />
        </MainContainer>
    )
}
