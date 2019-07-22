# node-mongoose
Exemplo de API em Node.js usando Mongoose e Sequelize

## Instalar dependências
```
    npm install
```

## Criar containers para o banco MongoDB e MariaDB com Docker
Execute o arquivo para gerar o container:

```
   ./runDocker.sh
```
*Obs.: O Docker precisa estar instalado. Instruções de como instalar o Docker em Windows, Mac e Linux, veja [este post](https://blog.umbler.com/br/containers-102-primeiros-passos-para-realizar-a-instalacao/).*

## Criação de tabelas
Execute o seguinte comando para o sequelize criar as tabelas no banco de dados:
```
./node_modules/.bin/sequelize db:migrate
```

## Para iniciar o servidor Express, use o comando:

```
   npm start
```

## Referências
[Documentação do Express](https://expressjs.com)

[Documentação do Mongoose](https://mongoosejs.com)

[Documentação do Sequelize](http://docs.sequelizejs.com)

## Observações
Este código faz parte do curso **_Desenvolvimento Back-end com Node.js_** na [Digital Inovation One](https://digitalinnovation.one).
