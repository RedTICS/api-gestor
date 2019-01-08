export const connectionStrings = {
    mongoDB_main: 'mongodb://localhost/ges_expedientes'
};

// Habilita/deshabilita módulos de la API
export const modules = {
    ges: {
        active: true,
        path: './modules/ges/routes',
        route: '/modules/ges'
    },
    
};