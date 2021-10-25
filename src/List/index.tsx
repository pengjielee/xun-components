import { attachPropertiesToComponent } from '../assets/utils';
import List from './List';
import ListItem from './ListItem';

export default attachPropertiesToComponent(List, { Item: ListItem });
