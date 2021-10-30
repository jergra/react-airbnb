module.exports = {
    images: {
        domains: ['links.papareact.com']
    },
    
    // the mapbox_key is accessed through vercel
    // otherwise, it would be as below and would be visible on github
    // note: the key value below is fake and is there as an illustration
    
    // env: {
    //     mapbox_key:
    //     "st.grJ1Ijfkfk49sopv02scAkLIjoiY2t2YmTRww4t2hlLsPk5OSDR4.Uxy2sJ93opHGpU93OUy"
    // }
    
    env: {
        mapbox_key: process.env.mapbox_key
    }
}