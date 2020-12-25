pipeline {
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/Alexander-Goryaynov/tamada-front/localStorage'
      }
    }
    stage('Build application') {
      steps {
        sh "sudo docker-compose build"
      }
    }
    stage('Up application') {
      steps {
        sh "sudo docker-compose up -d"
      }
    }
  }
}