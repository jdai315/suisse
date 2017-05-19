//Credit Suisse - "Code Suisse"
//May 18-19, 2017
//Project 4 - "Money Manager"
//Mentor: Matias Leone <matias.leone@credit-suisse.com>
//Team Name: "Suisse Army Knives"
//Jerry Dai
//Sumin Kim
//Mcvvina Lin



//----- PROJECT 4 - MONEY MANAGER -----//

//Global variable for required portfolio return of all companies
var REQUIRED_RETURN = 0.12;

//Global variables to keep track of companies' information
var companies_values = [];
var dif_values = [];
var low_values = [];
var prev_values = [];
var temp_values = [];


//Main function
function main() {

    //Global variable "HISTORICAL_PRICES" contains all the data

    //Access a given row
    var rowIndex = 100;
    var firstRow = HISTORICAL_PRICES[rowIndex];
    
    //Data inside a single row
    var ticker = firstRow[0];
    var date = firstRow[1];
    var quote = firstRow[2];

    //Get list of all unique companies in the data
    var companies = {};
    for(var i = 0; i < HISTORICAL_PRICES.length; i++) {
	var ticker = HISTORICAL_PRICES[i][0];
	companies[ticker] = true;
    }
    
    //Print list
    document.write("<center>LEVEL 1</center>");
    document.write("<BR>");
    document.write("<h1><center>Summary of Returns and Volatilities of All the Companies</h1></center><BR>");

     /*---------------------------------------------------------*/

    //Level 1
    //Calculate the values for each formula for each company
    document.write("<BR><table style='width:100%' border='1'><TR><TH>Company Name</TH><TH>Annual Average Return</TH><TH>Annual Volatility</TH></TR>");
    for(company in companies) {
	var sum_return_month = 0;
	var months_count = 0;
	var return_months = [];
	for (var i = 0; i < HISTORICAL_PRICES.length; i++) {
	    //each line of data
	    if (company == HISTORICAL_PRICES[i][0]) { 
		if (months_count != 0) {
		    var price_month_2 = HISTORICAL_PRICES[i][2];
		    var price_month_1 = HISTORICAL_PRICES[i - 1][2];
		    var return_month = (price_month_2 - price_month_1) / price_month_1 * 100;
		    return_months.push(return_month);
		    sum_return_month += return_month;
		}
		months_count++;
	    }
	}

	//Monthly average return
	var monthly_avg_return = sum_return_month / (months_count - 1);

	//Annual average return
	var annual_avg_return = monthly_avg_return * 12;

	//Monthly variance
	var monthly_variance = 0;
	for (var i = 0; i < return_months.length; i++) {
	    monthly_variance += Math.pow((return_months[i] - monthly_avg_return), 2);
	}
	monthly_variance /= (months_count - 1);

	//Monthly volatility
	var monthly_volatility = Math.sqrt(monthly_variance);

	//Annual volatility
	var annual_volatility = monthly_volatility * Math.sqrt(12);

	//For each company, create an array of its information to add to a master list of company information, called companies_values
	var company_value = [];
	company_value[0] = company;
	company_value[1] = return_months;
	company_value[2] = monthly_avg_return;
	company_value[3] = months_count;
	company_value[4] = monthly_volatility;
	company_value[5] = annual_avg_return;
	company_value[6] = annual_volatility;
	company_value[7] = true;
	company_value[8] = 0;

	//Add the company to the master list (global variable companies_values)
	companies_values.push(company_value);
	//Print the company information for level 1
	document.write("<TR><TD>" + company + "</TD><TD>" + annual_avg_return.toFixed(2) + "%" + "</TD><TD>" + annual_volatility.toFixed(2) + "%" + "</TD></TR>");
    }
    document.write("</table><h1><center>Correlation Factors of All the Companies</center></h1>");

    //Use the correlation function to calculate correlation factors for all combinations of the companies, print the results for level 1
    for (company in companies) {
	document.write("<table width='100%' border='1'><tr><th>Company 1</th><th>Company 2</th><th>Correlation Factor</th></tr>");
    	for(company2 in companies) {
    	    document.write("<tr><td>" + company + "</td><td>" + company2 + "</td><td>" + correlation(company, company2).toFixed(2) + "</td></tr>");
    	}
	document.write("</table>");
    }

    //Level 2
    //Calculate portfolio return
    document.write("<BR>");
    document.write("<BR>");
    document.write("<center>LEVEL 2</center>");
    document.write("<BR>");
    document.write("<h1><center>Four Portfolios of Apple and Ford</h1></center>");
    document.write("<BR><table style='width:100%' border='1'><tr><th>Portfolio</th><th>Weight of Apple</th><th>Weight of Ford</th><th>Return of Portfolio</th></tr>");
    

    //P1: 100% Apple, 0% Ford
    document.write("<tr><td>Portfolio 1</td><td>100%</td><td>0%</td>");
    document.write("<td>" + portfolio_return('AAPL','F',1.0,0.0).toFixed(2) + "%</td></tr>");

    //P2: 50% Apple, 50% Ford
    document.write("<tr><td>Portfolio 2</td><td>50%</td><td>50%</td>");
    document.write("<td>" + portfolio_return('AAPL','F',0.5,0.5).toFixed(2) + "%</td></tr>");

    //P3: 75% Apple, 25% Ford
    document.write("<tr><td>Portfolio 3</td><td>75%</td><td>25%</td>");
    document.write("<td> " + portfolio_return('AAPL','F',0.75,0.25).toFixed(2) + "%</td></tr>");

    //P4: 0% Apple, 100% Ford
    document.write("<tr><td>Portfolio 4</td><td>0%</td><td>100%</td>");
    document.write("<td>" + portfolio_return('AAPL','F',0.0,1.0).toFixed(2) + "%</td></tr>");
    document.write("</table><BR>");
    document.write("<BR>");
    document.write("<BR>");

     /*---------------------------------------------------------*/
    

    //Level 5
    //Algorithm for finding least risky portfolio for all input companies
    document.write("<center>LEVEL 5</center>");
    document.write("<BR>");
    document.write("<h1><center>Weighted Average Portfolio of All the Companies</center></h1>");
    document.write("<BR>");

    //First, calculate the portfolio with equal weightings as a reference point
    var vol = volatility_algorithm();
    var ret = return_algorithm();

    document.write("<h2>Equally Weighted Portfolio (as reference)</h2>");
    document.write("Average annual return of portfolio: " + ret.toFixed(2) + "%");
    document.write("<BR>");
    document.write("Annual volatility of portfolio: " + vol.toFixed(2) + "%");
    document.write("<BR>");
    document.write("<BR>");

    //Use the low_return and low_algorithm functions to start finding a better mix in the portfolio
    var cor = correlate(low_volatility());
    low_array(cor);
    low_return();
    low_algorithm();

    companies_values = low_values;

    //Use the hilo_return and hilo_algorithm functions to further improve the mix of securities, until the lowest risk is achieved
    var hilo_ret = hilo_return(low_volatility(), high_volatility());
    var hilo_vol = hilo_algorithm(low_volatility(), high_volatility());

    prev_values = companies_values;

    while( (hilo_vol <= vol) && (ret >= (REQUIRED_RETURN * 100)) ){
	ret = hilo_ret;
	vol = hilo_vol;
	prev_values = companies_values;
	// console.log(ret);
	// console.log(vol);
	// console.log(prev_values);
	hilo_ret = hilo_return(low_volatility(), high_volatility());
	hilo_vol = hilo_algorithm(low_volatility(), high_volatility());	
    }

    //print the usage of each security of the portfolio
    for(var i = 0; i < temp_values.length ; i++){
	companies_values.push(temp_values[i]);
    }

    document.write("<h2>Lowest Risk, Above Required Return Portfolio</h2>");
    document.write("<h4>HIGH LOW, LOW RISK CORRELATE PORTFOLIO</h4>");
    document.write("Lowest volatility stock: " + low_volatility());
    document.write("<BR>");
    document.write("Highest volatility stock: " + high_volatility());
    document.write("<BR>");
    document.write("<BR>");

    document.write("Average annual return of portfolio: <b>" + ret.toFixed(2) + "%</b>");
    document.write("<BR>");
    document.write("<BR>");
    document.write("Annual volatility of portfolio: <b>" + vol.toFixed(2) + "%</b>");
    document.write("<BR>");
    document.write("<BR>");	    
    value_print();

    /*---------------------------------------------------------*/
    
    document.write("<BR>");
    document.write("<center>LEVEL 4</center>");
    document.write("<h1><center>All Combinations of Portfolios of Apple and Ford</center></h1>");

    var multiple_portfolios = [];
    for (var i = 0; i <= 100; i++) { //each percentage
    	var this_portfolio = [];
    	var w_AAPL = (100 - i) / 100;
    	var w_F = i / 100;
    	var avg_return = portfolio_return('AAPL', 'F', w_AAPL, w_F) / 100;
    	var ann_volatility = portfolio_volatility_2('AAPL', 'F', w_AAPL, w_F) / 100;
    	this_portfolio.push(ann_volatility);
    	this_portfolio.push(avg_return);
    	this_portfolio.push(w_AAPL);
    	this_portfolio.push(w_F);
    	multiple_portfolios.push(this_portfolio);
    }
    
    //set dimensions of graph
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

    //set the ranges
    var x = d3.scale.linear().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);

    //define axes
    var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom")
	.tickFormat(d3.format("%"));

    var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")
	.tickFormat(d3.format("%"));

    //define the line
    var line = d3.svg.line()
	.x(function(d) { return x(d.vola); })
	.y(function(d) { return y(d.retu); });

    //add the svg canvases
    var svg = d3.select("body").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //map data onto variables
    var data = multiple_portfolios.map(function(d) {
	return {
            vola: d[0],
            retu: d[1]
	};
	
    });

    //scale range of data
    x.domain(d3.extent(data, function(d) { return d.vola; }));
    y.domain(d3.extent(data, function(d) { return d.retu; }));

    //add the x axis
    svg.append("g")
	.attr("class", "x-axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis)
	.append("text")
	.attr("y", -6)
	.attr("x", 800)
	.text("Volatility (%)");

    //add the y axis
    svg.append("g")
	.attr("class", "y-axis")
	.call(yAxis)
	.append("text")
	.attr("transform", "rotate(-90)")
	.attr("y", 6)
	.attr("dy", ".71em")
	.style("text-anchor", "end")
	.text("Return (%)");

    //add the path
    svg.append("path")
	.datum(data)
	.attr("class", "line")
	.attr("d", line);

     /*---------------------------------------------------------*/
    
    
    document.write("<BR>");
    document.write("<BR>");
    document.write("<BR>");
    document.write("<center>LEVEL 3</center>");
    document.write("<h1><center>Interactive Portfolio of Apple and Ford</center></h1>");
    document.write("<BR>");

     /*---------------------------------------------------------*/
    
    
}

