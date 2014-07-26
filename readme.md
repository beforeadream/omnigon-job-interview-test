# Omnigon Test Task #

```JavaScript
 ______     __    __     __   __     __     ______     ______     __   __    
/\  __ \   /\ "-./  \   /\ "-.\ \   /\ \   /\  ___\   /\  __ \   /\ "-.\ \   
\ \ \/\ \  \ \ \-./\ \  \ \ \-.  \  \ \ \  \ \ \__ \  \ \ \/\ \  \ \ \-.  \  
 \ \_____\  \ \_\ \ \_\  \ \_\\"\_\  \ \_\  \ \_____\  \ \_____\  \ \_\\"\_\ 
  \/_____/   \/_/  \/_/   \/_/ \/_/   \/_/   \/_____/   \/_____/   \/_/ \/_/ 
                                                                             
```

## Requirements ##

- Apache
- Git
- NPM
- Bower

## How to run ##

```
git clone https://beforeadream@bitbucket.org/beforeadream/omnigon-test-task.git
```

```
Setup virtualhost for omnigon-test-task folder http://goo.gl/JBnX2e
```

```
bower install
```

## Features ##

Application starts from `js/app.js`. It runs `ngRoute` module and there is configuration for `$routeProvider`.
At this moment exists only one controller `mainCtrl` and it is default controller on application.

Find in folder `controllers` file `main.js` and you will able to see that it calls new custom service `tweeManager` and passes few arguments according to specification.