import Wrapper from '../components/Wrapper'
import Loader from '../components/Loader'
import Marketplace from '../components/Marketplace'
import { AuthAction, withAuthUser} from 'next-firebase-auth'
import 'firebase/firestore'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    const data = await res.json()

    return {
        props: {
            album: data
        }
    }
}


const marketplace = ({ album }) => {
    return (
        <Wrapper title="Marketplace">
            <Marketplace album={album}/>
        </Wrapper>
    )
}

export default withAuthUser({
    whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
    LoaderComponent: Loader,
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
    authPageURL: '/login'
  })(marketplace)