//Function to calculate correlation of two companies, named 'a' and 'b'
function correlation(a, b) {
    var covariance = 0;
    if (a == b) {
 	return 1;
    } else {
	var a_index = -1;
	var b_index = -1;
	for(var i = 0; i < companies_values.length; i++){
	    if(companies_values[i][0] == a){
		a_index = i;
	    }
	    if(companies_values[i][0] == b){
		b_index = i;
	    }
	}
	var a_return_months = companies_values[a_index][1];
	var b_return_months = companies_values[b_index][1];
	var a_month_avg_return = companies_values[a_index][2];
	var b_month_avg_return = companies_values[b_index][2];
	var months_count = companies_values[a_index][3];
	var a_monthly_volatility = companies_values[a_index][4];
	var b_monthly_volatility = companies_values[b_index][4];

	var covariance = 0;
	for(var i = 0; i < months_count-1; i++){
	    covariance += (a_return_months[i] - a_month_avg_return) * (b_return_months[i] - b_month_avg_return);
	}
	covariance /= (months_count - 1);
	return covariance / (a_monthly_volatility * b_monthly_volatility);
    }
}

//Function to calculate portfolio return of two companies named 'a' and 'b' with weights 'w1' and 'w2' respectively
function portfolio_return(a,b,w1,w2){
    var a_index = -1;
    var b_index = -1;
    for(var i = 0; i < companies_values.length; i++){
	if(companies_values[i][0] == a){
	    a_index = i;
	}
	if(companies_values[i][0] == b){
	    b_index = i;
	}
    }
    var a_annual_avg_return = companies_values[a_index][5];
    var b_annual_avg_return = companies_values[b_index][5];
    return (w1 * a_annual_avg_return) + (w2 * b_annual_avg_return);
}

