import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';

export default class SettingsModal extends Modal {
    init() {
        super.init();

        this.src_folder = m.prop('');
    }

    className() {
        return 'WorkbenchModal Modal--small';
    }

    title() {
        return 'Configure your workbench';
    }

    content() {
        return (<div className="Modal-body">
            <div className="Form">{this.fields().toArray()}</div>
        </div>
        );
    }

    fields() {
        const items = new ItemList();

        items.add('name', <div className="Form-group">
            <label>Extension root folder</label>
            <input className="FormControl" placeholder="" value={this.src_folder()} oninput={m.withAttr('value', this.src_folder)} />
        </div>);

        items.add('submit', <div className="Form-group">
            {Button.component({
                type: 'submit',
                className: 'Button Button--primary WorkbenchModal-save',
                children: 'Create'
            })}
        </div>);

        return items;
    }

    onsubmit(e) {
        e.preventDefault();
        // this.loading = true;

        app.request({
            method: 'POST',
            url: app.forum.attribute('apiUrl') + '/workbench/config',
            data: {
                name: this.name(),
            }
        });
    }
}