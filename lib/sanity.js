import sanityClient from '@sanity/client'

const options = {
    dataset: process.env.SANITY_DATASET_NAME,
    apiVersion: '2021-07-19',
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production'
}

export default sanityClient(options)