//Function to calculate portfolio volatility of two companies named 'a1' and 'a2' with weights 'w1' and 'w2' respectively
function portfolio_volatility_2 (a1, a2, w1, w2) {
    var a1_index = -1;
    var a2_index = -1;
    for(var i = 0; i < companies_values.length; i++){
	if(companies_values[i][0] == a1){
	    a1_index = i;
	}
	if(companies_values[i][0] == a2){
	    a2_index = i;
	}
    }
    var a1_annual_volatility = companies_values[a1_index][6];
    var a2_annual_volatility = companies_values[a2_index][6];
    return Math.sqrt(Math.pow(w1, 2) * Math.pow(a1_annual_volatility, 2) + Math.pow(w2, 2) * Math.pow(a2_annual_volatility, 2) + 2 * w1 * w2 * correlation(a1, a2) * a1_annual_volatility * a2_annual_volatility);

}

//Function to calculate portfolio volatility of two companies named 'a1', 'a2', and 'a3' with weights 'w1', 'w2', and 'w3' respectively
function portfolio_volatility_3 (a1, a2, a3, w1, w2, w3) {
    var a1_index = -1;
    var a2_index = -1;
    var a3_index = -1;
    for(var i = 0; i < companies_values.length; i++){
	if(companies_values[i][0] == a1){
	    a1_index = i;
	}
	if(companies_values[i][0] == a2){
	    a2_index = i;
	}
	if(companies_values[i][0] == a3){
	    a3_index = i;
	}
    }
    var a1_annual_volatility = companies_values[a1_index][6];
    var a2_annual_volatility = companies_values[a2_index][6];
    var a3_annual_volatility = companies_values[a3_index][6];
    return Math.sqrt(Math.pow(w1, 2) * Math.pow(a1_annual_volatility, 2) + Math.pow(w2, 2) * Math.pow(a2_annual_volatility, 2) + Math.pow(w3, 2) * Math.pow(a3_annual_volatility, 2) + 2 * w1 * w2 * correlation(a1, a2) * a1_annual_volatility * a2_annual_volatility + 2 * w1 * w3 * correlation(a1, a3) * a1_annual_volatility * a3_annual_volatility + 2 * w2 * w3 * correlation(a2, a3) * a2_annual_volatility * a3_annual_volatility);
}

