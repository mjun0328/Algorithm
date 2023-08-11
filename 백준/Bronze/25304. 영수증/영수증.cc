#include <stdio.h>

int main() {
    int total, count, a, b;
    int sum = 0;
    scanf("%d", &total);
    scanf("%d", &count);
    
    for(int i=0; i<count; i++) {
        scanf("%d %d", &a, &b);
        sum += a*b;
    }
    
    if(sum == total) {
        printf("Yes");
    }else {
        printf("No");
    }
}
