#include <stdio.h>

int main() {
    int n, max=0;
    float sum=0;
    scanf("%d", &n);
    float score[n];
    
    for(int i=0; i<n; i++) {
        if(i == 0) {
            scanf("%f", &score[i]);
        }else {
            scanf(" %f", &score[i]);
        }
        
        if(max < score[i]) {
            max = score[i];
        }
    }
    
    for(int i=0; i<n; i++) {
        sum += score[i]/max*100;
    }
    printf("%f", sum/n);
}
