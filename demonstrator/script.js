const data = {
    "Produkt": [
        {
            "Nameplate": {
                "Modellbezeichnung": {
                    "value": "Robo Eco",
                    "mappings": [
                        {
                            "textKey": "Modellbezeichnung",
                            "connectionType": "direct",
                            "tooltip": "Direkte Erwähnung des Namens des Roboterarms."
                        }
                    ]
                },
                "Hersteller": "Werk150",
                "Modellnummer": "RECO-2024",
                "Seriennummer": "12345-ECO",
                "Produktionsdatum": "2023-07-15"
            },
            "Identification": {
                "AssetID": "URN:12345:roboteco",
                "Version": "1.0",
                "AASID": "urn:aas:RoboterEco:AAS1"
            },
            "TechnicalData": {
                "Gewicht": {
                    "value": "19 kg",
                    "mappings": [
                        {
                            "textKey": "Gewicht",
                            "connectionType": "direct",
                            "tooltip": "Direkte Erwähnung des Gewichts."
                        }
                    ]
                },
                "Traglast": {
                    "value": "0.5 kg",
                    "mappings": [
                        {
                            "textKey": "Traglast",
                            "connectionType": "direct",
                            "tooltip": "Direkte Erwähnung der Traglast."
                        },
                        {
                            "textKey": "Traglast_semantic",
                            "connectionType": "semantic",
                            "tooltip": "Traglast beeinflusst die Art der Montageaufgaben."
                        }
                    ]
                },
                "Reichweite": {
                    "value": "100-700 mm",
                    "mappings": [
                        {
                            "textKey": "Reichweite",
                            "connectionType": "direct",
                            "tooltip": "Direkte Erwähnung der Reichweite."
                        }
                    ]
                },
                "Wiederholgenauigkeit": {
                    "value": "+/- 0.1 mm",
                    "mappings": [
                        {
                            "textKey": "Wiederholgenauigkeit",
                            "connectionType": "direct",
                            "tooltip": "Direkte Erwähnung der Wiederholgenauigkeit."
                        },
                        {
                            "textKey": "Wiederholgenauigkeit_semantic",
                            "connectionType": "semantic",
                            "tooltip": "Wiederholgenauigkeit beeinflusst die Art der Aufgaben."
                        }
                    ]
                },
                "Freiheitsgrade": {
                    "value": 4,
                    "mappings": [
                        {
                            "textKey": "Freiheitsgrade",
                            "connectionType": "direct",
                            "tooltip": "Direkte Erwähnung der Freiheitsgrade."
                        }
                    ]
                }
            }
        }
    ]
};

const descriptions = {
    "DE": `Der <span class="text-element" data-key="Modellbezeichnung">Robo Eco</span> ist ein hochentwickelter Roboterarm, der speziell für <span class="text-element" data-key="Wiederholgenauigkeit_semantic">präzise Aufgaben</span> entwickelt wurde. Mit einem Gewicht von nur <span class="text-element" data-key="Gewicht">19 kg</span> und einer Traglast von bis zu <span class="text-element" data-key="Traglast">0,5 kg</span> ist der Robo Eco ein kompakter Roboterarm für <span class="text-element" data-key="Traglast_semantic">leichte Montagetätigkeiten</span> und präzise <span class="text-element" data-key="Wiederholgenauigkeit_semantic">Pick-and-Place-Aufgaben</span>. Seine Reichweite von <span class="text-element" data-key="Reichweite">100 bis 700 mm</span> ermöglicht eine effiziente Arbeitsweise in engen Umgebungen. Mit einer Wiederholgenauigkeit von <span class="text-element" data-key="Wiederholgenauigkeit">+/- 0,1 mm</span> und <span class="text-element" data-key="Freiheitsgrade">4 Freiheitsgrade</span> ist er die perfekte Wahl für Präzision auf kleinstem Raum.`,
    "EN": `The <span class="text-element" data-key="Modellbezeichnung">Robo Eco</span> is an advanced robotic arm designed specifically for <span class="text-element" data-key="Wiederholgenauigkeit_semantic">precision tasks</span>. With a weight of only <span class="text-element" data-key="Gewicht">19 kg</span> and a payload of up to <span class="text-element" data-key="Traglast">0.5 kg</span>, the Robo Eco is a compact robotic arm designed for <span class="text-element" data-key="Traglast_semantic">light assembly tasks</span> and precise <span class="text-element" data-key="Wiederholgenauigkeit_semantic">pick-and-place operations</span>. Its reach of <span class="text-element" data-key="Reichweite">100 to 700 mm</span> enables efficient operation in tight spaces. Featuring a repeatability of <span class="text-element" data-key="Wiederholgenauigkeit">+/- 0.1 mm</span> and <span class="text-element" data-key="Freiheitsgrade">4 degrees of freedom</span>, it's the perfect choice for applications requiring precision in confined spaces.`,
    "FR": `Le <span class="text-element" data-key="Modellbezeichnung">Robo Eco</span> est un bras robotique avancé conçu spécifiquement pour <span class="text-element" data-key="Wiederholgenauigkeit_semantic">les tâches de précision</span>. Avec un poids de seulement <span class="text-element" data-key="Gewicht">19 kg</span> et une charge utile allant jusqu'à <span class="text-element" data-key="Traglast">0,5 kg</span>, le Robo Eco est un bras robotique compact conçu pour des <span class="text-element" data-key="Traglast_semantic">tâches d'assemblage légères</span> et des opérations <span class="text-element" data-key="Wiederholgenauigkeit_semantic">de prise et de placement précises</span>. Sa portée de <span class="text-element" data-key="Reichweite">100 à 700 mm</span> permet un fonctionnement efficace dans des espaces restreints. Doté d'une répétabilité de <span class="text-element" data-key="Wiederholgenauigkeit">+/- 0,1 mm</span> et de <span class="text-element" data-key="Freiheitsgrade">4 degrés de liberté</span>, il est le choix parfait pour les applications nécessitant une précision dans les petits espaces.`
};


