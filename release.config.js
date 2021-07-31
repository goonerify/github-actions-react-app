// Semantic Release Config
module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/goonerify/react-app",
    plugins: [
        // analyze commit messages and decide what the next version 
        // should be based on the commit messages
        "@semantic-release/commit-analyzer",
        // Generates release notes for our release, also based on 
        // our commit messages descriptions and types
        "@semantic-release/release-notes-generator",
        // This is used when releasing an npm package
        // "@semantic-release/npm",
        // This is responsible for creating the github release in the
        // github releases page
        "@semantic-release/github"
    ]
}