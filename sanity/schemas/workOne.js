export default {
    name: 'workOne',
    title: 'WorkOne',
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
            title: 'Description',
            type: 'string',
        }
    ]

}