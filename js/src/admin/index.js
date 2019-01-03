import app from 'flarum/app';
import { extend } from 'flarum/extend';

import AdminNav from 'flarum/components/AdminNav';
import AdminLinkButton from 'flarum/components/AdminLinkButton';
import Extension from '../common/models/Extension';
import WorkbenchPage from './components/WorkbenchPage';

app.initializers.add('captaincodey-workbench', () => {
  app.store.models.captainc_extensions = Extension;

  app.routes.workbench = {
    path: '/workbench',
    component: WorkbenchPage.component()
  };

  extend(AdminNav.prototype, 'items', items => {
    items.add('workbench', AdminLinkButton.component({
      href: app.route('workbench'),
      icon: 'fas fa-hammer',
      children: 'Workbench',
      description: 'Create a fully functional extension in a matter of minutes'
    }));
  });
});
