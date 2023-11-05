import React from "react";
import ReactApexChart from "react-apexcharts";

export const DateTimeChart = () => {


    // chart option

    let options = {

        chart: {
            id: 'area-datetime',
            type: 'area',
            height: 350,
            zoom: {
                autoScaleYaxis: true
            }
        },
        annotations: {
            yaxis: [{
                y: 30,
                borderColor: 'rgba(153,153,153,0.71)',
                label: {
                    show: true,
                    text: 'Support',
                    style: {
                        color: "#fff",
                        background: '#00E396'
                    }
                }
            }],
            xAxis: [{
                x: new Date('14 Nov 2012').getTime(),
                borderColor: '#999',
                yAxisIndex: 0,
                label: {
                    show: true,
                    text: 'Rally',
                    style: {
                        color: "rgba(26,86,231,0.49)",
                        background: '#775DD0'
                    }
                }
            }]
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
            style: 'hollow',
        },
        xAxis: {
            type: 'datetime',
            min: new Date('01 Mar 2012').getTime(),
            tickAmount: 6,
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.4,
                stops: [0, 100]
            }
        },
        selection: 'one_year',
    }


    let series= [{
        name: 'Credit',
        data: [
            [0,30.95],
            [1,32.61],
            [2,33.01],
            [3,33.55],
            [4,33.18],
            [5,32.84],
            [6,33.84],
            [7,33.39],
            [8,31.46],
            [9,31.27],
            [10,31.43],
            [11,32.26],
            [12,32.79],
            [13,32.46],
            [14,32.13],
        ]
    }]



    return (


        <div id="chart">
            <ReactApexChart
                type="area"
                options={options}
                series={series}
                height={350}
            />
        </div>

    )
}