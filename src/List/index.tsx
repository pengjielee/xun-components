import { attachPropertiesToComponent } from '../utils';
import List from './List';
import ListItem from './ListItem';

export default attachPropertiesToComponent(List, { Item: ListItem });
