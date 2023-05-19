export const WSMFontStyles = [
    'https://fonts.cdnfonts.com/css/strasua',
    'https://fonts.cdnfonts.com/css/good-times-2',
    'https://fonts.cdnfonts.com/css/pirulen',
    'https://fonts.cdnfonts.com/css/open-sans',
    'https://fonts.cdnfonts.com/css/montserrat',
    'https://fonts.cdnfonts.com/css/abril-fatface'
]

export const addFonts = (editor) => {
    const styleManager = editor.StyleManager;
    const fontProperty = styleManager.getProperty('typography', 'font-family');
    fontProperty.set('options', [
        {id: "'Open Sans', sans-serif", label: 'Open Sans'},
        {id: "'Montserrat', sans-serif", label: 'Montserrat'},
        ...fontProperty.get('options'),
        {id: "'Strasua', sans-serif", label: 'Strasua'},
        {id: "'Good Times Rg', sans-serif", label: 'Good Times'},
        {id: "'Pirulen Rg', sans-serif", label: 'Pirulen'},
        {id: "'Abril Fatface', sans-serif", label: 'Abril Fatface'},
    ])
}

const Plugin = (editor) => {

    editor.on('load', addFonts)

};

export default Plugin;
