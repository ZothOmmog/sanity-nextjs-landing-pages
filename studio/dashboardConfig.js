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
                  buildHookId: '5f84014050faf03029a5f4b1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zpuj1j8k',
                  apiId: 'b354065e-16e4-4dc8-9de5-cc7334500bb8'
                },
                {
                  buildHookId: '5f84014050faf02e54a5f423',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-afroh189',
                  apiId: '0e437acf-5d6e-4972-818f-0919eae5f532'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ZothOmmog/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-afroh189.netlify.app', category: 'apps'}
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
