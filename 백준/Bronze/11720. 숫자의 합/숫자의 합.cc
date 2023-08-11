#include <stdio.h>

int main() {
    int sum=0;
    int a, num;
    scanf("%d", &a);
    char str[a+1];
    char str2[2];
    scanf("%s", str);
    
    for(int i=0; i<a; i++) {
        str2[0] = str[i];
        sscanf(str2, "%d", &num);
        sum += num;
    }
    printf("%d", sum);
}
