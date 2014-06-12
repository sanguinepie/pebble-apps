/*
  Author: sanguinepie
  Date: 06.12.14
  Purpose: This file strips all of the meta characters from a URL.
  scrub.c
*/

#include "lib.h"

int main(int argc, char **argv) {
  if(argc != 2) {
    printf("\n\tUsage: %s filename\n\n", argv[0]);
  } else {
    char url[INDEX] = {0};
    char desc[INDEX] = {0};
    char *ptr = NULL;
    char *result = NULL;

    scanf("%[^\n]", url);
    ptr = url;
    result = parse(ptr, desc); 
    printf("\n\tThis is the result: %s\n", result);
  }
  return 0;
}

char *parse(char *in, char *list) { 
  char *out = list;
  int i = 0;

  while(*in) {
    if(*in != ':' && *in != '.' && *in != '/') {
      out[i] = *in;
      i++;
    }
    in = in + 1;
  }
  return out;
}
