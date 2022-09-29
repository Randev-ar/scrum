const core = require("@actions/core")
const github = require("@actions/github")

async function run (){
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN')
    const octokit = github.getOctokit(GITHUB_TOKEN)
    
    const { context = {} } = github
    const { issue } = context.payload
    const { body } = issue
    const tasks = body.split('_**Tareas**_')[1]
    const taskList = tasks.split("\r\n").filter(item => item)
    console.log( taskList );


    await octokit.issues.createComment({
        ...context.repo,
        issue_number: issue.number,
        body: 'Updating Tasks'
    })
}

run()