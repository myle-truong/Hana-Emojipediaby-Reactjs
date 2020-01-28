import React from 'react';
import Entry from './Entry';
import emojipedia from '../emojipedia';
//console.log(emojipedia);

function createEntry(EmojiTerm) {
  return (
    <div className="term">
      <Entry
        key={EmojiTerm.id}
        image={EmojiTerm.src}
        name={EmojiTerm.name}
        description={EmojiTerm.meaning}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Hana's Emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
