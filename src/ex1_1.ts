interface IPerson{
    id: number,
    name: string
}

const data: IPerson[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];

function extractValues<T, K extends keyof T>(data: T[], name: K){
    return data.map(value => value[name] );
}

const result = extractValues(data, 'name');

console.log(result)