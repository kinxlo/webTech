export default {
    name: 'priceCard',
    title: 'PriceCard',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'subTitle',
            title: 'SubTitle',
            type: 'string'
        },
        {
            name: 'list',
            title: 'List',
            type: 'array',
            of:[{type: 'string'}]
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'theme',
            title: 'Theme',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            hidden: true
        },
        {
            name: 'number',
            title: 'Number',
            type: 'number',
        },
    ]
}