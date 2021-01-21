function showLokalisationData(){
    console.log('Die daten werden geändert');
}

document.getElementById('btn-alter').addEventListener('click', () => {
    chart1.series[0].setData([69, 43, 72, 53, 48, 44, 44, 45, 21]);
    chart1.series[1].setData([72, 65, 62, 61, 54, 48, 47, 40, 21]);

    chart2.series[0].setData([79, 77, 50, 47, 45, 21, 18]);
    chart2.series[1].setData([88 , 83, 46, 44, 38, 14, 10]);
});

document.getElementById('btn-lokalisation').addEventListener('click', () => {
    chart1.series[0].setData([8 , 12, 4, 80, 38, 14, 10]);
    chart1.series[1].setData([8 , 0, 4, 80, 38, 14, 10]);

    chart2.series[0].setData([8 , 12, 4, 80, 38, 14, 10]);
    chart2.series[1].setData([8 , 0, 4, 80, 38, 14, 10]);

    chart1.series[0].graph.attr('stroke', 'red')
});

document.getElementById('btn-konsumart').addEventListener('click', () => {
    chart1.series[0].setData([8 , 0, 4, 80, 38, 14, 10]);
    chart1.series[1].setData([8 , 0, 4, 80, 38, 14, 10]);

    chart2.series[0].setData([8 , 0, 4, 80, 38, 14, 10]);
    chart2.series[1].setData([8 , 0, 4, 80, 38, 14, 10]);

    chart2.series[0].graph.attr('stroke', 'blue')
});