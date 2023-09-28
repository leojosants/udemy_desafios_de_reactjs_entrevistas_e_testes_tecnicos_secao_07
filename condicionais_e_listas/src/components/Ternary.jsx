// eslint-disable-next-line react/prop-types
const Ternary = ({ condition }) => {
    return (
        <div>
            {
                condition
                    ? (<p>A condição passada por props é: <strong>verdadeira</strong></p>)
                    : (<p>A condição passada por props é: <strong>falsa</strong></p>)
            }
        </div>
    );
};

export default Ternary;