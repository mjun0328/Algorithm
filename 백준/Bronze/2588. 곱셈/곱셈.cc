#include <stdio.h>

int main() {
    int val1, val2;
    scanf("%d", &val1);
    scanf("%d", &val2);
    int c = val2%10;
    int b = (val2%100 - c)/10;
    int a = (val2 - b*10 - c)/100;
    printf("%d\n%d\n%d\n%d", val1*c, val1*b, val1*a, val1*val2);
}
