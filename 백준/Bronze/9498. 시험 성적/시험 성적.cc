#include <stdio.h>

int main() {
    int score;
    scanf("%d", &score);
    //90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D
    if(score >= 90) {
        printf("A");
    }else if(score >= 80) {
        printf("B");
    }else if(score >= 70) {
        printf("C");
    }else if(score >= 60) {
        printf("D");
    }else {
        printf("F");
    }
}
