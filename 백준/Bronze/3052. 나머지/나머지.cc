#include <stdio.h>

int main() {
  short mod[43], count = 0;
  int input;
  for(int i=0; i<42; i++) {
    mod[i] = 0;
  }

  for(int i=0; i<10; i++) {
    scanf("%d", &input);
    input %= 42;
    if(mod[input] == 0) {
      count++;
      mod[input] = 1;
    }
  }

  printf("%d", count);
}