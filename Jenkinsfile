pipeline {
    agent any

    stages {

        stage('Clone Source Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                sh 'echo "Building Node.js application..."'
                sh 'node --check app.js'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Package Application') {
            steps {
                sh 'tar --exclude=node_modules -czf application.tar.gz app.js package.json test.js'
            }
        }

        stage('Deliver Artifact') {
            steps {
                archiveArtifacts artifacts: 'application.tar.gz',
                                     fingerprint: true
            }
        }
    }
}
