console.log('--- String ---');
console.log('---------');

const text = 'message';

const myMessage = `
The text is ${text.toUpperCase()},
And somesing else.
`;

console.log(myMessage);
console.log(text.charAt(2).toUpperCase());

console.log('---------');
const lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
// spliText
// splitString('abcd efgh', 4) => 'Abc\n efg\nH...' 
console.log('---------');

const splitText = (text, len) => {
  const strArr = [];
  let startPosition = 0;

  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1))
    startPosition += len;
  }
  return strArr.join('\n');
};

// 1. abcdefg, 4 => ['abcd', 'efg'] => ['Abcd', 'Efg'] => 'Abcd\nEfg'
console.log(splitText('abcdefg', 4));

console.log('---------');
console.log('--- sortContacts ---')

// String.fromCodePoint(65); // "A"
// 'Ann'.charCodeAt(0);      // 65

const contacts = [
  {
    name: 'Tom',
    phoneNumbee: '777-77-77',
  },
  {
    name: 'John',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Ann',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Stephan',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Sara',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '111-11-11',
  },
];

const sortContacts = contacts => {
  const result = contacts
      .sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

  return result;
};

console.log(contacts);
console.log(sortContacts(contacts));

console.log('---------');
