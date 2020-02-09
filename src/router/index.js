import Vue from 'vue';
import Router from 'vue-router';
import Clientes from '@/components/Clientes'

Vue.use(Router);

export default new Router({
    routes: {
        path: '/clientes',
        name: 'clientes',
        component: Clientes
    }
});