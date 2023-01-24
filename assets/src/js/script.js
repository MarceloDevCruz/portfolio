const Script = () => {
  const btn = document.querySelector("#btn");
  const projectContainer = document.querySelector(".project-content-container");

  btn.addEventListener("click", () => {
    try {
      removeChildProject();
    } catch {
    } finally {
      projectContainer.hidden = false;
      const select = document.querySelector("#option");
      const value = select.options[select.selectedIndex].value;
      const title = select.options[select.selectedIndex].text;
      projectView(value, title);
    }
  });

  const projectView = (value, title) => {
    const elementTitle = document.createElement("h3");
    const elementText = document.createElement("div");

    elementTitle.innerText = title;

    if (value === "project-1") {
      elementText.innerHTML = `
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
        <a href="https://www.youtube.com/watch?v=RPqi99KjSD8&ab_channel=Christodoulopoulos" target="_blank">Youtube</a><br>
        <a href="https://github.com/MarceloDevCruz/kid-chameleon-the-last-showdown" target="_blank">GitHub</a>
      `;
      projectContainer.appendChild(elementTitle);
      projectContainer.appendChild(elementText);
    } else if (value === "project-2") {
      elementText.innerHTML = `
      <p>Utilizando os conceitos dos cursos e da faculdade, elaborei uma página html para exibir os dados relacionados a COVID-19 de um determinado estado do Brasil,
      a página web contem um campo input para o usuário digitar CEP que deseja pesquisar, por meio do JavaScript validando o campo de CEP e incluindo a máscara de CEP corretamente.
      Através da API de CEP consultando o estado pesquisado e passando-o como parâmetro da requisição para a API do COVID-19 e exibindo os dados de retorno na mesma página onde foi
      digitado o CEP.</p> <p> Nesse projeto foi utilizado, <strong> JavaScript, Css, Html.</strong></p><br>
      <p>Veja um pouco mais sobre o projeto: </p><br>
      <a href="https://luminous-nasturtium-a35da4.netlify.app/" target="_blank">Netlify</a> <br>
      <a href="https://github.com/MarceloDevCruz/dw2A4/tree/master/Atividades/A4" target="_blank">GitHub</a>
      `;
      projectContainer.appendChild(elementTitle);
      projectContainer.appendChild(elementText);
    } else if (value === "project-3") {
      elementText.innerHTML = `
      <p>Projeto da disciplina de Estrutura de dados onde tivemos que desenvolver um sistema em linguagem C para o caixa do mercado
      com controle de entrada e saida dos itens do mercado, para isso, tivemos que obrigatóriamente utilizar algumas estruturas de
      dados conhecidas pelo mercado, como a Fila e a Pilha, além de utilizar busca binária para sessão de log do usuário no sistema
      além de utilizar e implementar o algoritmo de quick sort para ordenação de itens, também utilizando novos requisistos, utilizei
      métodos para leitura, escrita e remoção de arquivos de documento. O sistema foi criado como uma aplicação desktop que utiliza
      de um terminal para a sua execução.</p>
      <p> Nesse projeto foi utilizado, <strong> Estrutura de Dados, pilha e fila, linguagem de programação C.</strong></p><br>
      <p>Veja um pouco mais sobre o projeto: </p><br>
      <a href="https://github.com/MarceloDevCruz/Estrutura-de-dados-em-C" target="_blank">GitHub</a><br>
      <a href="https://www.youtube.com/watch?v=oLinYmxOZHk&ab_channel=Christodoulopoulos" target="_blank">YouTube</a><br>
      `;
      projectContainer.appendChild(elementTitle);
      projectContainer.appendChild(elementText);
    } else if (value === "project-4") {
      elementText.innerHTML = `
      <p>Projeto em react onde usei CRUD, "Create, Read, Update e Delete", uma pequena aplicação de criação de Worksheets
      utilizando a biblioteca React e suas bases (React Router, Hooks e custom hooks, context) e também banco de dados em cloud
      Firebase do google, além de fazer autenticação de novos usuários, para esse projeto usei uma estrutura de páginas separadas em public
      e src, onde fiz da forma de como se encontra no mercado de trabalho, criando pastas separadas para cada contexto de utilização
      Além disso, fiz todo o projeto estruturando o código em inglês que também é uma abordagem feita no mercado de trabalho atualmente,
      também o projeto está responsivo para todas as telas utilizadas hoje em dia, além de um design minimalista e criativo. </p>
      <p> Nesse projeto foi utilizado, <strong> html, css, javascript, es6, React, React router, context, Firebase, CRUD</strong></p><br>
      <p>Veja um pouco mais sobre o projeto: </p><br>
      <a href="https://github.com/MarceloDevCruz/worksheets-react" target="_blank">GitHub</a><br>
      <a href="https://udockers-react-worksheets.netlify.app/" target="_blank">Netlify</a><br>
      `;
      projectContainer.appendChild(elementTitle);
      projectContainer.appendChild(elementText);
    } else if (value === "project-5") {
      elementText.innerHTML = `
      <p>Pomodoro é uma técnica para aumentar a potência dos estudos, ele se baseia em dividir o tempo de suas tarefas, em pausas curtas e longas
      , além disso, o projeto foi realizado para acrescentar a funcionalidade de edição do tempo do pomodoro, tanto para tarefas quanto para pausas
      curtas e longas, após o crônometro do tempo chegar a 0, será ativado o alarme que tocará indicando qual será a sua próxima tarefa no qual terá que
      realizar, nesse projeto, tentei aprimorar minhas habilidades de sass e css, com o design mais interessante e na adição de backgrounds vetorizados que
      da o aspecto mais modernos para sites, também na parte de responsividade tentei focar não só em apenas um padrão pré-definidos de telas, mas sim na
      medida em que o site poderia quebrar ou soar estranho, também utilizei o eslint e prettier para a padronização do código.</p><br>
      <p>Para realizar esse projeto foi usado as seguintes tecnologias: <strong>reactJs, sass, eslint, prettier, figma, context, redux, react-icons</strong></p><br>
      <a href="https://github.com/MarceloDevCruz/pomodoro-app" target="_blank">GitHub</a><br>
      <a href="https://mfc-pomodoro.netlify.app/" target="_blank">Netlify</a><br>
      `;

      projectContainer.appendChild(elementTitle);
      projectContainer.appendChild(elementText);
    } else if (value === "project-6") {
      elementText.innerHTML = `
      <p>Projeto e desafio do curso de ReactJs proposto para o consumo da API TMDB, uma api gratuita de infomações de filmes internacionais,
      para esse projeto foi criado componentes e páginas especificas para cada função do site, para a inicialização do projeto foi usado 
      o vite, que propõe uma criação e build de projetos mais rápidas e também de menor custo computacional do que o CRA.</p>
      <p> Nesse projeto foi utilizado, <strong> html, css, javascript, es6, React, React router, vite, Consume de API</strong></p><br>
      <p>Veja um pouco mais sobre o projeto: </p><br>
      <a href="https://github.com/MarceloDevCruz/react-tmdb" target="_blank">GitHub</a><br>
      <a href="https://react-tmdb-mfc.netlify.app/" target="_blank">Netlify</a><br>
      `;

      projectContainer.appendChild(elementTitle);
      projectContainer.appendChild(elementText);
    } else if (value === "project-7") {
      elementText.innerHTML = `
    <p>Projeto que fiz utilizando a arquitetura de software MVC <strong>Model View Controller</strong>, Comente-sobre é um <strong>CRUD</strong> que tem autenticação de
    usuários no sistema onde usei o banco de dados MySQL para persistir os dados de login e de comentários de post dos projeto, as funcionalidades
    desse projeto consiste em, escrever um posto qualquer com um título e uma descrição, ou seja o comentário que você deseja fazer para o seu post
    e com isso você pode compartilhar para outros usuários que tenham uma conta o seu post, você também tem a opção de editar, e excluir seus post,
    na página home você pode encontrar todos os post de todos os outros usúarios, também foi realizado features de ordenação dos post, dos mais antigos
    até os mais recentes, e ainda uma feature de busca onde o ORM vai filtrar tanto buscas com o título quanto buscas dentro do comentário do usuário.
    Na persistencia de dados foi usado o pacote do bcrypts para criptografar a senha passada para o banco de dados para requisistos de segurança.</p>
    <p>Além disso, para esse projeto pretendo adicionar outras novas features no futuro, como funcionalidade de like e também de comentário em um determinado post.</p>
    <p>Para desenvolver esse projeto foi usado:<strong> NodeJS, Bootstrap ,bcrypts, express, handlebars, MySql, sequelize, validator e outras dependências... </strong></p><br>
    <p>Veja um pouco mais sobre o projeto: </p><br>
    <a href="https://github.com/MarceloDevCruz/comente-sobre" target="_blank">GitHub</a><br>

    `;
      projectContainer.appendChild(elementTitle);
      projectContainer.appendChild(elementText);
    } else if (value === "project-8") {
      elementText.innerHTML = `
    <p>
      Projeto em ReactJs, junto com sass, um pré-processador css e também eslint junto com prettier que facilitam na produtividade e padronização de código
      prototipado com o Figma, o gerador de senhas, realiza a tarefa de criar uma senha aleatória para o usuário, facilitando o trabalho de segurança
      da informação ao realizar uma senha forte composta de letras, números e simbolos, além disso tem a capacidade de escolher quantos caracteres específicos
      para a criação da senha além de especificar quais conjuntos de caracteres serão usados para a criação. totalmente responsivo foi pensado em praticar
      minhas habilidades em reactJs, usando um simples custom hook além da utilização de contextos com o context provider, além de adicionar algumas ferramentes
      para qualidade do código o eslint e o prettier, além do editor config, também seguindo os padrões BEM e também 7-1 architeture para padronização do css.
    </p>
    <p>Pretendo no futuro criar escolha de temas Noturno (padrão) e light.</p>
    <p>Para realizar esse projeto foi usado as seguintes tecnologias: <strong>node, reactJs, sass, eslint, prettier, figma, context, react-icons</strong></p><br>
    <a href="https://github.com/MarceloDevCruz/password-generator" target="_blank">GitHub</a><br>
    <a href="https://password-generate-mfc.netlify.app/" target="_blank">Netlify</a><br>
    `;
      projectContainer.appendChild(elementTitle);
      projectContainer.appendChild(elementText);
    } else if (value === "project-9") {
      elementText.innerHTML = `
      <p>
        Unsplashgram é uma rede social feita em NodeJs e ReactJs, e com o banco de dados MongoDb, foi projetado pensando em fullstack, usando no banco de dados
        mongoDb com uma instância em cloud, o <a href="https://www.mongodb.com/cloud/atlas/register" target="_blank"> MongoDb Atlas </a> para armazenar posts e fotos dos usuários,
        ele tem as funcionalidades de comentários, likes, postar novas fotos e fazer update do usuário, além de login e registro.
      </p><br>
      <p><strong>Backend</strong></p>
      <p>Foi criada uma api para o unsplashgram em NodeJs com express onde aprendi todos os verbos http GET POST PUT e DELETE colocando em prática ao longo do projeto, como por exemplo
      métodos de atualização de um usuário, com o PUT, método de retornar todos os post da página home, com o GET, deletar um post com o DELETE, e também enviar um novo post
      com o verbo POST, para a estrutura de páginas foi usado o MVC, onde o model foi controlado com a ORM mongoose, onde faz verificações nos dados antes de mandar para o banco
      de dados, é uma ótima alternativa para ter um melhor controle em banco de dados não relacionais, para o controller foram feitas as regras de negócio do projeto, basicamente
      foi tratado como os dados seria tratados e como iriam proceder, e também por último o view, que foi aplicado separado, que é a própria arquitetura front-end...</p>
      <p>Além das pastas dos models e controllers, foram criados middlewares, para verificação de dados e validações de informações repassadas do usuário para o sistema, também
      uma pasta apenas para o tratamento e gerenciamento de rotas. Foi construido um sistema de login cadastro e autenticação de usuários, preocupado com a segurança do sistema
      utilizei a depedência bcryptjs, no qual cuida da segurança de senha dos usuários, criando um hash onde ele gerência as senhas para o sistema, assim, fazendo que nunca seja
      exposto senhas dos usuários em um possível ataque no banco de dados, foi usado também o jsonwebtoken, que é uma estrutura protegida com criptografia, pelo qual dados passam
      pelo mesmo fazendo assim que o sistema seja capaz de identificar a autenticidade de um usuário pelo token que é salva no próprio localstorage do navegador do usuário.</p>
      <p>Para realizar esse projeto foi usado as seguintes tecnologias: <strong>node, express, MVC, bcryptjs, jsonwebtoken, .env, mongoose, multer, nodemon e Postman para teste de rotas.</strong></p><br>
      <a href="https://github.com/MarceloDevCruz/instagram/tree/main/backend" target="_blank">GitHub</a><br>
      <a href="https://unplashgram-api.onrender.com/" target="_blank">Render</a><br>
      `;

      projectContainer.appendChild(elementTitle);
      projectContainer.appendChild(elementText);
    } else if (value === "project-10") {
      elementText.innerHTML = `
      <p>Unsplashgram é uma rede social feita em NodeJs e ReactJs, e com o banco de dados MongoDb, foi projetado pensando em fullstack, usando no banco de dados
      mongoDb com uma instância em cloud, o <a href="https://www.mongodb.com/cloud/atlas/register" target="_blank"> MongoDb Atlas </a> para armazenar posts e fotos dos usuários,
      ele tem as funcionalidades de comentários, likes, postar novas fotos e fazer update do usuário, além de login e registro.
      </p><br>
      <p><strong>Frontend</strong></p>
      <p>Frontend criado para a api unsplashgram, com a tecnologia ReactJs para componentização, router-dom, para criar uma página SPA, junto com sass para pré-processar o css,
      , nesse projeto eu faço o consumo da API que criei, uma rede social com design responsivo e prototipado com o figma, inicialmente foi criada páginas para registro, login, home,
      edição de usuário, post individual, e criação de post.</p>
      <p>Foi usado Redux para gerêncimento de dados e eventos globais na aplicação, com o auxilio do redux-devtools, foi usado padrão de páginas service/slice para melhorar a padronização
      e facilitação do código na hora de implementação do redux e para adição futuras de features, além disso também foi usado custom hooks para autorização do usuário no sistema, e também
      na busca de post com query.</p>
      <p>Para realizar esse projeto foi usado as seguintes tecnologias: <strong>ReactJs, react-icons, react-redux, vite, sass, postcss, figma.</strong></p><br>
      <a href="https://github.com/MarceloDevCruz/instagram/tree/main/frontend" target="_blank">GitHub</a><br>
      <a href="https://unsplashgram.netlify.app/" target="_blank">Netlify</a><br>
      `;
      projectContainer.appendChild(elementTitle);
      projectContainer.appendChild(elementText);
    }
  };

  const removeChildProject = () => {
    const h3 = document.querySelector(".project-content-container > h3");
    const div = document.querySelector(".project-content-container > div");
    projectContainer.removeChild(h3);
    projectContainer.removeChild(div);
  };

  const sandwichMenu = document.querySelector(".sandwich-svg");

  sandwichMenu.addEventListener("click", () => {
    const menuMobile = document.querySelector(".mobile-link");

    menuMobile.classList.contains("display-open")
      ? menuMobile.classList.remove("display-open")
      : menuMobile.classList.add("display-open");
  });
};

Script();
