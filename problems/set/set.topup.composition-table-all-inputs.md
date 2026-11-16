# Compose compatible maps in the supplied order

*Medium · [Set theory](index.md)*

Let $f:\{1,2,3\}\to\{a,b,c\}$ have values f(1)=b,f(2)=c,f(3)=a. Let g(a)=1,g(b)=0,g(c)=1. Enter ((g composed with f)(1),(g composed with f)(2),(g composed with f)(3)).

```answer
{"answer":{"kind":"vector","expected":["0","1","1"],"checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted mapping proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Apply f before g at each input.

</details>

<details>
<summary>Hint 2</summary>

Keep the original input order even when outputs repeat.

</details>

<details>
<summary>Worked solution</summary>

The first map supplies values in the second map domain.

1. At input one the intermediate value is b, giving g(b)=0.
2. At input two it is c, giving g(c)=1. At input three it is a, giving g(a)=1.
3. The ordered output vector is $(0,1,1)$.

</details>
