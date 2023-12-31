import { useState } from "react";

const MultiSelection = () => {
    const [items, setItems] = useState([
        { id: Math.floor(Math.random() * 1000), name: 'Item 1', isSelected: false },
        { id: Math.floor(Math.random() * 1000), name: 'Item 2', isSelected: false },
        { id: Math.floor(Math.random() * 1000), name: 'Item 3', isSelected: false },
    ]);

    const selected_count = items.filter((item) => item.isSelected).length;

    const handleItemClick = (id) => {
        setItems(items.map((item) => (
            item.id === id
                ? { ...item, isSelected: !item.isSelected }
                : item
        )));
    };

    const HandleToggleSelectAll = (event) => {
        const data_attribute = event.target.getAttribute('data');

        if ( data_attribute=== 'select_all') {
            setItems(items.map((item) => (
                { ...item, isSelected: true }
            )));
        }
        else if (data_attribute === 'unselect_all') {
            setItems(items.map((item) => (
                { ...item, isSelected: false }
            )));
        }
    };

    return (
        <div style={{ border: '1px solid red' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <button onClick={(event) => HandleToggleSelectAll(event)} data='select_all'>Selecionar items</button>

                <button onClick={(event) => HandleToggleSelectAll(event)} data='unselect_all'>Desmarcar items</button>

            </div>

            <p>Item(s) selecionado(s): {selected_count}</p>

            <ul>
                {
                    items.map((item) => (
                        <li
                            key={item.id}
                            style={{ cursor: "pointer", margin: '10px', background: item.isSelected ? 'red' : 'none' }}
                            onClick={() => handleItemClick(item.id)}
                        >
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div >
    );
};

export default MultiSelection;