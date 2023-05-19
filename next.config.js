/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/admin/dashboards/servers',
                permanent: true
            },
            {
                source: '/admin',
                destination: '/admin/dashboards/servers',
                permanent: true
            },
        ]
    },
}

module.exports = nextConfig
