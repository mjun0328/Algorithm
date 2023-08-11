#include <stdio.h>

int main() {
    int t;
    scanf("%d", &t);
    
    int num1[t], num2[t];
    
    for(int i=0; i<t; i++) {
        scanf("%d %d", &num1[i], &num2[i]);
    }
    
    for(int i=0; i<t; i++) {
        printf("Case #%d: %d + %d = %d\n", (i+1), num1[i], num2[i], (num1[i] + num2[i]));
    }
}

