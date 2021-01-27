function setLokalisationActive(){
    //Verändere die Klassen, damit das Element active ist
    document.getElementById("icon-lokalisation").src="src/assets/charts/selected-localisation.svg";
    document.getElementById("icon-alter").src="src/assets/charts/unselected-age.png";
    document.getElementById("icon-konsumart").src="src/assets/charts/unselected-konsum.svg";
    document.getElementById("chart-bg").src="src/assets/charts/background-charts-terracotta.svg";

    document.getElementById("btn-lokalisation").className = "btn-chart-selection active active-lokalisation";
    document.getElementById("btn-alter").className = "btn-chart-selection disabled";
    document.getElementById("btn-konsumart").className = "btn-chart-selection disabled";


    const chart1 = Highcharts.chart('container', {
            chart: {           
                inverted: true,
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgba(253, 253, 246, 1)'],
                        [1, 'rgba(253, 249, 246, 0)']
        
                    ]
                },
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
                    'Ich achte im Alltag sehr darauf, Ressourcen zu schonen.',
                    'Nachhaltiges Handeln im Alltag gewinnt für mich an Bedeutung. ',
                    'Nachhaltig zu konsumieren bedeutet für mich weniger zu kaufen.',
                    'Gebrauchte Produkte sind für mich eine attraktive Alternative zu neuen Produkten.',
                    'Gebraucht Kaufen wird in Zukunft eine wirtschaftlich bessere Alternative zum Neukauf sein.',
                    'Nachhaltig zu konsumieren bedeutet für mich gebrauchte Produkte zu kaufen.',
                    'Gebrauchte Produkte sind etwas für Leute, die sich neue Ware nicht leisten können.'
                ],
                crosshair: {
                    width: 75,
                    color: 'rgba(182, 118, 100, 0.1)',
                    
                },
                labels:{
                    style:{
                        fontSize: '16px',
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
                    style:{
                        fontSize: '14px',
                    },
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
                name: 'West',
                color: '#DEB89A',
                lineWidth: 3,
                data: [72, 65, 63, 60, 54, 49, 46, 42, 20],
                marker: {
                    fillColor: '#ffffff',
                    lineColor: null,
                    lineWidth: 3,
                    radius: 6
                }
            }, {
                name: 'Ost',
                color: '#8B4E3E',
                lineWidth: 3,
                data: [69, 60, 53, 56, 49, 42, 47, 38, 25],
                marker: {
                    symbol: 'circle',
                    fillColor: '#FFFFFF',
                    lineWidth: 3,
                    lineColor: null,
                    radius: 6
                },
            }],
        });
    
    const chart2 = Highcharts.chart('container2', {
            chart: {           
                inverted: true,
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgba(253, 253, 246, 1)'],
                        [1, 'rgba(253, 249, 246, 0)']
        
                    ]
                },
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
                    'Ich versuche, Produkte so lange wie möglich zu nutzen.',
                    'Jeder trägt eine eigene Verantwortung, sich nachhaltig zu verhalten.',
                    'Ich kann mir vorstellen, in Zukunft häufiger gebrauchte Produkte zu kaufen, um die Umwelt zu schonen.',
                    'Mich motiviert es, mich nachhaltig zu verhalten, wenn Personen in meinem dirketen Umfeld dies auch tun.',
                    'Ich finde die globale Schüler- und Studenten-Initiative "Fridays for Future" unterstützenswert.',
                    'Ich sehe nicht ein, für Umwelt und Klima Abstriche bei meinem Konsumverhalten zu machen.',
                    'Mir ist wichtig, immer die neuesten Trends und Produkte zu besitzen.',
                ],
                crosshair: {
                    width: 75,
                    color: 'rgba(182, 118, 100, 0.1)',
                    
                },
                labels:{
                    style:{
                        fontSize: '16px',
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
                    style:{
                        fontSize: '14px',
                    },
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
                name: 'West',
                color: '#DEB89A',
                lineWidth: 3,
                data: [87, 84, 47, 45, 40, 14, 11],
                marker: {
                    fillColor: '#ffffff',
                    lineColor: null,
                    lineWidth: 3,
                    radius: 6,
                }
            }, {
                name: 'Ost',
                color: '#8B4E3E',
                lineWidth: 3,
                data: [86 , 77, 44, 44, 36, 20, 13],
                marker: {
                    symbol: 'circle',
                    fillColor: '#FFFFFF',
                    lineWidth: 3,
                    lineColor: null,
                    radius: 6
                },
            }],
        });
}

