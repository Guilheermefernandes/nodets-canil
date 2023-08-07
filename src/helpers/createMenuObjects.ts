type TypeChoice = ''| 'all' | 'dog' | 'cat' | 'fish'

export const createMenuObjects = (choice: TypeChoice) => {
    let MenuObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(choice !== ''){
        MenuObject[choice] = true;
    }

    return MenuObject
}