#include <stdio.h>

int main() {
    int n=0, m, cmd[3];
    scanf("%d %d", &n, &m);
    int arr[100] = {0};
    
    for(int i=0; i<m; i++) {
        scanf("%d %d %d", &cmd[0], &cmd[1], &cmd[2]);
        for(int j=cmd[0]-1; j<=cmd[1]-1; j++) {
            arr[j] = cmd[2];
        }
    }
    
    for(int i=0; i<n; i++) {
        if(i > 0) {
            printf(" ");
        }
        printf("%d", arr[i]);
    }
}