function setAlterActive(){
    //Verändere die Klassen, damit das Element active ist
    document.getElementById("icon-lokalisation").src="src/assets/charts/unselected-localisation.svg";
    document.getElementById("icon-alter").src="src/assets/charts/selected-age.png";
    document.getElementById("icon-konsumart").src="src/assets/charts/unselected-konsum.svg";
    document.getElementById("chart-bg").src="src/assets/charts/background-charts-blue.svg";

    document.getElementById("btn-lokalisation").className = "btn-chart-selection disabled";
    document.getElementById("btn-alter").className = "btn-chart-selection active active-alter";
    document.getElementById("btn-konsumart").className = "btn-chart-selection disabled";

    const chart1 = Highcharts.chart('container', {
            chart: {           
                inverted: true,
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgba(238, 244, 242, 0.63)'],
                        [1, 'rgba(228, 239, 235, 0.17)']
        
                    ]
                },
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
                    'Ich achte im Alltag sehr darauf, Ressourcen zu schonen.',
                    'Nachhaltiges Handeln im Alltag gewinnt für mich an Bedeutung. ',
                    'Nachhaltig zu konsumieren bedeutet für mich weniger zu kaufen.',
                    'Gebrauchte Produkte sind für mich eine attraktive Alternative zu neuen Produkten.',
                    'Gebraucht Kaufen wird in Zukunft eine wirtschaftlich bessere Alternative zum Neukauf sein.',
                    'Nachhaltig zu konsumieren bedeutet für mich gebrauchte Produkte zu kaufen.',
                    'Gebrauchte Produkte sind etwas für Leute, die sich neue Ware nicht leisten können.'
                ],
                crosshair: {
                    width: 75,
                    color: 'rgba(110, 146, 163, 0.1)',
                    
                },
                labels:{
                    style:{
                        fontSize: '16px',
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
                    style:{
                        fontSize: '14px',
                    },
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
                lineWidth: 3,
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
                lineWidth: 3,
                data: [72, 65, 62, 61, 54, 48, 47, 40, 21],
                marker: {
                    symbol: 'circle',
                    fillColor: '#FFFFFF',
                    lineWidth: 3,
                    lineColor: null,
                    radius: 6
                },
            }],
        });

    const chart2 = Highcharts.chart('container2', {
            chart: {           
                inverted: true,
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgba(238, 244, 242, 0.63)'],
                        [1, 'rgba(228, 239, 235, 0.17)']
        
                    ]
                },
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
                    'Ich versuche, Produkte so lange wie möglich zu nutzen.',
                    'Jeder trägt eine eigene Verantwortung, sich nachhaltig zu verhalten.',
                    'Ich kann mir vorstellen, in Zukunft häufiger gebrauchte Produkte zu kaufen, um die Umwelt zu schonen.',
                    'Mich motiviert es, mich nachhaltig zu verhalten, wenn Personen in meinem dirketen Umfeld dies auch tun.',
                    'Ich finde die globale Schüler- und Studenten-Initiative "Fridays for Future" unterstützenswert.',
                    'Ich sehe nicht ein, für Umwelt und Klima Abstriche bei meinem Konsumverhalten zu machen.',
                    'Mir ist wichtig, immer die neuesten Trends und Produkte zu besitzen.',
                ],
                crosshair: {
                    width: 75,
                    color: 'rgba(110, 146, 163, 0.1)',
                    
                },
                labels:{
                    style:{
                        fontSize: '16px',
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
                    style:{
                        fontSize: '14px',
                    },
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
                lineWidth: 3,
                data: [79, 77, 50, 47, 45, 21, 18],
                marker: {
                    fillColor: '#ffffff',
                    lineColor: null,
                    lineWidth: 3,
                    radius: 6
                }
            }, {
                name: 'Über 30',
                color: '#265870',
                lineWidth: 3,
                data: [88 , 83, 46, 44, 38, 14, 10],
                marker: {
                    symbol: 'circle',
                    fillColor: '#FFFFFF',
                    lineWidth: 3,
                    lineColor: null,
                    radius: 6
                },
            }],
        });

}

