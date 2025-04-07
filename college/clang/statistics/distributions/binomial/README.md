# Dice Simulation

This program is designed to compute probabilities related to dice rolls using Bernoulli and Binomial distributions. The program calculates the expected value, variance, and the probability of a specific outcome occurring a certain number of times when rolling a die multiple times. 

## Features

- **Bernoulli Distribution**: Calculates the probability of rolling a specific number on a single die roll.
- **Binomial Distribution**: Calculates the probability of a specific number occurring a certain number of times in a series of die rolls.
- **Factorial Calculation**: Used for computing binomial coefficients in the binomial distribution formula.
- **Input Validation**: Ensures that inputs are valid and meaningful (positive integers).

## Table of Contents

1. [Description](#description)
2. [How to Use](#how-to-use)
3. [Functions](#functions)
4. [Example](#example)
5. [License](#license)

---

## Description

This program asks the user for input parameters and then calculates various statistics based on dice rolls. Specifically, it uses the **Bernoulli distribution** for a single roll and the **Binomial distribution** for multiple rolls. It also includes error handling for invalid inputs and ensures that the number of rolls and successes are reasonable.

### Input Parameters:
1. **Number of faces on the die**: The program prompts the user to specify how many faces their die has.
2. **Desired number**: The user inputs the number they want to see on the die.
3. **Number of rolls**: The user indicates how many times the die will be rolled.
4. **Desired number of successes**: The program calculates the probability of the desired number showing up a specific number of times.

### Output:
- The program outputs the **expected value (E[X])**, **variance**, and the **probability** of the desired number showing up a specific number of times.
- For single die rolls, it computes the Bernoulli distribution (with equal probability for each face of the die).
- For multiple rolls, it computes the Binomial distribution using factorials.

---

## How to Use

1. **Compile the Code**:
   ```
   gcc -o dice_simulation dice_simulation.c -lm
   ```

2. **Run the Program**:
   ```
   ./dice_simulation
   ```

3. **Input Prompts**:
   The program will sequentially ask you for the following inputs:
   - Number of faces on the die
   - The number you want to track for success
   - The number of rolls
   - The number of times you want the number to appear (for multiple rolls)

   The program will validate that the inputs are correct and provide an error message if necessary.

4. **Results**:
   Once the program receives all the inputs, it will output the following information:
   - The expected value (E[X])
   - The variance
   - The probability of the specific number showing up a desired number of times

---

## Functions

### 1. `bool check_number(int arr_len, int arr[], int num)`
- **Purpose**: Checks if a given number exists in the list of die faces.
- **Parameters**:
  - `arr_len`: The number of faces on the die.
  - `arr[]`: An array containing the faces of the die.
  - `num`: The number to check.
- **Returns**: `true` if the number exists in the array, otherwise `false`.

### 2. `long long factorial(int num)`
- **Purpose**: Computes the factorial of a number using recursion.
- **Parameters**:
  - `num`: The number to calculate the factorial for.
- **Returns**: The factorial of the given number.

### 3. `float bernoulli(int num_faces)`
- **Purpose**: Calculates the probability of a specific number on a single die roll.
- **Parameters**:
  - `num_faces`: The number of faces on the die.
- **Returns**: The probability of rolling any specific face (1/n).

### 4. `void binomial(int num_faces, int rounds, int success_num, int successes)`
- **Purpose**: Calculates the binomial distribution for multiple dice rolls, specifically the probability of the desired number showing up a certain number of times.
- **Parameters**:
  - `num_faces`: The number of faces on the die.
  - `rounds`: The number of times the die is rolled.
  - `success_num`: The number to track for success.
  - `successes`: The number of successes (desired outcomes) for the calculation.
- **Returns**: None. It prints the results of the probability calculation.

---

## Example

### Example 1: Single Roll
For a six-faced die, the user might input:
- **Number of faces**: 6
- **Desired number**: 3
- **Number of rolls**: 1

The program will output:
```
RESULTADO:

O valor esperado (E[X]) é 1/6 ou 0.17
A variância é de ±0.17
A chance de cair o número 3 num dado de 6 faces é de 16.67%
```

### Example 2: Multiple Rolls (Binomial Distribution)
For a six-faced die, the user might input:
- **Number of faces**: 6
- **Desired number**: 3
- **Number of rolls**: 5
- **Desired number of successes**: 2

The program will output:
```
RESULTADO:

O valor esperado (E[X]) é 5/6 ou 0.83
A variância é ±0.14
A chance de cair o número 3, 2 vezes, num dado de 6 faces, considerando que ele foi jogado num total de 5 vezes é de 3.43%
```

---

## License

This program is open source and distributed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to modify and use this program for your dice probability calculations!
