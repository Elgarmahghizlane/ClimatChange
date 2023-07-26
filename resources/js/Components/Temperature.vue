<template>
    <div class="card bg-white shadow-md p-4 rounded-xl">
        <ejs-chart :id="chartId" :title="title">
            <e-series-collection>
                <e-series :dataSource="seriesData" type="Bar" xName="x" yName="y" name="Global Temperature"></e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>

import { ChartPlugin, BarSeries } from "@syncfusion/ej2-vue-charts";
export default {
    data() {
        return {
            chartId: "container",
            title: "Global Average Temperature",
            seriesData: [
                { x: 2006, y: 7.8 },
                { x: 2007, y: 7.2 },
                { x: 2008, y: 6.8 },
                { x: 2009, y: 10.7 },
                { x: 2010, y: 10.8 },
                { x: 2011, y: 9.8 }
            ]
        };
    },
    provide: {
        chart: [BarSeries]
    }
};
</script>
