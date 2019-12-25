export default {
    local: {
        app_host: "https://localhost",
        app_name: "Fuse Bulletin Local",
        port: 4000,
        database: {
            name: "client_app",
            host: "localhost",
            port: 27017,
            username: "",
            password: "",
        },
        session_secret: "bf6c8733-3e63-434f-9c0e-78b5279c9927",
        client_secret: "dad81f02-6b13-498a-b2d2-618580741ab9",
        cors_origin: "*",
        csp_src: "'self'"
    },
    development: {
        app_host: "https://fuse-bulletin-api-dev.fusemachines.com",
        app_name: "Fuse Bulletin Dev",
        port: 3000,
        database: {
            name: "client_app",
            host: "127.0.0.1",
            port: 37117,
            username: "clientapp",
            password: "dw4Wgm/n]",
            authenticationDatabase: "client_app"
        },
        session_secret: "bf6c8733-3e63-434f-9c0e-78b5279c9927",
        client_secret: "dad81f02-6b13-498a-b2d2-618580741ab9",
        cors_origin: "https://*.fusemachines.com",
        csp_src: "https://*.fusemachines.com"
    },
    production: {
        app_host: "https://fuse-bulletin-api.fusemachines.com",
        app_name: "Fuse Bulletin",
        port: 3000,
        database: {
            name: "fuse-bulletin-prod",
            host: "10.0.0.10",
            port: 27118,
            username: "bulletin-prod-usr",
            password: "gdhWRe8X+bv3e6XXq",
            authenticationDatabase: "fuse-bulletin-prod"
        },
        session_secret: "bf6c8733-3e63-434f-9c0e-78b5279c9927",
        client_secret: "dad81f02-6b13-498a-b2d2-618580741ab9",
        cors_origin: "https://*.fusemachines.com",
        csp_src: "https://*.fusemachines.com"
    }
}