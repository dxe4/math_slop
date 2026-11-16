# Prove a punctured limit while retaining a discontinuous point value

*Hard · [Real analysis](index.md)*

Define $f(x)=(x^2-4)/(x-2)$ for x!=2 and f(2)=100. Prove lim as x tends to 2 of f(x) is 4 directly, and explain why f is not continuous at 2.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Cancel only on the punctured domain where x differs from two.

</details>

<details>
<summary>Hint 2</summary>

The limit definition does not inspect the value at the central point.

</details>

<details>
<summary>Model proof</summary>

A removable limit and a chosen point value are separate facts.

1. For x!=2, factorization gives f(x)=x+2, so \|f(x)-4\|=\|x-2\|.
2. For any epsilon&gt;0 choose delta=epsilon; the required strict punctured estimate follows immediately.
3. The limit is four but f(2)=100, so the equality required for continuity fails. The cancellation did not redefine the central value.

**Self-assessment rubric**

- Factor only where the denominator is nonzero.
- Give an explicit valid radius for every tolerance.
- Keep the original central value and explain the continuity failure.

</details>
