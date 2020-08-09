export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f2fe7d117794b21f566ab95',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-i54swow2',
                  apiId: '381d7112-0a69-472d-b6e7-6c77358397c5'
                },
                {
                  buildHookId: '5f2fe7d1f5cc1fe849ffd9ad',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-qv8gnkmu',
                  apiId: '10e3fbfd-2d15-437d-b40a-b1541e6e34d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iamrogerli/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-qv8gnkmu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
