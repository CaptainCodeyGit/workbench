import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';

export default class WorkbenchModal extends Modal {
    init() {
        super.init();

        this.name = m.prop('');
        this.author = m.prop('');
        this.icon = m.prop('');
        this.color = m.prop('');
        this.description = m.prop('');
        this.background_color = m.prop('');
    }

    className() {
        return 'WorkbenchModal Modal--small';
    }

    title() {
        return 'Create an extension';
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
            <label>Name</label>
            <input className="FormControl" placeholder="" value={this.name()} oninput={m.withAttr('value', this.name)} />
        </div>);

        items.add('author', <div className="Form-group">
            <label>Author</label>
            <input className="FormControl" placeholder="" value={this.author()} oninput={m.withAttr('value', this.author)} />
        </div>);

        items.add('color', <div className="Form-group">
            <label>Icon</label>

            <div class="EditGroupModal-name-input">
                <input className="FormControl" placeholder="Icon" value={this.icon()} oninput={m.withAttr('value', this.icon)} /><br/   >
                <input className="FormControl" placeholder="Color" value={this.color()} oninput={m.withAttr('value', this.color)} />
                <input className="FormControl" placeholder="Background" value={this.background_color()} oninput={m.withAttr('value', this.background_color)} />
            </div>
        </div>);

        items.add('description', <div className="Form-group">
            <label>Description</label>
            <textarea oninput={m.withAttr('value', this.description)}  className="FormControl">{this.description}</textarea>
        </div>);

        items.add('submit', <div className="Form-group">
            {Button.component({
                type: 'submit',
                className: 'Button Button--primary WorkbenchModal-save',
                children: 'Create'
            })}
        </div>,);

        return items;
    }

    onsubmit(e) {
        e.preventDefault();
        // this.loading = true;

        app.request({
            method: 'POST',
            url: app.forum.attribute('apiUrl') + '/workbench',
            data: {
                name: this.name(),
                author: this.author(),
                description: this.description(),
            }
        });
    }
}