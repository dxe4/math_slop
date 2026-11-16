# Exclusive is not independent

*Difficulty 2 of 5 · [Probability modeling](index.md) · exercise 3 of 15*

Events $A$ and $B$ are mutually exclusive, with $P(A)=0.3$ and $P(B)=0.4$. Are they independent? Justify from the definition.

<details>
<summary>Hint 1</summary>

Mutually exclusive means $P(A\cap B)=0$

</details>

<details>
<summary>Hint 2</summary>

Independence would require $P(A\cap B)=P(A)P(B)$

</details>

<details>
<summary>Worked solution</summary>

Because $A$ and $B$ are mutually exclusive, $P(A\cap B)=0$. Independence would require $P(A\cap B)=P(A)P(B)=0.3\cdot0.4=0.12$. These are unequal, so the events are dependent. Observing $A$ occurs makes $B$ impossible; it therefore changes $B$'s probability from $0.4$ to zero.

**Answer.** No; $0=P(A\cap B)\ne P(A)P(B)=0.12$.

</details>

*Tags: independence, mutual exclusion*
