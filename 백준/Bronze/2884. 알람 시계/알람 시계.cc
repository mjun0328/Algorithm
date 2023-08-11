#include <stdio.h>

int main() {
    int time, h, m;
    scanf("%d %d", &h, &m);
    
    time = h*60 + m - 45;
    if(time < 0) {
        time += 24*60;
    }
    m = time%60;
    h = (time-m)/60;
    
    printf("%d %d", h, m);
}
