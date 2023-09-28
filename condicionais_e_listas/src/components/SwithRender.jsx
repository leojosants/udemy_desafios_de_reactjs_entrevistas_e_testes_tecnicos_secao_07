// eslint-disable-next-line react/prop-types, no-unused-vars
const SwithRender = ({ programming_language }) => {
    let component;

    switch (programming_language) {
        case 'js':
            component = <div>Linguagem de programação informada: {programming_language}</div>;
            break;
        case 'python':
             component = <div>Linguagem de programação informada: {programming_language}</div>;
            break;
        case 'java':
             component = <div>Linguagem de programação informada: {programming_language}</div>;
            break;
        default:
            component=<div>Linguagem de programação, não encontrada!</div>
            break;
    }

    return component;
};

export default SwithRender;