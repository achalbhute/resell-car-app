
## Reseller API for Cars

Basic API for reselling cars

# API Endpoints:

 - Login : 
	 -  **POST**   http://localhost:3000/login/
   
 - Seller :  ***x-access-token header needed***
	 -  **GET**      http://localhost:3000/cars/
	 - **GET**      http://localhost:3000/cars/:id
	 - **POST**   http://localhost:3000/cars/
                  
 - Buyer :   ***x-access-token header needed***
	 - **GET**     http://localhost:3000/cars/
	 - **GET**      http://localhost:3000/cars/:id
	 -  **PATCH**  http://localhost:3000/cars/:id

*CORS enabled*