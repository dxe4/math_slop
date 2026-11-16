# Collect every input that reaches a target output

*Easy · [Set theory](index.md)*

Let f:$\{0,1,2,3\}\to \{2,4,6\}$ have $f(0)=4, f(1)=2, f(2)=4, f(3)=6$. Give $f^{-1}$($\{4\}$) as a set of inputs. This notation asks for a preimage and does not assume an inverse function.

```answer
{"answer":{"kind":"finite_integer_set","expected":[0,2],"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Check each domain input and retain it if its output belongs to $\{4\}$.

</details>

<details>
<summary>Hint 2</summary>

Both inputs producing $4$ must be included.

</details>

<details>
<summary>Worked solution</summary>

Preimages collect inputs and are available for every function.

1. The inputs $0$ and $2$ map to $4$.
2. The other inputs do not, so $f^{-1}$($\{4\}$)=$\{0,2\}$. This function is not injective, but its preimage is still defined.

</details>
