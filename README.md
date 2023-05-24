# AGE ESTIMATOR
Would you like to know the average age associated with a given name, in a given country, for millions of names from around the globe? You've come to the right place.

Link to project: https://jacob-bonham.github.io/Age-Estimator/

## How It's Made:

**Tech used:** HTML, CSS, and JavaScript

This site works with the API provided by https://agify.io.

There are two main features:

1) Dynamic Search - In the search bar, the program uses an event listener to check to see if the user has stopped typing. When the user stops typing, that search will automatically be sent to the API. 

2) Search by Name **AND** by Country - The program also lets you search by name and by country, providing more specific results that will allow you to see if a given name has a different average age value from one country to another. 

## Important Note:
It's **important to note** that the **Search by Name AND by Country** feature uses the International Standard for Country Codes as defined in ISO 3166-1 alpha-2. We use this to determine the acceptable inputs and formatting for each country. If you are having a problem when you input a specific country into the program, check to see if your country is listed and formatted in the same way as the countries specified at https://agify.io/our-data. The program is designed to convert full country names into country codes, readable by the API. 

Otherwise, enjoy! 
