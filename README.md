#Nova atualização iniciada em 18/11/2019;

# Hotel Senior

[![Build Status](https://travis-ci.com/medeirosjoaquim/hotel-senior.svg?token=Nfdt9KzNxomwmeF6q4cR&branch=master)](https://travis-ci.com/medeirosjoaquim/hotel-senior)
![Repo Size](https://img.shields.io/github/repo-size/medeirosjoaquim/hotel-senior?style=flat-square)

<p align="center">
  <a href="#o-que-é">O que é</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#rodar">Rodar</a> •
  <a href="#produção">Branch de Produção</a> •
  <a href="#versão-online">Versão Online</a> •
  <a href="#to-do">Falta fazer</a> •
  <a href="#contact">Contato</a> •

</p>

## O que é

* Aplicativo que simula um sistema de checkin para hotéis. Feito
como desafio para vaga de Frontend na Sênior Sistemas em Outubro de 2019.

## Instalação
* Você deve ter, pelo menos, a versão 10.9 do <a href="https://nodejs.org/en/">Nodejs</a>
* Para evitar conflitos, é aconselhável instalar a ferramenta ng-cli.

```npm install -g @angular/cli```

* Clonar o repositório. Entrar na pasta e instalar o pacotes com

```npm i```

## Rodar

Inicie o aplicativo com um dos comandos abaixo:
```npm start``` ou ```ng start```

Após a compilação, o App estará disponível para acesso
pelo navegador em localhost:4200

## Produção

A branch prod tem as alterações necessárias para o deploy em produção.
* Visando performance o build é feito com a opção --aot (ahead of time). Nesse modo de compilação o código necessário para renderização é gerado majoritariamente no build e, assim, consome menos recursos do cliente e permite um carregamento mais veloz.
* Compressão: na versão de produção, a aplicação é servida com expressJS, que é ideal para protótipos e pequenas aplicações. Foi adicionada uma camada de compressão que reduz o tamanho dos dados enviados pelo servidor.

## Versão online

Fiz o deploy de uma versão do app na Heroku. Está disponível aqui https://hotel-senior.herokuapp.com. Por ser um serviço gratuito o servidor, quando sem uso por mais de uma hora, entra em modo de hibernação. Nesse caso, havendo algum erro,
basta recarregar a página e aguardar alguns segundos.

## To do

Por conta do tempo, optei por implementar o mínimo
viável da aplicação, sem perder de vista as tarefas pendentes.

* Definir escopo do front
  * Há tarefas que, por performance e segurança, deveriam ser
    realizadas no backend, como cálculo das diárias
* Escrever validações para todos os inputs
* Revisar acessibilidade
* Testar em diferentes sistemas e navegadores
* Escrever testes
* Refatorar SCSS
* Refatorar as funções que fazem filtro
* Implementar cálculo do total de diária
  * Dentro do tempo disponível implementei apenas um cálculo básico que não considera se o cliente usou a vaga de garagem nem faz diferença entre tarifa de dias de semana e de fim de semana

## Contato

Mande um e-mail! johnboxcodes@gmail.com! Ou diga oi no Linkedin:
linkedin.com/in/joaquim-medeiros/
