import Plugin, { addFonts, WSMFontStyles } from "../index"

describe("Fonts plugin", () => {

    describe("Sets up custom fonts", () => {

        it("Executes after load", async () => {
            const editor = {
              on: jest.fn(),
              StyleManager: {
                getProperty: jest.fn()
              }
            }
            Plugin(editor)
            expect(editor.on).toHaveBeenCalledWith('load', expect.any(Function))
            expect(WSMFontStyles.length).toBe(6)
        })
    })

    describe("addFonts", () => {
        it("Adds custom fonts to style manager", () => {
            const expected = [
              {"id": "'Open Sans', sans-serif", "label": "Open Sans"},
              {"id": "'Montserrat', sans-serif", "label": "Montserrat"},
              {"id": "a", "label": "A"}, 
              {"id": "b", "label": "B"}, 
              {"id": "'Strasua', sans-serif", "label": "Strasua"}, 
              {"id": "'Good Times Rg', sans-serif", "label": "Good Times"}, 
              {"id": "'Pirulen Rg', sans-serif", "label": "Pirulen"},
              {"id": "'Abril Fatface', sans-serif", "label": "Abril Fatface"},
            ]
            const set = jest.fn()
            const editor = {
              on: jest.fn(),
              StyleManager: {
                getProperty: jest.fn().mockReturnValue({
                    set,
                    get: () => [
                      {id:'a',label:'A'},
                      {id:'b',label:'B'}
                    ]
                })
              }
            }
            addFonts(editor)
            expect(editor.StyleManager.getProperty).toHaveBeenCalled()
            expect(set).toHaveBeenCalledWith('options', expected)
        })
    })
})
