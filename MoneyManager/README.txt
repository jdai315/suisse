########################
#     Instructions     #
########################

1) Open index.html in a browser to execute the application
2) Open code.js. Put all your code under the main function (you can create additional function/files if needed)
3) Read formulas.txt to compute all the values required for the first item of this project.



########################
#     	Formulas       #
########################

# Compute return between month 1 and 2:
	Business meaning: profit between two intervals
	return_month = (price_month_2 - price_month_1) / price_month_1 * 100

# Monthly average return:
	Business meaning: average past profit in a period of time
	monthly_avg_return = Sum(return_month) / (months_count - 1)

# Annual average return:
	Business meaning: annualized past profit
	annual_avg_return = monthly_avg_return * 12;

# Monthly volatility:
	Business meaning: measure of risk, how far you may end up from the average return (up or down)
	monthly_variance = Sum((return_month - monthly_avg_return)^2) / (months_count - 1)
	monthly_volatility = Sqrt(monthly_variance)
	
# Annual volatility:
	Business meaning: annualized risk
	annual_volatility = monthly_volatility * Sqrt(12)
	
# Correlation factor between two assets:
	Business meaning: coefficient to see if two assets usually move together
	a = first asset
	b = second asset
	covariance(a, b) = Sum((return_month(a) - monthly_avg_return(a)) * (return_month(b) - monthly_avg_return(b))) / (months_count - 1)
	correlation(a, b) = covariance(a, b) / (monthly_volatility(a) * monthly_volatility(b))
		Takes values between -1 and 1
		If close to 1: it means both asset prices usually move together
		If close to -1: it mean asset prices usually move in opposite directions (one up, the other down)
		If 0: no relationship between assets

# Correlation matrix
	Compute correlation factor between all pair of assets
	Tips:
		correlation(a, b) = correlation(b, a)
		correlation(a, a) = 1

# Average return of Portfolio of 2 assets:
	a1 = asset 1 in portfolio
	a2 = asset 2 in portfolio
	w1 = weight of a1 (between 0 and 1)
	w2 = weight of a2 (between 0 and 1)
	w1 + w2 = 1
	portfolio_avg_return(a1, a2) = w1 * annual_avg_return(a1) + w2 * annual_avg_return(a2)
	
# Average return - Portfolio of N assets:
	w1 + w2 + ... + wN = 1
	portfolio_avg_return(a1, a2, ... aN) = w1 * annual_avg_return(a1) + w2 * annual_avg_return(a2) + ... + wN * annual_avg_return(aN)
	
# Volatility of Portfolio of 2 assets:
	portfolio_volatility(a1, a2) = Sqrt(w1^2 * annual_volatility(a1)^2 + w2^2 * annual_volatility(a2)^2 + 2 * w1 * w2 * correlation(a1, a2) * annual_volatility(a1) * annual_volatility(a2))
		In the last part of the equation (+ 2 *...) correlation may add/subtract to the total volatility
		If two securities are not correlated then the total risk of the portfolio will be reduced
		This is one of the reasons why investors usually like to invest in a diversified portfolio of assets.
		
# Volatility of Portfolio of 3 assets:
	portfolio_volatility(a1, a2, a3) = Sqrt(
		w1^2 * annual_volatility(a1)^2 + w2^2 * annual_volatility(a2)^2 + w3^2 * annual_volatility(a3)^2
		+ 2 * w1 * w2 * correlation(a1, a2) * annual_volatility(a1) * annual_volatility(a2)
		+ 2 * w1 * w3 * correlation(a1, a3) * annual_volatility(a1) * annual_volatility(a3)
		+ 2 * w2 * w3 * correlation(a2, a3) * annual_volatility(a2) * annual_volatility(a3)
		)



	
########################
#     Useful links     #
########################

- Javascript quick guide: https://www.tutorialspoint.com/javascript/javascript_quick_guide.htm
- How draw a line chart using D3: https://bl.ocks.org/mbostock/3883245  
- How to create a slider widget using jQuery: https://jqueryui.com/slider/ 




