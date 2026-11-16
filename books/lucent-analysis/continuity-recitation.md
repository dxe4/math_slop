# Recitation C. Continuity: choose the right scale

**Role:** guided recitation after [function limits and inverses](limits-continuity.md) and [uniform continuity](uniform-continuity.md). Bring a first attempt to each decision, then compare it with the argument. This meeting prepares the independent continuity set.

## 1. Which tolerance belongs to which input?

For \(f(x)=x^2\), an estimate at a fixed \(a\) begins
\[
|x^2-a^2|=|x-a|\,|x+a|\leq |x-a|(|x-a|+2|a|).
\]
With \(|x-a|<1\), the factor is at most \(1+2|a|\). We may choose \(\delta_a=\min(1,\varepsilon/(1+2|a|))\). That proves continuity at *each* \(a\in\mathbb R\). The symbol \(a\) remains in the choice; this is not a uniform modulus on the whole line.

**Decision A.** On \([-M,M]\) with \(M>0\), the different estimate \(|x^2-y^2|\leq2M|x-y|\) works for all pairs. Pick a common \(\delta=\varepsilon/(2M)\). Explain why the argument becomes useless as \(M\) grows without bound. The pair \(n,n+1/n\) proves the global failure.

```notebook
fn gap(x)=(x+1/x)^2-x^2;
table gap from 1 to 20 count 20;
```

The finite table should suggest a persistent output gap. Prove the exact identity \(gap(n)=2+1/n^2\). A table cannot establish a claim for arbitrarily large \(n\), and the paired-sequence proof does.

## 2. Which hypothesis belongs to which theorem?

Four target claims look similar but need different reasons.

- *There is a root:* use IVT only after exhibiting continuity on the entire closed interval and a target between endpoint values.
- *There is exactly one root:* add injectivity or strict monotonicity; IVT alone gives no uniqueness.
- *There is a maximum:* use EVT on a compact domain. Bounded input alone is insufficient.
- *An inverse is continuous:* first establish that the function is injective and specify its range. For a continuous strictly monotone map on a compact interval, the inverse proof uses subsequences and continuity.

Work with \(p(x)=x^3+x-1\) on \([0,1]\). Its endpoint signs and continuity yield a root. For \(v>u\),
\[
p(v)-p(u)=(v-u)(v^2+uv+u^2+1)>0,
\]
so it has only one. The factor in parentheses is positive even if \(u,v\) are negative, because \(u^2+uv+v^2=(u+v/2)^2+3v^2/4\geq0\). This explains the *global* uniqueness, rather than relying on the appearance of a graph.

**Decision B.** Could a continuous function on \((0,1)\) have a finite supremum it never reaches? Yes: \(f(x)=x\). Could it be unbounded? Yes: \(f(x)=1/x\). Both are compatible with continuity because the domain omits its endpoints. Say which part of the EVT proof fails in each case.

## 3. A proposed extension proof

A student writes: “If \(f\) is continuous on \((0,1)\), then for every sequence \(x_n\to0\) the sequence \(f(x_n)\) converges. Define \(f(0)\) to be that limit.”

First stop: ordinary continuity concerns points *in* \((0,1)\). It does not control a sequence leaving the domain. The function \(\sin(1/x)\) supplies sequences approaching zero with outputs \(1\) and \(-1\). No single value can repair it.

A valid route assumes **uniform** continuity. Every \(x_n\to0\) is Cauchy, hence \(f(x_n)\) is Cauchy and converges in \(\mathbb R\). But this alone is not enough to define \(f(0)\): two different input sequences might appear to give two limits. Interleave \(x_1,y_1,x_2,y_2,\ldots\). The interleaved sequence tends to zero, so its image is Cauchy and has one limit. Both output subsequences share that limit. After defining the endpoint value, use the same uniform modulus, with an interior point near the endpoint, to prove continuity there. Repeat at \(1\).

```exercise
{"id":"analysis-recitation-extension-choice","type":"choice","prompt":"A proof constructs F(z)=lim f(xₙ) for xₙ in D approaching z. What must be checked before F is a well-defined function?","options":[{"label":"That every possible approximating sequence gives the same limit.","correct":true,"feedback":"Yes. Use the paired-sequence criterion or interleave two approximating sequences."},{"label":"Only that one chosen approximating sequence has a limit.","correct":false,"feedback":"A different sequence may appear to assign a different value at z."},{"label":"That F is differentiable at z.","correct":false,"feedback":"Differentiability is much stronger than the extension theorem requires."}],"hints":["A function must assign one value to each input."]}
```

## Recitation finish

Without seeing the chapter title, decide how you would approach each new claim: a function on a bounded open interval has a maximum; a strictly increasing continuous function has a continuous inverse; two nearby inputs have outputs far apart; values on a dense set determine a continuous extension. Write the theorem and the hypothesis check for each. Revisit these decisions after the problem set, because recognizing a theorem from an unfamiliar formulation is part of the course.
