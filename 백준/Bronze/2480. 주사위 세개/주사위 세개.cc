#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    
    if(a==b && b==c && c==a) {
        printf("%d", 10000+a*1000);
    }else if(a==b || b==c || c==a) {
        if(b==c) {
            a = b;
        }
        printf("%d", 1000+a*100);
    }else {
        if(a<b) {
            a = b;
        }
        if(a<c) {
            a = c;
        }
        printf("%d", a*100);
    }
}

