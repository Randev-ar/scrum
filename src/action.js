import * as github from '@actions/github';
import * as core from '@actions/core';

async function run (){
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN')
    
    const { context = {} } = github
    const { issue } = context.payload
    const { body } = issue
    const tasks = body.split('_**Tareas**_')[1]
    const taskList = tasks.split("\r\n").filter(item => item)
    console.log( taskList );


    const client = github.getOctokit(GITHUB_TOKEN)

    await client.issues.createComment({
        ...context.repo,
        issue_number: issue.number,
        body: 'Updating Tasks'
    })
    
    /* await client.issues.create({
        owner: owner,
        repo: repo,
        title: title,
        body: body,
        labels: labels,
        milestone: milestone ? milestone : undefined,
        assignees: assignees
      }); */
}

run()