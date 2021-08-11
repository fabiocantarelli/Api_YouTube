# Api_YouTube

Essa API foi criada para efetuar várias chamadas a API do YouTube, onde a mesma é atualizada a cada 1 hora.
Com isso é gerado um arquivo JSON que é lido através de uma rota, no meu caso eu criei a rota /API_FLOW.
Acessando a rota raiz da API, é retornado um JSON com as informações.

Na raiz do repositório crie o seu arquivo .env com as seguintes váriáveis.

# Sua chave API do YouTube
API_KEY_YOUTUBE=

# Máximo de resultados.
MAX_RESULTS=20

# ID do chanal a ser retornada a lista de videos.
CHANNEL_ID_1=

# Comandos

Instalando as dependências.
* npm install

Rodando a aplicação.
* npm start
