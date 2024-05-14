#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber:number=Math.floor(100000+(Math.random())*90000);
let myBalance:number=0;

let user_id=await inquirer.prompt([{
    name:"Student",
    type:"input",
    message:"Enter student name:",
    validate:function(value){
        if (value.trim()!==""){
          return true;
        }
        return "Please enter a non-empty value";
    },
},
{
    name:"Courses",
    type:"list",
    message:"Select the courses to enroll",
    choices:["MS Office","HTML","Javascipt","python","CSS"]
}
]
);
const tuitionfees:{[key:string]:number}={
    "MS Office":2000,
    "HTML":2500,
    "Javascipt":5000,
    "python":6000,
    "CSS":1000
};

console.log(`\nTuition Fees ${tuitionfees[user_id.Courses]}/-\n`);
console.log(`Balance:${myBalance}\n`);

let paymentType=await inquirer.prompt([
    {
        name:"Payment",
        type:"list",
        message:"Select payment method",
        choices:['bank transfer','easy paisa','jazz cash']

    },

    {
        name:"Amount",
        type:"input",
        message :"transfer money",
        validate:function(value){
            if (value.trim()!==""){
              return true;
            }
            return "Please Enter a non-empty value";
        },
    }
]);
console.log(`\n You select payment method\n`);

const tuitionFees=tuitionfees[user_id.Courses];
const paymentAmount=parseFloat(paymentType.Amount);

if(tuitionFees===paymentAmount){
let answers=await inquirer.prompt([
        {
            name:"select",
            type:"list",
            message:"what would you like to do?",
            choices:["view status","exit"]
            
    }
])
if(answers.select==='view status'){
    console.log('\n******************\n');
    console.log(`student name:${user_id.Student}`);
    console.log(`student ID:${randomNumber}`);
    console.log(`courses:${user_id.Courses}`);
    console.log(`tuition fees paid:${paymentAmount}`);
    console.log(`balance:${myBalance += paymentAmount}`);
    
}else{
    console.log('\n exiting student mangemnt system.....>>>>>>>>>\n')
}
}
