export default {
    name: 'blogPost',
    title: 'BlogPost',
    type: 'document',
    fields: [
        {
            name: 'img',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'headText',
            title: 'HeadText',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string'
        },
    ]
}