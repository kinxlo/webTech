export default {
    name: 'services',
    title: 'Services',
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
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'desc',
            title: 'Description',
            type: 'string'
        },
    ]
}