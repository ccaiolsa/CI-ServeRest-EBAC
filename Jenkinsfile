pipeline {
    agent {
        docker{
            image 'jenkins/jenkins'
            args '-u root:root'
        }
    }
    stages {
        stage('checkout') {
            steps {
                git branch: 'master', url:'https://github.com/ccaiolsa/CI-ServeRest-EBAC.git'
            }
        }
        stage('Install dependencies') {
            steps {
                bat 'npm ci'
            }
        }
        stage('Run Test') {
            steps {
                bat 'npm ci'
            }
        }
        stage('Run Cypress Tests'){
            steps{
                bat 'docker run -it ambiente-cypress'
                bat 'npx serverest@latest'
                bat 'npx cypress run'
            }
        }
    }
}