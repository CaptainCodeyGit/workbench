import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Extension extends mixin(Model, {
  name: Model.attribute('name'),
  author: Model.attribute('author'),
}) {}