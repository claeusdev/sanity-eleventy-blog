export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5ee4e6a3b2863f9686b7401e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-sgnfiicb',
                  apiId: '42d7dc91-3e65-4915-a9f4-063eab95e331'
                },
                {
                  buildHookId: '5ee4e6a4b2863f1834b746ca',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-opxyqz8z',
                  apiId: '6840129b-909d-4f89-9021-a0eeea0584a7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/claeusdev/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-opxyqz8z.netlify.app', category: 'apps'}
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
