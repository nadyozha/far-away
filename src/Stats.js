export default function Stats({ items }) {
    if (!items.length) {
        return (
            <footer className='stats'>
                <em>
                    Start adding some itens to your packing list 🚀
                </em>
            </footer>
        );
    }
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const packedProcent = Math.round((numPacked / numItems) * 100);
    return (
        <footer className='stats'>
            <em>
                {packedProcent === 100 ? 'You got everything! Ready to go 🚀'
                    :
                    `💼 You have ${numItems} items on your list, and you alredy packed ${numPacked} (${packedProcent}%)`}
            </em>
        </footer>
    );
}