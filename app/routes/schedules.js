import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return [{
            name: 'basketball',
            count: 2
        },{
            name: 'programming',
            count: 3
        }]
    }
});
