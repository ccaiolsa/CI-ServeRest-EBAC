pipeline {
    agent {
        docker{
            image 'ambiente-cypress:1.0'
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
        stage('Build Imagem Docker'){
            steps{
                bat 'docker login'
                bat 'docker build -f Dockerfile -t ambiente-cypress .'
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