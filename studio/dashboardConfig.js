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
                  buildHookId: '5e53a081c42f9c2aa70bae58',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-eat7uzwo',
                  apiId: '195f09c5-262b-47d4-b42b-2952e38129ba'
                },
                {
                  buildHookId: '5e53a0811487424d41e0b2f2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dq1cy67n',
                  apiId: 'e73a2d14-c560-4197-b425-34b5f2f0c174'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tharindusenadeera/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dq1cy67n.netlify.com', category: 'apps'}
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
