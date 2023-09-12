export class LoggerService{

    logMessage(name: string, status: string){
        console.log('The user with the name ' + name + ' and the status ' + status +
                    ' has been added.');
    }

}