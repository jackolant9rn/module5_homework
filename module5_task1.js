let result = +prompt ('Введите число');
if (typeof result != 'number') {
    console.log('Упс, кажется, вы ошиблись');
    } else if (Number.isNaN(result)) {
        console.log('Упс, кажется, вы ошиблись');
    } else if (result % 2 === 0) {
        console.log('Это чётное число');
    } else {
        console.log('Это нечётное число');
    }