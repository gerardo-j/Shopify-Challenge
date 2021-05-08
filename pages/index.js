import Wrapper from '../components/Wrapper'
import Loader from '../components/Loader'
import Dashboard from '../components/Dashboard'
import 'firebase/auth'
import 'firebase/firestore';  // This is very important
import { withAuthUser, withAuthUserTokenSSR, AuthAction } from 'next-firebase-auth'

export const getServerSideProps = withAuthUserTokenSSR()(async ({ AuthUser }) => {
  const token = await AuthUser.getIdToken()
  return {
    props: {
      token: token
    }
  }
})

const Home = ({ token }) => {
    return (
      <Wrapper title="Dashboard">
        <Dashboard token={token}/>
      </Wrapper>)
}

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: Loader,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/login'
})(Home)
