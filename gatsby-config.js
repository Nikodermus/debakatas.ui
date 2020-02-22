const rupture = require('rupture');

module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        description:
            'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
        author: '@gatsbyjs',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'deBakatas.com',
                short_name: 'debakatas',
                start_url: '/',
                background_color: '#eb2764',
                theme_color: '#eb2764',
                display: 'minimal-ui',
                icon: 'src/images/ba-favicon.png',
            },
        },
        {
            resolve: 'gatsby-plugin-stylus',
            options: {
                use: [rupture()],
            },
        },
        'gatsby-plugin-offline',
    ],
};
