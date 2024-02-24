import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
    fullCode: {
        html: string
        css: string
        javascript: string
    },
    currentLanguage: "html" | "css" | "javascript",
}

const initialState: CompilerSliceStateType = {
    fullCode: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Project</title>
</head>
<body>
    <div class="container">
        <h1>Mini Project</h1>
        <form id="form">
            <label for="name">Enter your name:</label>
            <input type="text" id="name" name="name" onkeydown="submitForm()" onkeyup="submitForm()" required>
            <button type="button" onclick="submitForm()">Submit</button>
        </form>
        <div id="output"></div>
    </div>
</body>
</html>
`,
        css: `.container {
    width: 50%;
    margin: 50px auto;
    text-align: center;
}

form {
    margin-bottom: 20px;
}

input {
    padding: 8px;
    margin-right: 10px;
}

button {
    padding: 8px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
`,
        javascript: `function submitForm() {
    var name = document.getElementById('name').value;
    var output = document.getElementById('output');
    
    if (name.trim() === '') {
        output.innerText = 'Please enter your name.';
    } else {
        output.innerText = 'Hello, ' + name + '! Welcome to the Mini Project.';
    }
}
`,
    },
    currentLanguage: "html",
}

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action: PayloadAction<CompilerSliceStateType['currentLanguage']>) => {
            state.currentLanguage = action.payload
        },
        updateCodeValue: (state, action: PayloadAction<string>) => {
            state.fullCode[state.currentLanguage] = action.payload
        },
    }
})

export default compilerSlice.reducer

export const {
    updateCurrentLanguage,
    updateCodeValue,
} = compilerSlice.actions