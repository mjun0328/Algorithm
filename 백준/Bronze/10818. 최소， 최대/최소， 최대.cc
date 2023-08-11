#include <stdio.h>

int main() {
    int n, a, min=0, max=0;
    scanf("%d", &n);
    
    for(int i=0; i<n; i++) {
        if(i == 0) {
            scanf("%d", &a);
        }else {
            scanf(" %d", &a);
        }
        if(i == 0) {
            min = a;
            max = a;
        }else {
            if(min > a) {
                min = a;
            }
            if(max < a) {
                max = a;
            }
        }
    }
    printf("%d %d", min, max);
}
