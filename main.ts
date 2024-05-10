#! /usr/bin/env node

import inquirer from "inquirer"

const answer :{
    sentence :string
}= await inquirer.prompt(
    [
        {
            name:"sentence",
            type:"input",
            message:"enter your sentence to count words:"
        }
    ]
)
const words =answer.sentence.trim().split(" ")

console.log(`your word count is:${words.length}`)