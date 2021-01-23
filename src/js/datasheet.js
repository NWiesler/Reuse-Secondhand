Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Jost',
            fontSize: '20px',
        }
    }
});
const chart1 = Highcharts.chart('container', {
    chart: {           
        inverted: true,
    },
    credits: {
        enabled: false
    },
    navigation: {
        buttonOptions: {
            enabled: false
        }
    },
    title: {
        text: ''
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        itemStyle:{
            fontSize: '14px',
        }
    },
    xAxis: {
        categories: [
            'Nicht nur beim Konsum, auch im Alltag wird nachhaltiges Handeln wichtiger.',
            'Gebrauchte Produkte sind gut für die Umwelt.',
            'Gebrauchte Produkte sind für mich eine attraktive Alternative zu neuen Produkten.',
            'Nachhaltiges Handeln im Alltag gewinnt für mich an Bedeutung ',
            'Ich achte im Alltag sehr darauf, Ressourcen zu schonen.',
            'Gebraucht Kaufen wird in Zukunft eine wirtschaftlich bessere Alternative zum Neukauf sein.',
            'Nachhaltig zu konsumieren bedeutet für mich weniger zu kaufen.',
            'Nachhaltig zu konsumieren bedeutet für mich gebrauchte Produkte zu kaufen.',
            'Gebrauchte Produkte sind etwas für Leute, die sich neue Ware nicht leisten können.'
        ],
        crosshair: true, 
        labels:{
            style:{
                fontSize: '14px'
            }
        }           
    },
    yAxis: {
        minorTickInterval: 25,
        tickInterval: 100,
        title: {
            text: 'Zustimmung'
        },
        allowDecimals: false,
        min: 0,
        max: 100,
        labels: {
            formatter: function() {
            return this.value + ' %';
            }
            },  
    },
    tooltip: {
        formatter: function() {
            return this.y + ' %';
        }
    },
    series: [{
        name: 'Unter 30',
        color: '#5F8B96',
        data: [69, 43, 72, 53, 48, 44, 44, 45, 21],
        marker: {
            fillColor: '#ffffff',
            lineColor: null,
            lineWidth: 3,
            radius: 6
        }
    }, {
        name: 'Über 30',
        color: '#265870',
        data: [72, 65, 62, 61, 54, 48, 47, 40, 21],
        marker: {
            symbol: 'circle',
            fillColor: '#FFFFFF',
            lineWidth: 3,
            lineColor: null
        },
    }],
});

const chart2 = Highcharts.chart('container2', {
    chart: {           
        inverted: true,
    },
    credits: {
        enabled: false
    },
    navigation: {
        buttonOptions: {
            enabled: false
        }
    },
    title: {
        text: ''
    },
    legend: {
        align: 'center',
        verticalAlign: 'top',
        itemStyle:{
            fontSize: '14px',
        }
    },
    xAxis: {
        opposite: true,
        categories: [
            'Ich versuche Produkte so lange wie möglich zu nutzen.',
            'Jeder trägt eine eigene Verantwortung, sich nachhaltig zu verhalten.',
            'Ich kann mir vorstellen, in Zukunft häufiger gebrauchte Produkte zu kaufen, um die Umwelt zu schonen.',
            'Mich motiviert es, mich nachhaltig zu verhalten, wenn Personen in meinem dirketen Umfeld dies auch tun.',
            'Ich finde die globale Schüler- und Studenten-Initiative "Fridays for Future" unterstützenswert.',
            'Ich sehe nicht ein, für Umwelt und Klima Abstriche bei meinem Konsumverhalten zu machen.',
            'Mir ist wichtig, immer die neusten Trends und Produkte zu besitzen.',
        ],
        crosshair: true,   
        labels:{
            style:{
                fontSize: '14px'
            }
        }       
    },
    yAxis: {
        minorTickInterval: 25,
        tickInterval: 100,
        title: {
            text: 'Zustimmung'
        },
        allowDecimals: false,
        min: 0,
        max: 100,
        labels: {
            formatter: function() {
            return this.value + ' %';
            }
            },  
    },
    tooltip: {
        formatter: function() {
            return this.y + ' %';
        }
    },
    series: [{
        name: 'Unter 30',
        color: '#5F8B96',
        data: [79, 77, 50, 47, 45, 21, 18],
        marker: {
            fillColor: '#ffffff',
            lineColor: null,
            lineWidth: 3,
        }
    }, {
        name: 'Über 30',
        color: '#265870',
        data: [88 , 83, 46, 44, 38, 14, 10],
        marker: {
            symbol: 'circle',
            fillColor: '#FFFFFF',
            lineWidth: 3,
            lineColor: null
        },
    }],
});

