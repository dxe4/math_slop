# Subsets as binary strings

*Difficulty 1 of 5 · [Discrete mathematics: structure, counting, extremal reasoning, and matroids](index.md) · exercise 2 of 15*

Give a bijection between subsets of {a,b,c,d} and four-bit strings, encode {a,c}, and use the bijection to determine the number of subsets.

<details>
<summary>Hint 1</summary>

Fix the coordinate order a,b,c,d

</details>

<details>
<summary>Hint 2</summary>

Use 1 for membership and 0 for nonmembership

</details>

<details>
<summary>Worked solution</summary>

Map a subset S to the bit string whose four coordinates correspond to a,b,c,d and whose coordinate is 1 exactly when that element lies in S. The inverse map selects precisely the elements in 1-positions, so the correspondence is bijective. The subset {a,c} maps to 1010. Each of four positions has two choices, so there are 2^4=16 bit strings and therefore 16 subsets.

**Answer.** {a,c} maps to 1010, and the power set has 16 members.

</details>

*Tags: bijection, power-set, combinatorics*
