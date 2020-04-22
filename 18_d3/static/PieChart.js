// NoBrim
// Joseph Yusufov
// Ahmed Sultan
// Vishwaa Sofat
// 2020 - 04 - 22

fetch("https://data.cityofnewyork.us/api/views/ihfw-zy9j/rows.json?accessType=DOWNLOAD")
    .then(response => {
        return response.json();
    }).then((data) => {
        process(data);
    });

const process = (data) => {
    // HELPER FUNCTIONS
    const getByYear = (schoolYear) => data.data.filter(datum => datum[10] == schoolYear)
    const filterByDistrict = (district, data) => {
        return(data.filter(datum => {
            // console.log(datum[8]);
            return(datum[8].substring(0,2) == district);
        }));
    };
    // console.log(data.data)
    // console.log(filterByDistrict('01', getByYear('20052006')))
    const getPercentageByRace = (race, data) => {
        const raceIndex = (raceParam => ({
                'a': 35,
                'b': 37,
                'h': 39,
                'w': 41
        }[raceParam]))(race);
        return d3.mean(data.map((d => d[raceIndex])));
    }

    const getRaceSummary = (data) => {
        const summary = [
            { group: 'Asian', value: getPercentageByRace('a', data)},
            { group: 'Black', value: getPercentageByRace('b', data) },
            { group: 'Hispanic', value: getPercentageByRace('h', data) },
            { group: 'White', value: getPercentageByRace('w', data) },
        ]
        // summary['sum'] = d3.sum(Object.values(summary));
        return summary;
    };


    var race1 = getRaceSummary(getByYear('20102011'));

    console.log(getRaceSummary(filterByDistrict('06', getByYear('20072008'))));

    ///////////
    ///////////
    ///////////

    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 70, left: 60 },
        width = 700 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // X axis
    var x = d3.scaleBand()
        .range([0, width])
        .domain(race1.map(function (d) { return d.group; }))
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 75])
        .range([height, 0]);
    svg.append("g")
        .attr("class", "myYaxis")
        .call(d3.axisLeft(y));

    var currentYear = 0;
    var currentDistrict = '01';
    var yearObj = {
        0: '20052006',
        1: '20062007',
        2: '20072008',
        3: '20082009',
        4: '20092010',
        5: '20102011',
        6: '20112012'
    };

    const render = document.getElementById('render').addEventListener('click', () => {
        update(getRaceSummary(filterByDistrict(currentDistrict, getByYear(yearObj[currentYear]))));
        document.getElementById('year').innerHTML = yearObj[currentYear];
    });

    const nextButton = document.getElementById('next').addEventListener('click', () => {
        if(currentYear != 6){
            currentYear++;
            update(getRaceSummary(filterByDistrict(currentDistrict, getByYear(yearObj[currentYear]))));
            document.getElementById('year').innerHTML = yearObj[currentYear];
        };
    });
    const lastButton = document.getElementById('last').addEventListener('click', () => {
        if (currentYear != 0) {
            currentYear--;
            update(getRaceSummary(filterByDistrict(currentDistrict, getByYear(yearObj[currentYear]))));
            document.getElementById('year').innerHTML = yearObj[currentYear];
        };
    });

    const selectDistrict = document.getElementById('district-select').addEventListener('change', (e) => {
        currentDistrict = e.target.options[e.target.selectedIndex].innerHTML;
        console.log(currentDistrict);
        update(getRaceSummary(filterByDistrict(currentDistrict, getByYear(yearObj[currentYear]))));
    });

    function update(data) {

        var u = svg.selectAll("rect")
            .data(data)

        u
            .enter()
            .append("rect")
            .merge(u)
            .transition()
            .duration(500)
            .attr("x", function (d) { return x(d.group); })
            .attr("y", function (d) { return y(d.value); })
            .attr("width", x.bandwidth())
            .attr("height", function (d) { return height - y(d.value); })
            .attr("fill",  ('#' + Math.floor(Math.random() * 16777215).toString(16)))

        console.log(data);
    }

    // Initialize the plot with the first dataset
};
