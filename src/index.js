export const WSMFontStyles = [
    'https://fonts.cdnfonts.com/css/strasua',
    'https://fonts.cdnfonts.com/css/good-times-2',
    'https://fonts.cdnfonts.com/css/pirulen'
]

export const addFonts = (editor) => {
    const styleManager = editor.StyleManager;
    const fontProperty = styleManager.getProperty('typography', 'font-family');
    fontProperty.set('options', [
        ...fontProperty.get('options'),
        {id: "'Strasua', sans-serif", label: 'Strasua'},
        {id: "'Good Times Rg', sans-serif", label: 'Good Times'},
        {id: "'Pirulen Rg', sans-serif", label: 'Pirulen'},
    ])
}

const Plugin = (editor) => {

    editor.on('load', addFonts)

};

export default Plugin;
