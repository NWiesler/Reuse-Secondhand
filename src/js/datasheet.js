Highcharts.chart('container', {
    chart: {        
        inverted: true
    },
    title: {
        text: 'Meinung'
    },
    accessibility: {
        keyboardNavigation: {
            seriesNavigation: {
                mode: 'serialize'
            }
        }
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',


  
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
        ]
        
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
    plotOptions: {
        series:{
            allowPointSelect: true
        },
        area: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Unter 30',
        data: [69, 43, 72, 53, 48, 44, 44, 45, 21]
    }, {
        name: 'Über 30',
        data: [72 , 65, 62, 61, 54, 48, 47, 40, 21]
    }]
});

//Second Chart

Highcharts.chart('container2', {
    chart: {        
        inverted: true
    },
    title: {
        text: 'Meinung'
    },
    accessibility: {
        keyboardNavigation: {
            seriesNavigation: {
                mode: 'serialize'
            }
        }
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',


  
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
        ]
        
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
    plotOptions: {
        series:{
            allowPointSelect: true
        },
        area: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Unter 30',
        data: [69, 43, 72, 53, 48, 44, 44, 45, 21]
    }, {
        name: 'Über 30',
        data: [72 , 65, 62, 61, 54, 48, 47, 40, 21]
    }]
});