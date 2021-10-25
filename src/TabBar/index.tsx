import { attachPropertiesToComponent } from '../utils';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';

export default attachPropertiesToComponent(TabBar, { Item: TabBarItem });
