pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/soundharajan-S/jenkins-docker-cicd-pipeline.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cicd-node-app .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stop cicd-app || true'
                sh 'docker rm cicd-app || true'
                sh 'docker run -d -p 8000:3000 --name cicd-app cicd-node-app'
            }
        }
    }
}
