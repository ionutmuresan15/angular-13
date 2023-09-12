import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

// @Injectable() used to inject a service into another servcie using Dependecy Injection
// We place the @Injectable() annotation inside the receiver service (where we want to inject our dependency)

// But in newer versions of Angular we might have to decorate with @Injectable()
// annotations the all services, even if we do not inject anything in them
// so it is a good practice no annotate all the services that are being created
// using @Injectable() annotation

@Injectable()
export class UserService{

    users = [
        {name: 'John', status: 'active'},
        {name: 'Mark', status: 'inactive'},
        {name: 'Steve', status: 'active'}
    ]

    loggerService : LoggerService;

    constructor(loggerService: LoggerService){
        this.loggerService = loggerService;
    }

    addNewUser(name: string, status: string){
        this.users.push({name: name, status: status});
        this.loggerService.logMessage(name, status);
    }

}