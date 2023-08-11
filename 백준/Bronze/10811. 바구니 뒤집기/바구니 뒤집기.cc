#include <stdio.h>

int main() {
    int array[100], temp[100], num, count, a, b;
    scanf("%d %d", &num, &count);
    for(int i=0; i<num; i++) {
        array[i] = i+1;
    }
    
    for(int i=0; i<count; i++) {
        scanf("%d %d", &a, &b);
        for(int j=a-1; j<=b-1; j++) {
            temp[j] = array[j];
        }
        for(int j=a-1; j<=b-1; j++) { // a-1-j=-k
            array[b-1+a-1-j] = temp[j];
        }
    }
    
    for(int i=0; i<num; i++) {
        if(i > 0) {
            printf(" ");
        }
        printf("%d", array[i]);
    }
}
