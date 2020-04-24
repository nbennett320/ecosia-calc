// this is an example of how you might parse the user's 
// search query to control what is shown by your extension
const parse = query => {
    return query.toLowerCase().includes("hello world")
}

export default parse