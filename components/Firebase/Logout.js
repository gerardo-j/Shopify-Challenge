import firebase from 'firebase/app'
import { useRouter } from 'next/router'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListItemText from '@material-ui/core/ListItemText';


const Logout = () => {
  const router = useRouter()
    return (
        <ListItem onClick={ async () => {
          await firebase.auth().signOut()
          router.push('/')
        }} button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    )
}

export default Logout