function setKonsumartActive(){
    //Verändere die Klassen, damit das Element active ist
    document.getElementById("icon-lokalisation").src="src/assets/charts/unselected-localisation.svg";
    document.getElementById("icon-alter").src="src/assets/charts/unselected-age.png";
    document.getElementById("icon-konsumart").src="src/assets/charts/selected-konsum.svg";
    document.getElementById("chart-bg").src="src/assets/charts/background-charts-forest.svg";

    document.getElementById("btn-lokalisation").className = "btn-chart-selection disabled";
    document.getElementById("btn-alter").className = "btn-chart-selection disabled";
    document.getElementById("btn-konsumart").className = "btn-chart-selection active active-konsumart";

    const chart1 = Highcharts.chart('container', {
            chart: {           
                inverted: true,
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgba(243, 252, 250, 1)'],
                        [1, 'rgba(243, 252, 250, 0)']
        
                    ]
                },
                
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
                    'Ich achte im Alltag sehr darauf, Ressourcen zu schonen.',
                    'Nachhaltiges Handeln im Alltag gewinnt für mich an Bedeutung. ',
                    'Nachhaltig zu konsumieren bedeutet für mich weniger zu kaufen.',
                    'Gebrauchte Produkte sind für mich eine attraktive Alternative zu neuen Produkten.',
                    'Gebraucht Kaufen wird in Zukunft eine wirtschaftlich bessere Alternative zum Neukauf sein.',
                    'Nachhaltig zu konsumieren bedeutet für mich gebrauchte Produkte zu kaufen.',
                    'Gebrauchte Produkte sind etwas für Leute, die sich neue Ware nicht leisten können.'
                ],
                crosshair: {
                    width: 75,
                    color: 'rgba(132, 163, 148, 0.1)', 
                }, 
                labels:{
                    style:{
                        fontSize: '16px'
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
                    style:{
                        fontSize: '14px',
                    },
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
                name: 'Neu-Käufer:innen',
                color: '#AFB878',
                lineWidth: 3,
                data: [67, 55, 28, 53, 58, 35, 50, 25, 27],
                marker: {
                    fillColor: '#ffffff',
                    lineColor: null,
                    lineWidth: 3,
                    radius: 6
                }
            }, {
                name: 'Gebraucht-Käufer:innen',
                color: '#4A6E63',
                lineWidth: 3,
                data: [75, 73, 66, 66, 64, 57, 56, 55, 16],
                marker: {
                    symbol: 'circle',
                    fillColor: '#FFFFFF',
                    lineWidth: 3,
                    lineColor: null,
                    radius: 6
                },
            }],
        });


    const chart2 = Highcharts.chart('container2', {
            chart: {           
                inverted: true,
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgba(243, 252, 250, 1)'],
                        [1, 'rgba(243, 252, 250, 0)']
        
                    ]
                },
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
                    'Ich versuche, Produkte so lange wie möglich zu nutzen.',
                    'Jeder trägt eine eigene Verantwortung, sich nachhaltig zu verhalten.',
                    'Ich kann mir vorstellen, in Zukunft häufiger gebrauchte Produkte zu kaufen, um die Umwelt zu schonen.',
                    'Mich motiviert es, mich nachhaltig zu verhalten, wenn Personen in meinem dirketen Umfeld dies auch tun.',
                    'Ich finde die globale Schüler- und Studenten-Initiative "Fridays for Future" unterstützenswert.',
                    'Ich sehe nicht ein, für Umwelt und Klima Abstriche bei meinem Konsumverhalten zu machen.',
                    'Mir ist wichtig, immer die neuesten Trends und Produkte zu besitzen.',
                ],
                crosshair: {
                    width: 75,
                    color: 'rgba(132, 163, 148, 0.1)', 
                }, 
                labels:{
                    style:{
                        fontSize: '16px'
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
                    style:{
                        fontSize: '14px',
                    },
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
                name: 'Neu-Käufer:innen',
                color: '#AFB878',
                lineWidth: 3,
                data: [86, 83, 30, 42, 33, 16, 12],
                marker: {
                    fillColor: '#ffffff',
                    lineColor: null,
                    lineWidth: 3,
                    radius: 6
                }
            }, {
                name: 'Gebraucht-Käufer:innen',
                color: '#4A6E63',
                lineWidth: 3,
                data: [88 , 83, 63, 48, 45, 14, 10],
                marker: {
                    symbol: 'circle',
                    fillColor: '#FFFFFF',
                    lineWidth: 3,
                    lineColor: null,
                    radius: 6
                },
            }],
        });

}
