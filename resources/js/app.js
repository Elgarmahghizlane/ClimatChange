import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3';
import App from './App.vue';
import '../css/main.css';
import { registerLicense,loadCldr, setCulture, L10n } from '@syncfusion/ej2-base';
import { ChartPlugin, ChartComponent } from '@syncfusion/ej2-vue-charts';
import { CircularGaugePlugin, CircularGaugeComponent } from '@syncfusion/ej2-vue-circulargauge';
import { LinearGaugePlugin, LinearGaugeComponent } from '@syncfusion/ej2-vue-lineargauge';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCdkx3WmFZfV1gcV9FZ1ZQQmY/P1ZhSXxQdkJhXH5Zc3NUQGZVVUU=')
import { AccumulationChartPlugin, AccumulationChart } from '@syncfusion/ej2-vue-charts';

const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
const plugin = createInertiaApp({
    resolve: (name) => pages[`./Pages/${name}.vue`],
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ChartPlugin)
            .use(CircularGaugePlugin)
            .use(LinearGaugePlugin)
            .use(AccumulationChartPlugin) 
            .mount(el);
    },
});
L10n.load({
    'en-US': {
    }
});

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/en-US/ca-gregorian.json'),
    require('cldr-data/main/en-US/numbers.json'),
    require('cldr-data/main/en-US/timeZoneNames.json'),
);

createApp(App).mount('#app');
