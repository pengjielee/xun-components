import { attachPropertiesToComponent } from '../assets/utils';
import SideBar from './SideBar';
import SideBarItem from './SideBarItem';

export default attachPropertiesToComponent(SideBar, { Item: SideBarItem });
