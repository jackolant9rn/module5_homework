let pets = new Map([
    ['Кролик', 'Роджер'],
    ['Собака', 'Снупи'],
    ['Кот', 'Томас']
  ]);
    for(let [key, value] of pets) {  
        console.log(`Ключ - ${key}, значение - ${value}`);
}