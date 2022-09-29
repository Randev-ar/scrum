const core = require("@actions/core")
const github = require("@actions/github")

async function run (){
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN')
}

run()