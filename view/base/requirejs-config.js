const config = {
    waitSeconds: 0,

    map: {
        '*': {
            ko: 'https://cdn.jsdelivr.net/npm/@tko/build.reference@4.0.0-alpha8/dist/build.reference.min.js',
            knockout: 'https://cdn.jsdelivr.net/npm/@tko/build.reference@4.0.0-alpha8/dist/build.reference.min.js',
        },
    },

    shim: {
        'Magento_Ui/js/lib/knockout/bindings/staticChecked': {
            deps: ['Ubermanu_Tko/js/compat'],
        },
    },
};
