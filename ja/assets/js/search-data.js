
const currentUrl = window.location.href;
const siteUrl = "https://Ag3ntN.github.io"; 
let updatedUrl = currentUrl.replace("https://Ag3ntN.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("ja".length > 0) {
  updatedUrl = updatedUrl.replace("/ja", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre",
    title: "sobre",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/ja/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "um tema simples para acadêmicos",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/ja/blog/";
          },
        },{id: "nav-publicações",
          title: "publicações",
          description: "publicações por categoria em ordem cronológica reversa. gerado pelo jekyll-scholar.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/ja/publications/";
          },
        },{id: "nav-projetos",
          title: "projetos",
          description: "Uma crescente coleção de seus projetos interessantes.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/ja/projects/";
          },
        },{id: "nav-repositórios",
          title: "repositórios",
          description: "Edite o `_data/repositories.yml` e mude as listas `github_users` e `github_repos` para incluir seu próprio perfil do GitHub e repositórios.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/ja/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Esta é uma descrição da página. Você pode modificá-la em &#39;_pages/cv.md&#39;. Também pode alterar ou remover o botão no topo de download de pdf.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/ja/cv/";
          },
        },{id: "nav-ensino",
          title: "ensino",
          description: "Materiais de cursos que você ministrou. Substitua esse texto com sua descrição.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/ja/teaching/";
          },
        },{id: "nav-membros",
          title: "membros",
          description: "membros do grupo de pesquisa ou laboratório",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/ja/people/";
          },
        },{id: "dropdown-publicações",
              title: "publicações",
              description: "",
              section: "déroulant",
              handler: () => {
                window.location.href = "/ja/publications/";
              },
            },{id: "dropdown-projetos",
              title: "projetos",
              description: "",
              section: "déroulant",
              handler: () => {
                window.location.href = "/ja/projects/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "déroulant",
              handler: () => {
                window.location.href = "/ja/blog/";
              },
            },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "articles",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "articles",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/ja/books/en-us/the_godfather/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/ja/books/pt-br/the_godfather/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "projets",handler: () => {
              window.location.href = "/ja/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "projets",handler: () => {
              window.location.href = "/ja/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "projets",handler: () => {
              window.location.href = "/ja/projects/9_project/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "projets",handler: () => {
              window.location.href = "/ja/projects/en-us/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "projets",handler: () => {
              window.location.href = "/ja/projects/en-us/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "projets",handler: () => {
              window.location.href = "/ja/projects/en-us/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "projets",handler: () => {
              window.location.href = "/ja/projects/en-us/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "projets",handler: () => {
              window.location.href = "/ja/projects/en-us/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "projets",handler: () => {
              window.location.href = "/ja/projects/en-us/6_project/";
            },},{
        id: 'social-email',
        title: 'envoyer un courriel',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: 'langues',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'changer le thème en clair',
      description: 'changer le thème du site en clair',
      section: 'thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'changer le thème en sombre',
      description: 'changer le thème du site en sombre',
      section: 'thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'utiliser le thème par défaut du système',
      description: 'changer le thème du site selon le système par défaut',
      section: 'thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];
