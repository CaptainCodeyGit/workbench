import Page from 'flarum/components/Page';
import WorkbenchModal from './WorkbenchModal';
import SettingsModal from './SettingsModal';
import Button from 'flarum/components/Button';

export default class WorkbenchPage extends Page {
  view() {
    return (
      <div class="WorkbenchPage">
        <div class="Workbench-toolbar">
          {Button.component({
            className: 'Button Workbench-button Workbench-button--add',
            icon: 'fas fa-plus',
            children: 'New extension',
            onclick: () => app.modal.show(new WorkbenchModal({}))
          })}

          {Button.component({
            className: 'Button Workbench-button Workbench-button--add',
            icon: 'fas fa-cog',
            children: 'Configuration',
            onclick: () => app.modal.show(new SettingsModal({}))
          })}
        </div>
      </div>
    );
  }

  config() {

  }
}
