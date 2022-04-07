const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/app.js')
    },
    output: {
        path: path.resolve(__dirname,'./dist/javascript'),
        filename: "[name].min.js",
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname,'dist'),
        port: 5000,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [

    ],


}


/**
 * - Definieren des modes: Entweder in Production oder Development
 * - Der Entry Point: Welche File ist quasi der Anfang
 * - Über diesen Punkt geht rekurisv die Abhängigkeiten durch
 * - output: Hier werden dann die gesammelten Dateien zusammengeführt. 
 * - devtool: fürs Debugging
 * - devServer: Für den Server und dessen Optionen
 * - Module: Die Regelungen, da anfangs nur JS akzeptiert wird. 
 * - Sprich man benötigt Loader, die sowas wie CSS oder JSX laden können
 * - plugins: für weitere Funktionalität.
 * - https://www.valentinog.com/blog/webpack/
 */