import { useUser } from "../../firebase/useUser"
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListItemText from '@material-ui/core/ListItemText';


const Logout = () => {
    const { logout } = useUser()

    return (
        <ListItem onClick={logout} button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItem>
    )
}

export default Logout
