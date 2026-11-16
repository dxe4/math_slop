# Negate a punctured-domain limit claim

*Medium · [Real analysis](index.md)*

Let a be an accumulation point of $D\subseteq R$ and f:D→R. Which statement is the negation of lim as x→a within D of $f(x)=L$? Select the mathematically correct statement from the four alternatives.

**Options**

1. For every $\varepsilon >0$ there is $\delta >0$ such that every $x\in D$ with $0<|x-a|<\delta$ has \|$f(x)-L$\|≥ε.
2. There exist $\varepsilon >0$ and $\delta >0$ such that every $x\in D$ with $0<|x-a|<\delta$ has \|$f(x)-L$\|≥ε.
3. There exists $\varepsilon >0$ such that every $\delta >0$ admits $x\in D$ with $0<|x-a|<\delta$ and \|$f(x)-L$\|≥ε.
4. For every $\varepsilon >0$ and every $\delta >0$ there exists $x\in D$ with $0<|x-a|<\delta$ and \|$f(x)-L$\|≥ε.

```answer
{"answer":{"kind":"multiple_choice","expected":"there_exists_0_such","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["for_every_0_there","there_exist_0_and","there_exists_0_such","for_every_0_and"]}
```

<details>
<summary>Hint 1</summary>

Negate the outer universal tolerance quantifier first.

</details>

<details>
<summary>Hint 2</summary>

Failure means every attempted neighborhood contains a counterexample, possibly a different point.

</details>

<details>
<summary>Worked solution</summary>

A failed local limit has one tolerance violated in every sufficiently small proposed neighborhood.

1. The limit requires $\forall\varepsilon>0\;\exists\delta>0\;\forall x\in D$ satisfying $0<|x-a|<\delta$, the estimate $|f(x)-L|<\varepsilon$.
2. Negation gives one $\varepsilon>0$ such that every $\delta>0$ admits an $x\in D$ with $0<|x-a|<\delta$ and $|f(x)-L|\geq\varepsilon$.
3. Thus every proposed punctured neighbourhood contains a bad input at one fixed output tolerance; an entire bad neighbourhood is not required.

</details>
