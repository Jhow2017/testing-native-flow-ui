module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: '.',
                    extensions: [
                        '.js',
                        '.jsx',
                        '.ts',
                        '.tsx',
                        '.android.js',
                        '.android.tsx',
                        '.ios.js',
                        '.ios.tsx',
                    ],
                    alias: {
                        '@ds': './src/ds-react-native',
                        '@images': './src/assets/',
                        '@screens': './src/screens/',
                        '@components': './src/components/',
                    },
                },
            ],
        ],
    };
};
