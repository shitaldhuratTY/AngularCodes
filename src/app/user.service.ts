import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
}) 

export class UserService{
    users =[
        {
            name: 'Shital',
            company: 'Test Yantra'
        },
        {
            name: 'Shubham',
            company: 'Capgemini'
        },
        {
            name: 'Deeksha',
            company: 'Test Yantra'
        }
    ];
    printDetails(){
        console.log('the fuction')
    }

}