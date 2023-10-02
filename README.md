Readme.me
# CTC

CTC is a little project about task and likes in React with Laravel

## Installation

Clone the repository
First, clone the project repository to your local machine.

```bash
# Move to the project directory
cd CTC
```

### Back end
You need Laravel in 9.x Version

```bash
# move to the directory
cd server/laravel

# use composer update to install depencencies
composer update
```
Don't forget to update the .env file in the Laravel project with your database credentials. You can create a .env file if it doesn't exist and then configure it.
You can check your '/' route for test connection.

```bash
# execute migrations for create tables
php artisan migrate
```

### Front end
You need React with yarn and install all depencency
```bash
# move to the directory
cd client/react

# use yarn to install dependecies
yarn
```

Don't forget to update the .env file in the React project with the appropriate endpoint information. Create a .env file if it doesn't exist and configure it.

Now you have successfully set up your CTC project with React and Laravel, ensuring that you have configured both the backend and frontend environments properly.