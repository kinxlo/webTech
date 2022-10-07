export default {
    name: 'portfolio',
    title: 'Portfolio',
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
            name: 'desc',
            title: 'Desc',
            type: 'string'
        },
    ]
}