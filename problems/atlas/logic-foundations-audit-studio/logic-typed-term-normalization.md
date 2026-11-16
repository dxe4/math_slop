# Type and normalize a proof term

*Difficulty 3 of 5 · [Logic and foundations audit studio](index.md) · exercise 8 of 11*

In simply typed lambda calculus, assume $g:A\to B$ and $a:A$. Type the term $(\lambda f:A\to B.\,\lambda x:A.\,f\,x)\,g\,a$ and beta-reduce it to normal form. State the corresponding implication reasoning and one reason this example does not establish an unrestricted slogan that every informal proof is a program.

<details>
<summary>Hint 1</summary>

Apply the outer abstraction to g first

</details>

<details>
<summary>Hint 2</summary>

Then apply the resulting function to a

</details>

<details>
<summary>Hint 3</summary>

Name the particular typed calculus and logic in the scope claim

</details>

<details>
<summary>Worked solution</summary>

The abstraction $\lambda f:A\to B.\,\lambda x:A.\,f\,x$ has type $(A\to B)\to A\to B$. Applying it to $g$ yields $\lambda x:A.\,g\,x$, of type $A\to B$. Applying that to $a$ yields $g\,a:B$. The beta reductions are $(\lambda f.\lambda x.f\,x)\,g\,a\to(\lambda x.g\,x)\,a\to g\,a$. Under the intuitionistic propositional Curry–Howard reading, a term of $A\to B$ transforms evidence of $A$ into evidence of $B$, and application is implication elimination. The correspondence is between specified logics and typed calculi; it does not automatically give executable content to every informal, classical, set-theoretic, or axiomatic proof.

**Answer.** The term has type $B$ and normalizes in two beta steps to $g\,a$; it represents two typed applications within a specified Curry–Howard correspondence.

</details>

*Tags: typed lambda calculus, normalization, Curry-Howard*
