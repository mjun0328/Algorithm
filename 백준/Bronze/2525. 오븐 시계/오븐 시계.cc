#include <stdio.h>

int main() {
    int time, h, m;
    scanf("%d %d", &h, &m);
    scanf("%d", &time);
    
    h = h*60 + m + time;
    if(h >= 24*60) {
        h -= 24*60;
    }
    m = h%60;
    h = (h-m)/60;
    
    printf("%d %d", h, m);
}
