import { attachPropertiesToComponent } from '../utils';
import SideBar from './SideBar';
import SideBarItem from './SideBarItem';

export default attachPropertiesToComponent(SideBar, { Item: SideBarItem });
