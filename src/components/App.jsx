import React from 'react';
import Entry from './Entry';
import emojipedia from '../emojipedia';
//console.log(emojipedia);

function createEntry(EmojiTerm) {
  return (
    <div>
      <Entry
        key={EmojiTerm.id}
        emoji={EmojiTerm.emoji}
        name={EmojiTerm.name}
        description={EmojiTerm.meaning}
      />
    </div>
  );
}

function App(params) {
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
