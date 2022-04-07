import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SelfServiceHome from '../SelfServiceHome';
import NewProject from '../Project/NewProject';
import ProjectList from '../project-list';
import ProjectDetailEmpty from '../project-detail-empty';
import ProjectBotsList from '../project-bots-list';
import SingalBotsDetailEmpty from '../singal-bots-detail-empty';
import SingleBotDatasets from '../single-bot-datasets';
import CategoriesListEmpty from '../categories-list-empty';
import CatList from '../categories-list';
import categoryBotsList from '../category-bots-list';
import CategoriesDetailEmpty from '../categories-detail-empty';
import NewCat from '../new-categories';
import NewScarper from '../new-scarper';
import DesignerSimpleFilters from '../designer-simple-filters';
import DesignerSimpleItemPath from '../designer-simple-item-path';
import DesignerSimpleItemPathResult from '../designer-simple-item-path-result';
import DesignerSimpleTestPreview from '../designer-simple-test-preview';


const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route path='/SelfServiceHome' component={SelfServiceHome} />
        <Route path='/new-project' component={NewProject} />
        <Route path='/project-list' component={ProjectList} />
        {/* <Route path='/project-detail-empty' component={ProjectDetailEmpty} /> */}
        {/* <Route path='/project-bots-list' component={ProjectBotsList} /> */}
        {/* <Route path='/singal-bots-detail-empty' component={SingalBotsDetailEmpty} /> */}
        {/* <Route path='/single-bot-datasets' component={SingleBotDatasets} /> */}
        {/* <Route path='/categories-list' component={CatList} />  */}
        {/* <Route path='/categories-list-empty' component={CategoriesListEmpty} /> */}
        {/* <Route path='/categories-detail-empty' component={CategoriesDetailEmpty} />  */}
        {/* <Route path='/new-categories' component={NewCat} /> */}
        {/* <Route path='/category-bots-list' component={categoryBotsList} />    */}
        {/* <Route path='/new-scarper' component={NewScarper} /> */}
        {/* <Route path='/designer-simple-filters' component={DesignerSimpleFilters} />   */}
        <Route path='/designer-simple-item-path' component={DesignerSimpleItemPath } />  
        {/* <Route path='/designer-simple-item-path-result' component={DesignerSimpleItemPathResult } />   */}
        {/* <Route path='/designer-simple-test-preview' component={DesignerSimpleTestPreview } /> */}

      </Switch>

    </section>
  )
}

export default Routes;
