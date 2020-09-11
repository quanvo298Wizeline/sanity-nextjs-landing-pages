export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5b2cd627337e06af324bf2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vaznnh5e',
                  apiId: '55a3b690-873f-40b8-8a4e-9dcab2c3883e'
                },
                {
                  buildHookId: '5f5b2cd632b957d458f3b0a3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d8myt148',
                  apiId: 'a3893b99-271f-4ae7-a16c-e66e0da10a19'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/quanvo298Wizeline/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d8myt148.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
