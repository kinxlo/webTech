export default {
    name: 'blogCard',
    title: 'BlogCard',
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
            name: 'text1',
            title: 'Text1',
            type: 'string'
        },
        {
            name: 'text2',
            title: 'Text2',
            type: 'string'
        },
        {
            name: 'text3',
            title: 'Text3',
            type: 'string'
        },
        {
            name: 'mainText',
            title: 'MainText',
            type: 'string'
        },
    ]
}