//Function to calculate the average annual return of the portfolio of all input companies using equal weighting
function return_algorithm(){
    var total_return = 0;
    for(var i = 0; i < companies_values.length; i++){
	total_return += companies_values[i][5] * companies_values[i][8];
    }
    return total_return;
}

//Function to calculate the annual volatility of the portfolio of all input companies using equal weighting
function volatility_algorithm(){
    var weight = 1 / companies_values.length;
    var total_volatility = 0;
    for(var i = 0; i < companies_values.length; i++){
	total_volatility += Math.pow(weight, 2) * Math.pow(companies_values[i][6], 2);
	companies_values[i][8] = weight;
    }

    for(var i = 0; i < companies_values.length; i++){
	for(var k = i+1; k < companies_values.length - i; k++){
	    total_volatility += 2 * companies_values[i][8] * companies_values[k][8] * correlation(companies_values[i][0], companies_values[k][0]) * companies_values[i][6] * companies_values[k][6];
	}
    }
    return Math.sqrt(total_volatility);
}

//Function to find the lowest risk security in the input companies
function low_volatility(){

    var low = 0;
    var temp = 100;
    for(var i = 0; i < companies_values.length; i++){
	if((companies_values[i][6] < temp) && (companies_values[i][7])){
	    temp = companies_values[i][6];
	    low = i;
	}
    }
    return companies_values[low][0];
    
}

//Function to find the highest risk security in the input companies
function high_volatility(){
    
    var high = 0;
    var temp = 0;
    for(var i = 0; i < companies_values.length; i++){
	if((companies_values[i][6] > temp) && (companies_values[i][7])){
	    temp = companies_values[i][6];
	    high = i;
	}
    }
    return companies_values[high][0];
    
}

