#include <stdio.h>
#include <string.h>

int main() {
    int count;
    char string[1000];
    scanf("%d", &count);
    
    for(int i=0; i<count; i++) {
        scanf("%s", string);
        printf("%c%c\n", string[0], string[strlen(string)-1]);
    }
}
