import Wrapper from '../components/Wrapper'
import Loader from '../components/Loader'
import Dashboard from '../components/Dashboard'
import 'firebase/auth'
import 'firebase/firestore';  // This is very important
import { withAuthUser, withAuthUserTokenSSR, AuthAction } from 'next-firebase-auth'

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
  const token = await AuthUser.getIdToken()
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/getUser`, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  })
  const data = await response.json()
  return {
    props: {
      balance: data.balance,
      token
    }
  }
})

const Home = ({ balance }) => {
    return (
      <Wrapper title="Dashboard">
        <Dashboard balance={balance}/>
      </Wrapper>)
}

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: Loader,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Home)
