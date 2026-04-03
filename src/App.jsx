import { useState } from 'react'
import Titulo from './titulo/Titulo'
import Paragrafo from './Paragrafo/Paragrafo'
import Imagem from './imagem/Imagem'
import Botao from './Botao/Botao'
import Nome from './Usuario/Usuario'
import Produto from './produto/Produto'
import Saudacao from './saudacao/Saudacao'
import CardSimples from './CardSimples/CardSimples'
import Rodape from './Rodape/Rodape'
import Status from './Status/Status'


function App() {
  return (
    <>
    <Titulo texto = "Carro"/>
    <Paragrafo conteudo = "Bala"/>
<Imagem src="https://home.i.bol.com.br/2013/11/04/alexander-de-almeida-conhecido-como-o-rei-do-camarote-1383590251817_615x300.jpg" alt="Imagem"/>
<Botao label = "Butao" />
<Nome nome = "Gabriel" idade = "21" />
<Produto nome = "Guilherme" preco = "2.500" />
<Saudacao nome = "Gabriel!"/>
<CardSimples titulo ="Um homem" descricao= "Ele é uma amigo meu que cresceu comigo" />
<Rodape ano ="©2026" />
<Status mensagem ="Isso é uma mensagem" />







    </>
  )
  

}

export default App
