pipeline {
    agent {
        docker{
            image 'ambiente-cypress:1.0'
            args '-u root:root'
        }
    enviroment{
        DOCKERHUB_CREDENTIALS = credentials('bb382974-7fb0-4414-ab01-8f103aeb23a5')
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
                bat '''echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
                    docker build -t ccaiolsa/ambiente-cypress:1.0
                    docker push ccaiolsa/ambiente-cypress:1.0'''
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