module.exports = {
    pathPrefix: `/gatsby`,
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                url:
                    process.env.WPGRAPHQL_URL ||
                    // `https://hamyab24.ir/test/blog/b2/graphql`,
                    `http://localhost/wordpress/graphql`,
                schema: {
                    perPage: 20, // currently set to 100
                    requestConcurrency: 5, // currently set to 15
                    previewRequestConcurrency: 2, // currently set to 5
                },
                develop: {
                    //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
                    hardCacheMediaFiles: true,
                },
                html: {
                    createStaticFiles: false,
                    useGatsbyImage: false,
                },
                type: {
                    MediaItem: { lazyNodes: true },
                    Comment:{
                        limit: 500
                    }
                },
            }
        },

        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
