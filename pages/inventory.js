import Wrapper from '../components/Wrapper'
import Loader from '../components/Loader'
import Inventory from '../components/Inventory'
import { AuthAction, withAuthUserTokenSSR, withAuthUser, useAuthUser} from 'next-firebase-auth'


export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
  const token = await AuthUser.getIdToken()
  const response = await fetch('http://localhost:3000/api/getUser', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  })
  const data = await response.json()
  return {
    props: {
      user: data,
      token: token
    }
  }
})

const inventory = ({ user, token }) => {
    const AuthUser = useAuthUser()
    return (
      <Wrapper title="Inventory">
        <Inventory token={token} userId={AuthUser.id} inventory={user.inventory}/>
      </Wrapper>
    )
}

export default withAuthUser({
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: Loader,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/login'
})(inventory)
