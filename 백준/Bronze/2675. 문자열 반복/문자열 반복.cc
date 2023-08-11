#include <stdio.h>
#include <string.h>

int main() {
    int t, r;
    char str[21];
    scanf("%d", &t);
    
    for(int i=0; i<t; i++) {
        if(i > 0) {
            printf("\n");
        }
        scanf("%d %s", &r, str);
        for(int j=0; j<strlen(str); j++) {
            for(int k=0; k<r; k++) {
                printf("%c", str[j]);
            }
        }
    }
}
