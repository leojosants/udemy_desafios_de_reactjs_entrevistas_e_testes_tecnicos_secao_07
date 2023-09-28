const TimeBased = () => {
    let date = new Date().getHours();
    let greeting;

    if (date < 12) {
        greeting = `São ${date}hs - Bom dia!`
    }
    else if (date < 18) {
        greeting = `São ${date}hs - Boa tarde!`
    }
    else {
        greeting = `São ${date}hs - Boa noite!`
    }

    return (
        <div>
            <h3>{greeting}</h3>
        </div>
    );
};

export default TimeBased;