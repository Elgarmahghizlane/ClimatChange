<template>
    <div class="card bg-white shadow-md p-4 rounded-xl">
            <ejs-accumulationchart id='chartcontainer' :title='title' :legendSettings='legendSettings' :tooltip='tooltip'
                enableSmartLables='true' :enableAnimation='enableAnimation' :center='center'>
                <e-accumulation-series-collection>
                    <e-accumulation-series :dataSource='seriesData' :startAngle='startAngle' :endAngle='endAngle'
                        :radius='radius' xName='x' yName='y' :dataLabel='dataLabel' name='Browser' innerRadius='0%'>
                    </e-accumulation-series>
                </e-accumulation-series-collection>
            </ejs-accumulationchart>
    </div>
</template>
<script>
import {
    AccumulationChartPlugin,
    AccumulationTooltip,
    PieSeries,
    AccumulationDataLabel,
    AccumulationLegend,
} from "@syncfusion/ej2-vue-charts";

export default {
    data() {
        return {
            seriesData: [
            { x: 'USA', y: 10.5, text: 'USA <br>10.5mm ' },
                { x: 'China', y: 8.2, text: 'China<br>8.2mm' },
                { x: 'India', y: 7.1, text: 'India<br>7.1mm' },
                { x: 'Brazil', y: 5.5, text: 'Brazil<br>5.5mm' },
                { x: 'Australia', y: 6.8, text: 'Australia<br>6.8mm' },

            ],
            dataLabel: {
                visible: true,
                position: 'Inside', name: 'text',
                font: {
                    fontWeight: '600'
                }
            },
            enableSmartLabels: true,
            enableAnimation: false,
            legendSettings: {
                visible: false,
            },
            tooltip: { enable: false, format: '${point.x} : <b>${point.y}%</b>' },
            startAngle: '0',
            endAngle: '360',
            radius: '70%',
            explodeOffset: '10%',
            explodeIndex: 0,
            center: { x: '50%', y: '50%' },
            title: "Sea Level Rise,"
        };
    },
    provide: {
        accumulationchart: [PieSeries, AccumulationDataLabel]
    }
};
</script>
