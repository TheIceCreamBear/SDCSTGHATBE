#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
    int* arr = malloc(sizeof(int) * 100);
    for (int i = 0; i < 100; i++) {
        arr[i] = i + 37;
    }

    for (int i = 0; i < 100; i++) {
        printf("%d", arr[i]);
    }

    printf("\n");

    return 0;
}