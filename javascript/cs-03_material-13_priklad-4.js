let i = 0;

while(i < 5) {
    if(i == 3) {
        i++;
        continue;
    }

    console.log(i + 1);
    i++;
}