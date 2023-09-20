import { Pipe, PipeTransform } from "@angular/core"
import { Student } from "./student"

@Pipe({
    name: 'filterStudents',
    //pure: false (making this pipe to be a impure pipe)
    //pure: true (making this pipe to be a pure pipe)
    //if we don't specify this 'pure' property, then the pipe will be a pure one, by default
})

// Filtered students custom pipe
export class FilterPipe implements PipeTransform{

    filteredStudent : Student[] = [];

    transform(students: Student[], filteredText: string) {
        console.log('filter pipe has been called!')
        if(students.length === 0 || filteredText === ''){
            return students;
        }
        else{
            this.filteredStudent = students.filter((student) => {
              return student.gender.toLocaleLowerCase() === filteredText.toLocaleLowerCase();  
            })
        }
        return this.filteredStudent;
    }
}