# Binary words no adjacency eight

*Medium · [Original Putnam-style training](index.md)*

How many binary strings of length $8$ contain no adjacent $1$ symbols?

```answer
{"answer":{"kind":"integer","expected":"55","checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Let $a_n$ count valid strings of length $n$ and split by the first symbol.

</details>

<details>
<summary>Hint 2</summary>

The two cases reduce to lengths $n-1$ and $n-2$.

</details>

<details>
<summary>Worked solution</summary>

Therefore $a_8=55$.

1. A valid string begins with $0$ followed by a valid length-$n-1$ string, or with $10$ followed by a valid length-$n-2$ string. Thus $a_n=a_{n-1}+a_{n-2}$.
2. The initial values are $a_0=1$ and $a_1=2$. The sequence through length eight is $1,2,3,5,8,13,21,34,55$.
3. Therefore $a_8=55$.

</details>
