export default {
    name: 'workTwo',
    title: 'WorkTwo',
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
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string',
        },
    ]

}