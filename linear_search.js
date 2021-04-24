const friends = ['SpiderMan', 'IronMan', 'AntMan', 'GoatMan'];

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if(element == 'GoatMan') {
        return i;
    }
}