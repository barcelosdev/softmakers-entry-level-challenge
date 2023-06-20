# **Desafio Softmakers - Desenvolvedor Full Stack Junior**

## **Quickstart**

- Configure o arquivo `.env` com base no arquivo `.env.example`;
- Tenha em sua máquina a versão 16 do node.js;
- Caso precise gerenciar várias versões do node em sua máquina utilize o [nvm ](https://github.com/nvm-sh/nvm).  

### **1. Rode o servidor**
```bash
npm run dev
```
### **2. Rode o clinte**
```
npm run react
```
## **Rotas**

Para seu funcionamento geral, A API utiliza das seguintes rotas, no padrão REST:

POST `/api/pets`  
GET `/api/pets`  
GET `/api/pets/:id`  
PUT `/api/pets`  
DELETE `/api/pets`

> **Nota!**
>
> Na API, você também pode gerar 200 dados aleatórios para realizar testes no sistema, utilizando a rota POST `/api/faker`. 
>
> O [Faker](https://fakerjs.dev/), é um biblioteca que gera dados aleatórios, mas concisos, para finalidades de testes unitários e de performance.