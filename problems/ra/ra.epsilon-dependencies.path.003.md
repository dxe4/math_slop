# Find a close term and a far term in the same proposed tail

*Easy · [Real analysis](index.md)*

For positive integer n, let $a_{n}=0$ when n is even and $a_{n}=1$ when n is odd. Consider the proposed tail beginning at $N=37$, with tolerance $\varepsilon =1/4$ around $0$. Give any exact integer near\_index≥$37$ for which \|a\_{near\_index}\|&lt;$1/4$, and any exact integer far\_index≥$37$ for which \|a\_{far\_index}\|≥$1/4$. Either index may come first; there is no requirement that near\_index&lt;far\_index. One close term does not establish the whole-tail bound; one far term refutes this proposed tail. Your submitted pair checks this $N=37$ instance only. In your optional explanation, separate that instance from an argument for every positive proposed N.

```answer
{"answer":{"kind":"integer_residue_pair_with_open_reasoning","expected_constraints":{"minimum_inclusive":37,"modulus":2,"first_residue":0,"second_residue":1},"checker_scope":"Checks the two exact integer witnesses for the fixed proposed tail N=37 and fixed tolerance 1/4: both indices must belong to that tail, the first term must be close and the second far. There is no ordering constraint between the indices. Optional prose and any argument quantified over every proposed tail remain unassessed."}}
```

<details>
<summary>Hint 1</summary>

The permitted errors are $0$ at even indices and $1$ at odd indices. Check tail membership separately from the error.

</details>

<details>
<summary>Hint 2</summary>

Choose an even index at least $37$ for the close term and an odd index at least $37$ for the far term. The far index is allowed to be smaller than the close index.

</details>

<details>
<summary>Worked solution</summary>

The existential claim that one late term is close is weaker than the universal claim that every term in a tail is close.

1. A term is close exactly when its index is even, because its error is $0$. A term is far exactly when its index is odd, because its error is $1\geq 1/4$. Both chosen indices must also be at least $37$.
2. Every pair whose near\_index is even and at least $37$ and whose far\_index is odd and at least $37$ satisfies the requested numerical conditions. For example $(38,37), (100,37)$, and $(100,101)$ work. The fields are independent: requiring one to precede the other would add a condition absent from the question.
3. The close term alone cannot justify a universal claim about all $n\geq 37$. The far term is a counterexample to that claim. Thus the submitted pair refutes the proposed $N=37$ tail, not by itself a statement about every possible tail.
4. For the optional generalization, let N be any positive integer. Choose a close index $2N$ and a far index $2N+1$. Both are at least N, with errors $0$ and $1$ respectively. This argument proves arbitrarily late close terms and arbitrarily late far terms about $0$.
5. The quantified far-term construction at the fixed $\varepsilon =1/4$ rules out convergence to $0$. The numerical checker does not assess this general proof, nor infer it solely from a pair submitted at $N=37$.

</details>
