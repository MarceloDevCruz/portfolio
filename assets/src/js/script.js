const Script = () => {

  const btn = document.querySelector('#btn')
  const projectContainer = document.querySelector('.project-content-container')

  btn.addEventListener('click', () => {

    try {
      removeChildProject()
    } catch {

    }
    finally {
      projectContainer.hidden = false
      const select = document.querySelector('#option')
      const value = select.options[select.selectedIndex].value
      const title = select.options[select.selectedIndex].text
      projectView(value, title)
    }

  })

  const projectView = (value, title) => {

    const elementTitle = document.createElement('h3')
    const elementText = document.createElement('div')

    elementTitle.innerText = title

    if (value === 'project-1') {

      elementText.innerHTML =
        `
        <p>O projeto de rom hacking é uma edição de um jogo, originalmente desenvolvido pela SEGA o jogo 
        chamado Kid Chameleon é um jogo labirinto e diversos mapas... Um desenvolvedor do github fez um "disassembly" no arquivo binário do jogo
        com isso ele disponibilizou a destruturação em linguagem assembly para quem quiser realizar edições no jogo,
        junto com ferramentas desenvolvidas por próprios programadores para edição de "mapas, blocos, backgroud do jogo" e um editor hexadecimal para alterar valores em endereços específicos
        eu realizei o desenvolvimento da minha própria hack rom, intitulada como <strong>"Kid Chameleon The Last Showdown"</strong>
        tem seus próprios mapas, paletta de cores e atalhos, o projeto foi realizado por min, porém, com a ajuda
        de toda uma comunidade por trás do discord oficial do kid chameleon. </p> <p> Contudo, esse projeto não envolveu uma lógica de
        programação avançada, pois como as principais funcionalidades do editor para mapas do kid chameleon abstraia grande parte da complexidade
        do assembly, fazendo que me precupasse apenas com o design dos mapas e da construção da rom hack, com isso, foi meu primeiro
        trabalho e contato com design, que me fez ter vontade de me tornar um desenvolvedor web. <p> Nesse projeto foi utilizado, <strong> Editor hexadecimal, Assembly, e Criatividade de Design </strong></p><br>
        <p>Veja um pouco mais sobre o projeto: </p><br>
        <a href="https://www.romhacking.net/hacks/5018/" target="_blank">RomHacking</a><br>
        <a href="https://www.youtube.com/watch?v=RPqi99KjSD8&ab_channel=Christodoulopoulos" target="_blank">Youtube</a>
      `
      projectContainer.appendChild(elementTitle)
      projectContainer.appendChild(elementText)

    }

    else if (value === 'project-2') {

      elementText.innerHTML =
        `
      Utilizando os conceitos dos cursos e da faculdade, elaborei uma página html para exibir os dados relacionados a COVID-19 de um determinado estado do Brasil,
      a página web contem um campo input para o usuário digitar CEP que deseja pesquisar, por meio do JavaScript validando o campo de CEP e incluindo a máscara de CEP corretamente.
      Através da API de CEP consultando o estado pesquisado e passando-o como parâmetro da requisição para a API do COVID-19 e exibindo os dados de retorno na mesma página onde foi
      digitado o CEP. <br> <p> Nesse projeto foi utilizado, <strong> JavaScript, Css, Html.</strong></p><br>
      <p>Veja um pouco mais sobre o projeto: </p><br>
      <a href="https://luminous-nasturtium-a35da4.netlify.app/" target="_blank">Netlify</a> <br>
      <a href="https://github.com/MarceloDevCruz/dw2A4/tree/master/Atividades/A4" target="_blank">GitHub</a>
      `
      projectContainer.appendChild(elementTitle)
      projectContainer.appendChild(elementText)

    }

    else if (value === 'project-3') {

      elementText.innerHTML =
        `
      Projeto da disciplina de Estrutura de dados onde tivemos que desenvolver um sistema em linguagem C para o caixa do mercado
      com controle de entrada e saida dos itens do mercado, para isso, tivemos que obrigatóriamente utilizar algumas estruturas de
      dados conhecidas pelo mercado, como a Fila e a Pilha, além de utilizar busca binária para sessão de log do usuário no sistema
      além de utilizar e implementar o algoritmo de quick sort para ordenação de itens, também utilizando novos requisistos, utilizei
      métodos para leitura, escrita e remoção de arquivos de documento. O sistema foi criado como uma aplicação desktop que utiliza
      de um terminal para a sua execução.
      <p> Nesse projeto foi utilizado, <strong> Estrutura de Dados, pilha e fila, linguagem de programação C.</strong></p><br>
      <p>Veja um pouco mais sobre o projeto: </p><br>
      <a href="https://github.com/MarceloDevCruz/Projetos-IFSP/blob/main/Projeto.c" target="_blank">GitHub</a><br>
      `
      projectContainer.appendChild(elementTitle)
      projectContainer.appendChild(elementText)

    }

    else if (value === 'project-4') {

      elementText.innerHTML =
        `
      Projeto em react onde usei CRUD, "Create, Read, Update e Delete", uma pequena aplicação de criação de Worksheets
      utilizando a biblioteca React e suas bases (React Router, Hooks e custom hooks, context) e também banco de dados em cloud
      Firebase do google, além de fazer autenticação de novos usuários, para esse projeto usei uma estrutura de páginas separadas em public
      e src, onde fiz da forma de como se encontra no mercado de trabalho, criando pastas separadas para cada contexto de utilização
      Além disso, fiz todo o projeto estruturando o código em inglês que também é uma abordagem feita no mercado de trabalho atualmente,
      também o projeto está responsivo para todas as telas utilizadas hoje em dia, além de um design minimalista e criativo.
      <p> Nesse projeto foi utilizado, <strong> html, css, javascript, es6, React, React router, context, Firebase, CRUD</strong></p><br>
      <p>Veja um pouco mais sobre o projeto: </p><br>
      <a href="https://github.com/MarceloDevCruz/worksheets-react" target="_blank">GitHub</a><br>
      <a href="https://udockers-react-worksheets.netlify.app/" target="_blank">Netlify</a><br>
      `
      projectContainer.appendChild(elementTitle)
      projectContainer.appendChild(elementText)

    }

    else if (value === 'project-5') {
      elementText.innerHTML =
        `
      Em desenvolvimento...
      `

      projectContainer.appendChild(elementTitle)
      projectContainer.appendChild(elementText)

    }
  }

  const removeChildProject = () => {
    const h3 = document.querySelector('.project-content-container > h3')
    const div = document.querySelector('.project-content-container > div')
    projectContainer.removeChild(h3)
    projectContainer.removeChild(div)
  }

  const sandwichMenu = document.querySelector('.sandwich-svg')

  sandwichMenu.addEventListener('click', () => {

    const menuMobile = document.querySelector('.mobile-link')

    menuMobile.classList.contains('display-open')
      ? menuMobile.classList.remove('display-open')
      : menuMobile.classList.add('display-open');
  })

}


Script()
