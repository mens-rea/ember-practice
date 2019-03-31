import Component from '@ember/component';

export default Component.extend({
    actions: {
        update(){
            this.get('scheds').pushObject({
                name: this.text,
                count: this.count
            });
        }
    }
});
