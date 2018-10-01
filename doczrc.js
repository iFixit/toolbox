export default {
   htmlContext: {
      head: {
         links: [
            {
               rel: 'stylesheet',
               href: 'https://fonts.googleapis.com/css?family=Lato:400,700',
            },
         ],
      },
   },
   themeConfig: {
      styles: {
         body: {
            fontFamily: 'Lato',
         },
         h1: {
            fontWeight: 700,
         },
         table: {
            fontFamily: 'Lato',
            fontSize: 16,
         },
      },
   },
};
