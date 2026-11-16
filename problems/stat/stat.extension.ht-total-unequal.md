# Ht total unequal

*Easy · [Statistics and probability](index.md)*

Two population units have independent inclusion indicators with probabilities $\pi_1=1/2$ and $\pi_2=1/4$. Both units are selected and their observed values are $y_1=3$, $y_2=2$. What is the Horvitz–Thompson estimate $\sum_{i\ \mathrm{selected}}y_i/\pi_i$ of the total?

```answer
{"answer":{"kind":"integer","expected":"14","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Give each observed value its own inverse-inclusion weight.

</details>

<details>
<summary>Hint 2</summary>

Sum the two weighted contributions rather than dividing the unweighted total by a common probability.

</details>

<details>
<summary>Worked solution</summary>

Unequal inclusion chances require unequal weights.

1. The first contribution is $3/(1/2)=6$.
2. The second contribution is $2/(1/4)=8$.
3. The estimated total is $6+8=14$. Design unbiasedness is an average over possible samples; it does not require this realized estimate to equal the actual total $3+2$.

</details>
