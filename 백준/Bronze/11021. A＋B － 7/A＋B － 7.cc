#include <stdio.h>

int main() {
    int a, b, t;
    scanf("%d", &t);
    
    int arr[t];
    
    for(int i=0; i<t; i++) {
        scanf("%d %d", &a, &b);
        arr[i] = a+b;
    }
    
    for(int i=0; i<t; i++) {
        printf("Case #%d: %d\n", (i+1), arr[i]);
    }
}

