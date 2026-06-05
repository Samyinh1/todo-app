pipeline {
    agent any

    tools {
        nodejs 'Node22'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test -- --watchAll=false --passWithNoTests'
            }
        }

        stage('Build React') {
            steps {
                bat 'npm run build'
            }
        }

        // stage('Build Docker Image') {
        //     steps {
        //         bat 'docker build -t react-todo-app .'
        //     }
        // }

        // stage('Deploy Docker Container') {
        //     steps {
        //         bat 'docker rm -f react-todo-app || exit 0'
        //         bat 'docker run -d -p 3000:80 --name react-todo-app react-todo-app'
        //     }
        // }
    }
}
