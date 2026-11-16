# Preserve continuity under a uniform limit

*Medium · [Real analysis](index.md)*

Every $f_n:D\to\mathbb R$ is continuous on the same fixed domain $D\subseteq\mathbb R$, and $f_n\to f$ uniformly on $D$. Among the standard properties continuous, bounded, uniformly\_continuous, enter every property that is guaranteed for $f$ on $D$ without additional hypotheses.

```answer
{"answer":{"kind":"set","expected":"{continuous}","checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Use a uniform error bound and the continuity of one selected approximating function near a fixed point.

</details>

<details>
<summary>Hint 2</summary>

For properties that are not forced, try constant-in-index sequences of continuous functions on the whole real line.

</details>

<details>
<summary>Worked solution</summary>

Uniform approximation transfers local continuity without imposing global boundedness or uniform continuity on an arbitrary domain.

1. Fix $a\in D$ and $\varepsilon>0$. Choose $N$ so that $|f_N-f|<\varepsilon/3$ everywhere on $D$. Continuity of $f_N$ at $a$ supplies a relative neighbourhood where $|f_N(x)-f_N(a)|<\varepsilon/3$.
2. The triangle inequality then gives $|f(x)-f(a)|<\varepsilon$, proving continuity on $D$. Compactness is not needed.
3. The constant sequence $f_n(x)=x$ on $\mathbb R$ has an unbounded uniform limit. The constant sequence $f_n(x)=x^2$ on $\mathbb R$ has a limit that is not uniformly continuous: inputs $n,n+1/n$ approach each other while their output difference is at least $2$. Thus only continuous is guaranteed.

</details>
