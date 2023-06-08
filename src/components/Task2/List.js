import data from './Data';

import Details from './details';
function List({ value, handleEachPlanetClick }) {
  const renderedlist = data.map(item => <Details item={item} />);
  return renderedlist;
}
export default List;
