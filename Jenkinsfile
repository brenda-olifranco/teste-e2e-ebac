pipeline {
    agent any
    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/brenda-olifranco/teste-e2e-ebac'
            }
        }

        stage('Instalar dependências') {
            steps {
                powershell '''
                    # Instalar as dependências com npm
                    npm install
                '''
            }
        }

        stage('Executar Testes') {
            steps {
                powershell '''
                    # Executar os testes, desabilitando cores
                    $env:NO_COLOR = "1"
                    npm run cy:run
                '''
            }
        }
    }
}
