# Recognize a density construction

*Medium · [Real analysis](index.md)*

Let $a<b$ be real. Choose a positive integer n with $n(b-a)>1$, and set $k=floor(na)+1$. Which conclusion follows? Select the mathematically correct statement from the four alternatives.

**Options**

1. $k/n\leq a$ because the floor is never above its input.
2. $k/n$ may exceed b even though $n(b-a)>1$.
3. $a<k/n<b$.
4. $k/n=a$.

```answer
{"answer":{"kind":"multiple_choice","expected":"a_k_n_b","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["k_na_because_the","k_n_may_exceed","a_k_n_b","k_n_a"]}
```

<details>
<summary>Hint 1</summary>

Use $floor(na)\leq na<floor(na)+1$.

</details>

<details>
<summary>Hint 2</summary>

Also $k\leq na+1$, while $na+1<nb$ follows from the denominator condition.

</details>

<details>
<summary>Worked solution</summary>

The extra numerator step makes the left inequality strict; the fine grid leaves room before the right endpoint.

1. The floor inequality gives $na<k\leq na+1$.
2. The choice $n(b-a)>1$ implies $na+1<nb$. Hence $na<k<nb$.
3. Divide by $n>0$ to obtain $a<k/n<b$.

</details>
