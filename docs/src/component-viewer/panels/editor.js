import * as monaco from 'monaco-editor';

const CONFIG = {
    fontSize: 14,
    lineNumbers: "off",
    minimap: {
        enabled: false
    },
    language: 'html'
};

export const createEditor = (panel, changeHandler) => {
    let editor = monaco.editor.create(panel, CONFIG);
    let model = editor.getModel();
    
    model.onDidChangeContent(event => changeHandler(model.getValue()));
    return content => {
        model.setValue(content);
    }
}