import Page from 'flarum/components/Page';
import WorkbenchModal from './WorkbenchModal';
import SettingsModal from './SettingsModal';
import Button from 'flarum/components/Button';

export default class WorkbenchPage extends Page {
  view() {
    const extensions = app.store.all('captainc_extensions');

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
            className: 'Button Workbench-button Workbench-button--config',
            icon: 'fas fa-cog',
            children: 'Configuration',
            onclick: () => app.modal.show(new SettingsModal({}))
          })}
        </div>

        <div class="Workbench-extensions">
          {
            extensions.map(extension => (
              <button class="Button Workbench-extension">
                <span class="Badge Badge--group--1 Extension-icon" style="background-color: rgb(183, 42, 42);">
                  <i class="icon fas fa-wrench Badge-icon"></i>
                </span>
                <span class="Extension-name">{extension.name()}</span>
              </button>
            ))
          }
        </div>
      </div>
    );
  }

  config() {

  }
}
