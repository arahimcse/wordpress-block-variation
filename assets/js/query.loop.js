wp.domReady(() => {

    /* -----------------------------------------
     * 1. Query Loop Variation (Real Example)
     * ----------------------------------------- */
    wp.blocks.registerBlockVariation(
        'core/query',
        {
            name: 'latest-news-grid',
            title: 'Latest News – Grid',
            description: 'Shows latest posts from the "news" category in a 3-column grid.',
            icon: 'grid-view',

            attributes: {
                query: {
                    postType: 'post',
                    perPage: 6,
                    order: 'desc',
                    orderBy: 'date',
                    taxQuery: [
                        {
                            taxonomy: 'category',
                            terms: [ 'news' ], // category slug
                            field: 'slug',
                        }
                    ]
                },
                displayLayout: {
                    type: 'grid',
                    columns: 3
                }
            },

            // Inner block template (optional)
            innerBlocks: [
                [ 'core/post-featured-image', {} ],
                [ 'core/post-title', { level: 4 } ],
                [ 'core/post-excerpt', {} ],
                [ 'core/post-date', {} ]
            ],

            scope: [ 'inserter', 'block', 'transform' ]
        }
    );
});
