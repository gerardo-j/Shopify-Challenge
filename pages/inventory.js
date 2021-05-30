import Wrapper from '../components/Wrapper'
import Loader from '../components/Loader'
import Inventory from '../components/Inventory'
import { AuthAction, withAuthUserTokenSSR, withAuthUser, useAuthUser} from 'next-firebase-auth'

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
  const userData = await response.json()
  return {
    props: {
      userData
    }
  }
})

const inventory = ({ userData }) => {
    const AuthUser = useAuthUser()
    return (
      <Wrapper title="Inventory">
        <Inventory userData={userData} userId={AuthUser.id} />
      </Wrapper>
    )
}

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: Loader,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/login'
})(inventory)
