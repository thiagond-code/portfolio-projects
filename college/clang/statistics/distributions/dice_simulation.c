#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>
#include <math.h>

bool check_number(int arr_len, int arr[], int num);
float bernoulli(int num_faces);
void binomial(int num_faces, int rounds, int success_num, int successes);
long long factorial(int num);

/* 
  Verifica a presença de um número num array
  
  Parâmetros:
  
  - Número n
*/
bool check_number(int arr_len, int arr[], int num) 
{
    for (int i = 0; i < arr_len; i++)
    {
        if (num == arr[i])
        {
            return true;
        }
    }
    
    printf("\n");
    printf("Erro: O número pedido não existe. Insira uma face válida.\n\n");
    return false;
}

/*
    Calcula o fatorial de um número usando a recursão
    
    Parâmetros:
    
    - Número n
    
    O fatorial de um número n (n ≥ 1) é igual a n * (n-1)!
*/
long long factorial(int num) 
{
    if (num == 0 || num == 1) 
    {
        return 1;
    } 
    
    return num * factorial(num - 1);
}

/*
    Calcula a distribuição de Bernoulli de um único lançamento de dado
    
    Parâmetros:
    
    - Número de faces
    
    Como as chances de cair em qualquer face de um dado honesto com n faces 
    são iguais, é possível concluir que, portanto, a chance das faces 
    individuais é igual a 1/n.
*/
float bernoulli(int num_faces)
{
    return (1 / (float) num_faces);
}

/*
    Calcula a distribuição binomial de uma série de lançamento de dados 
    e seus respectivos índices.
    
    Parâmetros:
    
    - Número de faces
    - Quantidade de ensaios de Bernoulli (lançamentos)
    - Número desejado
    - Quantidade de sucessos (com base no número desejado)
*/
void binomial(int num_faces, int rounds, int success_num, int successes)
{
    const double BIN_COEFF = (factorial(rounds) / (factorial(successes) * factorial((rounds - successes))));
    const double PROB_SUCCESS = bernoulli(num_faces);
    const double PROB_FAIL = 1 - PROB_SUCCESS;
    
    const float PROB_FUNC = BIN_COEFF * pow(PROB_SUCCESS, successes) * pow(PROB_FAIL, ((rounds - successes)));
    printf("\n");
    printf("-------------------------------------\n");
    printf("RESULTADO:\n\n");
    printf("O valor esperado (E[X]) é %d/%d ou %.2f\n", rounds, num_faces, rounds * PROB_SUCCESS);
    printf("A variância é ±%.2f\n", rounds * PROB_SUCCESS * PROB_FAIL);
    printf("A chance de cair o número %d, %d vezes, num dado de %d faces, considerando que ele foi jogado num total de %d vezes é de %.2f%%\n", success_num, successes, num_faces, rounds, (PROB_FUNC * 100));
    printf("-------------------------------------\n");
    return;
}

int main()
{
    int num_faces = 1;
    int rounds = 1;
    int successes = 1;
    int success_num = 1;
    
    // Obtém a quantidade de faces no dado
    do
    {
        printf("Quantas faces tem o seu dado? ");
        if (scanf("%d", &num_faces) != 1)
        {
            printf("Erro: Entrada inválida. Insira um NÚMERO POSITIVO.");
        }
    }
    while(num_faces <= 0);
    
    printf("\n");
    
    int faces[num_faces];
    
    // Popula o array com as faces do dado
    for (int i = 0; i < num_faces; i++)
    {
        do
        {
            printf("Face #%d: ", i + 1);
            if (scanf("%d", &faces[i]) != 1)
            {
                printf("Erro: Entrada inválida. Insira um NÚMERO POSITIVO.");
                while (getchar() != '\n');
            }
        }
        while(faces[i] <= 0);
    }
    
    printf("\n");
    
    // Obtém o número desejado no dado
    do
    {
        printf("Qual é o número que você deseja no dado? ");
        if (scanf("%d", &success_num) != 1)
        {
            printf("Erro: Entrada inválida. Insira um NÚMERO POSITIVO.");
            while (getchar() != '\n');
        }
    }
    while(!check_number(num_faces, faces, success_num) || success_num <= 0);
    
    // Obtém a quantidade de ensasios de Bernoulli (lançamentos)
    do
    {
        printf("Quantas vezes você quer jogar o dado? ");
        if (scanf("%d", &rounds) != 1)
        {
            printf("Erro: Entrada inválida. Insira um NÚMERO POSITIVO.");
            while (getchar() != '\n');
        }
    }
    while(rounds <= 0);
    
    // Calcula a distribuição de Bernoulli e seus respectivos índices
    if (rounds == 1)
    {
        const float RESULT = bernoulli(num_faces);
        printf("\n");
        printf("-------------------------------------\n");
        printf("RESULTADO:\n\n");
        printf("O valor esperado (E[X]) é 1/%d ou %.2f\n", num_faces, RESULT);
        printf("A variância é de ±%.2f\n", RESULT * (1 - RESULT));
        printf("A chance de cair o número %d num dado de %d faces é de %.2f%%\n", success_num, num_faces, (RESULT * 100));
        printf("-------------------------------------\n");
        return 0;
    }
    
    // Obtém a quantidade desejada de sucessos (com base no número desejado)
    do 
    {
        printf("Quantas vezes você deseja que o seu número apareça? ");
        if (scanf("%d", &successes) != 1)
        {
            printf("Erro: Entrada inválida. Insira um NÚMERO POSITIVO.");
            while (getchar() != '\n');
        }
    }
    while(successes <= 0);
    
    // Verifica a impossibilidade de alcançar a quantidade desejada de sucessos (em vista do número de ensaios)
    if (successes > rounds)
    {
        printf("A possibilidade é nula, já que exigiria mais lançamentos.\n");
        return 1;
    }
    
    binomial(num_faces, rounds, success_num, successes);
    return 0;
}
