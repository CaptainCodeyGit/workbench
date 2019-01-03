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
        return 'WorkbenchModal Modal--medium';
    }

    title() {
        return 'Create an extension';
    }

    content() {
        return (<div className="Modal-body">
            <ul class="Modal-nav">
                <li class="Modal-tab Modal-tab--active">General</li>
                <li class="Modal-tab">Details</li>
            </ul>
            <div className="Form">
                {this.fields().toArray()}
            </div>
        </div>
        );
    }

    fields() {
        const items = new ItemList();

        items.add('name', <div class="Form-inline">
            <div className="Form-group Form-group--half">
                <label>Name</label>
                <input className="FormControl" placeholder="" value={this.name()} oninput={m.withAttr('value', this.name)} />
            </div>

            <div className="Form-group Form-group--half">
                <label>Author</label>
                <input className="FormControl" placeholder="" value={this.author()} oninput={m.withAttr('value', this.author)} />
            </div>
        </div>);

        items.add('namespace', <div class="Form-inline">
            <div className="Form-group Form-group--half">
                <label>Extension namespace</label>
                <p>A namespace can only contain latin letters and numbers and can only start with a letter.</p>
                <input className="FormControl" placeholder="Marketplace" value={this.name()} oninput={m.withAttr('value', this.name)} />
            </div>

            <div className="Form-group Form-group--half">
                <label>Author namespace</label>
                <p>The namespace can not be changed with Workbench after you have created the extension.</p>

                <input className="FormControl" placeholder="JohnDoe" value={this.author()} oninput={m.withAttr('value', this.author)} />
            </div>
        </div>);

        items.add('color', <div className="Form-group">
            <label>Icon</label>
            <p>Enter the name of any FontAwesome icon class, including the fas fa- prefix.</p>
            <input className="FormControl" placeholder="fas fa-broom" value={this.icon()} oninput={m.withAttr('value', this.icon)} /><br />

            <div class="Form-inline">
                <div className="Form-group Form-group--half">
                    <input className="FormControl" placeholder="#ffffff" value={this.color()} oninput={m.withAttr('value', this.color)} />
                </div>

                <div className="Form-group Form-group--half">
                    <input className="FormControl" placeholder="#b72a2a" value={this.background_color()} oninput={m.withAttr('value', this.background_color)} />
                </div>
            </div>
        </div>);

        items.add('description', <div className="Form-group">
            <label>Description</label>
            <textarea oninput={m.withAttr('value', this.description)} className="FormControl">{this.description}</textarea>
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
            url: app.forum.attribute('apiUrl') + '/workbench',
            data: {
                name: this.name(),
                author: this.author(),
                description: this.description(),
            }
        });
    }
}