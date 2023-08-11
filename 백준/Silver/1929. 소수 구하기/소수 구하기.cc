#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    short mod[b];

    mod[0] = 0;
    for(int i=2; i<=b; i++) {
        mod[i-1] = 1;
    }

    for(int i=2; i<=b; i++) {
        if(mod[i-1] == 1) {
            for(int j=2; j*i<=b; j++) {
                mod[j*i-1] = 0;
            }
        }
    }

    for(int i=a; i<=b; i++) {
        if(mod[i-1] == 1) {
            printf("%d\n", i);
        }
    }
}