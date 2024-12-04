
export default function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li id={item.id} packed={item.packed ? "true" : undefined}>
            <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}
