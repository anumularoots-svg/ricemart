pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/<your-username>/ricemart.git'
      }
    }
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t ricemart-backend .'
      }
    }
    stage('Push to ECR') {
      steps {
        sh '$(aws ecr get-login --no-include-email --region ap-south-1)'
        sh 'docker tag ricemart-backend:latest <ECR_URL>:latest'
        sh 'docker push <ECR_URL>:latest'
      }
    }
    stage('Deploy to EKS') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
  }
}
