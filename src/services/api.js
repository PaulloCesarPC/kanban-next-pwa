export function loadLists() {
    return [
      { 
        title: 'Tarefas', 
        creatable: true,
        cards: [
          {
            id: 1,
            content: 'Estudar VueJs',
            content: 'Estudar ReactJS',
            labels: ['#7159c1'],
            user: 'https://avatars.githubusercontent.com/u/15432350?v=4'
          },
          {
            id: 2,
            content: 'Criar componente para kanban',
            labels: ['#7159c1'],
            user: 'https://avatars.githubusercontent.com/u/15432350?v=4'
          },
          {
            id: 3,
            content: 'Estudar  React Native',
            labels: ['#7159c1'],
            user: 'https://avatars.githubusercontent.com/u/15432350?v=4'
          },
          {
            id: 4,
            content: '"NextJS: Utilizando server-side rendering com ReactJS"',
            labels: ['#54e1f7'],
            user: 'https://avatars.githubusercontent.com/u/15432350?v=4'
          },
          {
            id: 5,
            content: 'Testes e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://avatars.githubusercontent.com/u/15432350?v=4'
          },
        ]
      },
      { 
        title: 'Fazendo', 
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'Recriando clones de Projetos',
            labels: [],
            user: 'https://avatars.githubusercontent.com/u/15432350?v=4'
          }
        ]
      },
      { 
        title: 'Pausado', 
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Geolocalização e mapas com React Native',
            labels: ['#7159c1'],
            user: 'https://avatars.githubusercontent.com/u/15432350?v=4'
          },
          {
            id: 8,
            content: 'Estudar VueJs',
            labels: ['#54e1f7'],
            user: 'https://avatars.githubusercontent.com/u/15432350?v=4'
          },
          {
            id: 9,
            content: 'Ajustes na biblioteca unform',
            labels: [],
          }
        ]
      },
      { 
        title: 'Concluído', 
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Gravar aula sobre deploy e CI com React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Gravar testes e deploy ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }