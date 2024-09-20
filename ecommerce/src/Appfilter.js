import React from 'react';

const names = ['James', 'John', 'Paul', 'Ringo', 'George', 'Karya', 'Raj'];

function App() {
    return (
        <div>
            <ul>
                {names.filter(name => name.includes('r'))
                .map(filteredName => (
                    <li key={filteredName}>{filteredName}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;