function setLokalisationActive(){
    //Verändere die Klassen, damit das Element active ist
    document.getElementById("icon-lokalisation").src="src/assets/charts/selected-localisation.svg";
    document.getElementById("icon-alter").src="src/assets/charts/unselected-age.png";
    document.getElementById("icon-konsumart").src="src/assets/charts/unselected-konsum.svg";
    document.getElementById("chart-bg").src="src/assets/charts/background-charts-terracotta.svg";

    document.getElementById("btn-lokalisation").className = "btn-chart-selection active active-lokalisation";
    document.getElementById("btn-alter").className = "btn-chart-selection disabled";
    document.getElementById("btn-konsumart").className = "btn-chart-selection disabled";
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
}
