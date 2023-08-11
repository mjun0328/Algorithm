#include <stdio.h>

int main() {
    int n, m, a, b, temp, bucket[100];
    scanf("%d %d", &n, &m);
    
    for(int i=0; i<n; i++) {
        bucket[i] = i+1;
    }
    
    for(int i=0; i<m; i++) {
        scanf("%d %d", &a, &b);
        temp = bucket[a-1];
        bucket[a-1] = bucket[b-1];
        bucket[b-1] = temp;
    }
    
    for(int i=0; i<n; i++) {
        if(i > 0) {
            printf(" ");
        }
        printf("%d", bucket[i]);
    }
}