let currentLang = 'DE';
let tooltipsVisible = true;

document.getElementById('toggle-tooltips').addEventListener('change', function () {
    tooltipsVisible = this.checked;
    if (!tooltipsVisible) {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.opacity = '0';
    }
});

function generateJSONHtml(obj, indentLevel = 0) {
    let html = '';

    if (Array.isArray(obj)) {
        obj.forEach((item) => {
            html += generateJSONHtml(item, indentLevel);
        });
    } else if (typeof obj === 'object' && obj !== null) {
        const keys = Object.keys(obj);
        keys.forEach((key) => {
            html += `<div style="margin-left: ${indentLevel * 15}px;">`;
            if (obj[key] && obj[key].value !== undefined && obj[key].mappings !== undefined) {
                const dataPoint = obj[key];
                const value = dataPoint.value;
                const mappings = dataPoint.mappings;
                const tooltips = mappings.map(m => m.tooltip).join(' | ');
                const connectionTypes = mappings.map(m => m.connectionType).join(',');
                const textKeys = mappings.map(m => m.textKey).join(',');

                html += `<span class="json-key">${key}:</span> <span class="data-point" data-key="${key}" data-text-keys="${textKeys}" data-connection-types="${connectionTypes}" data-tooltips="${tooltips}">${value}</span>`;
            } else {
                html += `<span class="json-key">${key}:</span>`;
                html += generateJSONHtml(obj[key], indentLevel + 1);
            }
            html += `</div>`;
        });
    } else {
        html += `<span class="json-value">${obj}</span>`;
    }

    return html;
}

function displayJSON() {
    const jsonContainer = document.getElementById('json-display');
    const htmlContent = generateJSONHtml(data);
    jsonContainer.innerHTML = htmlContent;

    const dataPoints = document.querySelectorAll('.data-point');
    dataPoints.forEach(dp => {
        dp.addEventListener('mouseenter', handleMouseEnter);
        dp.addEventListener('mousemove', handleMouseMove);
        dp.addEventListener('mouseleave', handleMouseLeave);
    });
}

