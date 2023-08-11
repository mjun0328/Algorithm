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
        printf("%d\n", arr[i]);
    }
}