//Level 5 algorithm step:
//hilo_return finds the highest and lowest risk securities in the portfolio and weights the highest risk security to 0 and doubles the weight of the lowest risk security, then calculates the portfolio return with these new weightings
function hilo_return(low, high){
    var weight = 1 / companies_values.length;
    var total_return = 0;
    for(var i = 0; i < companies_values.length; i++){
	if(companies_values[i][0] == low){
	    total_return += companies_values[i][5] * (companies_values[i][8] + weight);
	}
	else if(companies_values[i][0] == high){
	    //
	}
	else{
	    total_return += companies_values[i][5] * companies_values[i][8];
	}
    }
    return total_return;
}

//Level 5 algorithm step:
//hilo_algorithm calculates the volatility of the portfolio, using the new weightings from hilo_return
function hilo_algorithm(low, high){
    var weight = 1 / companies_values.length;
    var total_volatility = 0;
    for(var i = 0; i < companies_values.length; i++){
	if(companies_values[i][0] == low){
	    companies_values[i][8] += weight;
	    total_volatility += Math.pow(companies_values[i][8], 2) * Math.pow(companies_values[i][6], 2);
	    // console.log(companies_values[i][0] + " w: " + companies_values[i][8]);
	}
	else if(companies_values[i][0] == high){
	    //
	    companies_values[i][7] = false;
	    companies_values[i][8] = 0;
	    // console.log(companies_values[i][0] + "w: " + companies_values[i][8]);
	}
	else{
	    total_volatility += Math.pow(companies_values[i][8], 2) * Math.pow(companies_values[i][6], 2);
	    // console.log(companies_values[i][0] + "w: " + companies_values[i][8]);
	}
    }

    for(var i = 0; i < companies_values.length; i++){
	for(var k = i+1; k < companies_values.length - i; k++){
	    if((companies_values[i][0] == high) || (companies_values[k][0] == high)){
		//
	    }
	    else{
		total_volatility += 2 * companies_values[i][8] * companies_values[k][8] * correlation(companies_values[i][0], companies_values[k][0]) * companies_values[i][6] * companies_values[k][6];
	    }
	}
    }
    return Math.sqrt(total_volatility);
}

//Function to generate a list of correlation factors of the company 'name' to all other input companies (returns tuple array with the name of the company and the correlation factor)
function correlate(name){
    var correlations = [];
    for(var i = 0 ; i < companies_values.length ; i++){
	var c = [];
	c.push(companies_values[i][0]);
	c.push(correlation(name, companies_values[i][0]));
	c.push(i);
	correlations.push(c);
    }
    return correlations;
}

//Level 5 algorithm step:
//low_array removes all securities with a negative correlation to the lowest risk security in the portfolio (saves them to be printed later, however)
function low_array(cor){
    for(var i = 0; i < cor.length ; i++){
	if(cor[i][1] >= 0){
	    low_values.push(companies_values[i]);
	}
	else{
	    companies_values[i][7] = false;
	    companies_values[i][8] = 0;
	    temp_values.push(companies_values[i]);
	}
    }
}

//Level 5 algorithm step:
//low_return calculates the average annual return of the portfolio with the negative correlation securities removed
function low_return(){
    var weight = 1 / low_values.length;
    var total_return = 0;
    for(var i = 0; i < low_values.length; i++){
	low_values[i][8] = weight;
	total_return += low_values[i][5] * low_values[i][8];
    }
    return total_return;
}

//Level 5 algorithm step:
//low_algorithm calculates the volatility of the portfolio with the negative correlation securities removed and the new weightings from low_return
function low_algorithm(){
    var total_volatility = 0;
    for(var i = 0; i < low_values.length; i++){
	total_volatility += Math.pow(low_values[i][8], 2) * Math.pow(low_values[i][6], 2);
    }

    for(var i = 0; i < low_values.length; i++){
	for(var k = i+1; k < low_values.length - i; k++){
	    total_volatility += 2 * low_values[i][8] * low_values[k][8] * correlation(low_values[i][0], low_values[k][0]) * low_values[i][6] * low_values[k][6];
	}
    }
    return Math.sqrt(total_volatility);
}

//Function to print the weightings of each stock in the portfolio
function value_print(){
    for(var i = 0 ; i < companies_values.length ; i++){
	document.write("<BR>" + companies_values[i][0]);
	percent = companies_values[i][8] * 100;
	document.write("<BR>% of portfolio: " + percent.toFixed(2) + "%");
	document.write("<BR>");
    }
    document.write("<BR>");
    document.write("<BR>");
}
