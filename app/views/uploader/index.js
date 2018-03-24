'use strict';

module.exports = {
  props: ['selectAction'],
  methods: {
    proxyFileInput: function(event) {
      document.getElementById('fileProxyTarget' + this._uid).click();
    }
  },
  template: `
<section style="display:inline-block">
  <input :id="'fileProxyTarget'+_uid" v-on:change="selectAction" type="file" placeholder="Import existing share configurations" style="overflow: hidden; visibility: hidden; display: none" multiple />
  <button class="btn btn-secondary btn-import mt-3 mr-1" v-on:click.prevent="proxyFileInput" href="">Import Config</button>
</section>
  `
}
