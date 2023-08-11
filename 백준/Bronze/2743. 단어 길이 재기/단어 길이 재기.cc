#include <stdio.h>

int main() {
    int count = 0;
    char string[101];
    scanf("%s", string);
    
    while(string[count] != '\0') {
        count++;
    }
    printf("%d", count);
}
