#include <stdio.h>

int main() {
    int input, student[30], abs[2]={0};
    
    for(int i=0; i<30; i++) {
        student[i] = i+1;
    }
    
    for(int i=0; i<28; i++) {
        scanf("%d", &input);
        student[input-1] = 0;
    }

    for(int i=0; i<30; i++) {
        if(student[i] != 0) {
            if(abs[0] == 0) {
                abs[0] = i+1;
            }else {
                abs[1] = i+1;
            }
        }
    }
    
    if(abs[0] > abs[1]) {
        printf("%d\n%d", abs[1], abs[0]);
    }else {
        printf("%d\n%d", abs[0], abs[1]);
    }
}