function displayText(lang) {
    const textContainer = document.getElementById('text-display');
    textContainer.innerHTML = descriptions[lang];
    
    const textElements = document.querySelectorAll('.text-element');
    textElements.forEach(te => {
        te.addEventListener('mouseenter', handleTextMouseEnter);
        te.addEventListener('mouseleave', handleTextMouseLeave);
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    displayText(lang);
    clearLines();
}

function findDataPointByKey(key) {
    return data.Produkte[0].TechnicalData[key] || null;
}

const globalTooltip = document.getElementById('tooltip');

function handleMouseEnter(e) {
    const key = e.target.getAttribute('data-key');
    const textKeys = e.target.getAttribute('data-text-keys').split(',');
    const connectionTypes = e.target.getAttribute('data-connection-types').split(',');
    const tooltips = e.target.getAttribute('data-tooltips').split(' | ');

    e.target.classList.add('highlight');

    textKeys.forEach((textKey, index) => {
        const connectionType = connectionTypes[index];
        const textElements = document.querySelectorAll(`.text-element[data-key="${textKey}"]`);
        textElements.forEach(el => {
            el.classList.add('highlight');
            if (connectionType === 'direct') {
                el.style.backgroundColor = '#f8d7da';
            } else if (connectionType === 'semantic') {
                el.style.backgroundColor = '#d4edda';
            }
        });
    });

    drawLines(e.target, textKeys, connectionTypes);

    if (tooltipsVisible) {
        globalTooltip.innerHTML = tooltips.join('<br>');
        globalTooltip.style.opacity = '1';
    }
}

function handleMouseMove(e) {
    if (tooltipsVisible) {
        globalTooltip.style.left = (e.pageX + 10) + 'px';
        globalTooltip.style.top = (e.pageY + 10) + 'px';
    }
}

function handleMouseLeave(e) {
    const textKeys = e.target.getAttribute('data-text-keys').split(',');

    e.target.classList.remove('highlight');

    textKeys.forEach(textKey => {
        const textElements = document.querySelectorAll(`.text-element[data-key="${textKey}"]`);
        textElements.forEach(el => {
            el.classList.remove('highlight');
            el.style.backgroundColor = '';
        });
    });

    clearLines();

    globalTooltip.style.opacity = '0';
}

function handleTextMouseEnter(e) {
    const textKey = e.target.getAttribute('data-key');
    const dataPoints = document.querySelectorAll(`.data-point[data-text-keys*="${textKey}"]`);

    e.target.classList.add('highlight');

    dataPoints.forEach(dp => {
        dp.classList.add('highlight');
    });

    dataPoints.forEach(dp => {
        const connectionTypes = dp.getAttribute('data-connection-types').split(',');
        const textKeys = dp.getAttribute('data-text-keys').split(',');
        const index = textKeys.indexOf(textKey);
        const connectionType = connectionTypes[index];
        drawLine(dp, e.target, connectionType);
    });
}

function handleTextMouseLeave(e) {
    const textKey = e.target.getAttribute('data-key');
    const dataPoints = document.querySelectorAll(`.data-point[data-text-keys*="${textKey}"]`);

    e.target.classList.remove('highlight');

    dataPoints.forEach(dp => {
        dp.classList.remove('highlight');
    });

    clearLines();

    globalTooltip.style.opacity = '0';
}

function drawLines(dataPointElement, textKeys, connectionTypes) {
    textKeys.forEach((textKey, index) => {
        const textElements = document.querySelectorAll(`.text-element[data-key="${textKey}"]`);
        textElements.forEach(textElement => {
            drawLine(dataPointElement, textElement, connectionTypes[index]);
        });
    });
}

function drawLine(el1, el2, connectionType) {
    const svg = document.getElementById('svg-overlay');
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    const containerRect = document.getElementById('container').getBoundingClientRect();
    
    const x1 = rect1.right - containerRect.left;
    const y1 = rect1.top + rect1.height / 2 - containerRect.top;
    const x2 = rect2.left - containerRect.left;
    const y2 = rect2.top + rect2.height / 2 - containerRect.top;
    
    const dx = (x2 - x1) / 2;
    const dy = Math.min(Math.abs(y2 - y1) / 2, 20); 
    const controlPointX1 = x1 + dx;
    const controlPointY1 = y1 - dy;
    const controlPointX2 = x2 - dx;
    const controlPointY2 = y2 - dy;
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const d = `M ${x1} ${y1} C ${controlPointX1} ${controlPointY1}, ${controlPointX2} ${controlPointY2}, ${x2} ${y2}`;
    path.setAttribute('d', d);
    path.setAttribute('fill', 'none');
    
    if (connectionType === 'semantic') {
        path.setAttribute('stroke', '#28a745');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('stroke-dasharray', '5,5');
    } else if (connectionType === 'direct') {
        path.setAttribute('stroke', '#dc3545');
        path.setAttribute('stroke-width', '2');
    } else {
        path.setAttribute('stroke', 'gray');
        path.setAttribute('stroke-width', '2');
    }
    
    svg.appendChild(path);
}

function clearLines() {
    const svg = document.getElementById('svg-overlay');
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
}

function init() {
    displayJSON();
    displayText(currentLang);
    
    const buttons = document.querySelectorAll('#language-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);

window.addEventListener('resize', () => {
    clearLines();
});

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('data-point')) {
        globalTooltip.style.opacity = '0';
    }
});
