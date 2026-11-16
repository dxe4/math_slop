var e=`---
parent_id: book-functions-equations-proof
chapter_id: scaling-laws-and-regularity
title: "Scaling laws, signs and a dense-domain boundary"
level: undergraduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Scaling laws, signs and a dense-domain boundary {#section-1-scaling-laws-signs-and-a-dense-domain-boundary}

This is an advanced and specialist gateway investigation at the meeting of algebra, analysis and modelling. It supplies one complete sequence of original, changed and return work, with public hints, proofs, models and repair criteria. It does not supply a whole specialist functional-equations programme. Allow about four hours.

The stable task IDs **AF-SCALE-1**, **AF-SCALE-2** and **AF-SCALE-R** distinguish three scopes. Comparing your work with these public keys is self-study, not checked Practice, proof certification or evidence of independent assessment.

<a id="section-5-a-scaling-claim-before-fitting"></a>
## A scaling claim before fitting {#section-7-a-scaling-claim-before-fitting}

Let $x>0$ be a dimensionless input scale ratio and let $T(x)>0$ be an output ratio. A proposed composition law is

$$
T(xy)=T(x)T(y)\\qquad\\text{for every }x,y>0.
$$

For example, applying scale changes $x$ and then $y$ has the same response as applying their product. This is a universal modelling assumption. A few numerical agreements may be consistent with it; they cannot establish it for every pair of positive real inputs.

We will prove what this law forces when $T$ is continuous at the single input $1$, identify a parameter under those hypotheses, and distinguish that deduction from fitting a few records. We then change the domain to include negative inputs, audit the missing point zero, and construct a discontinuous multiplicative map on a proper dense subfield. The signed task is an algebraic change of problem, not a claim that a physical scale ratio can be negative.

<a id="section-17-preparation-and-repair"></a>
## Preparation and repair {#section-19-preparation-and-repair}

Bring the following specific preparation, rather than the whole advanced book sequence.

Throughout this chapter, $\\log=\\ln$ is the natural logarithm, inverse to $\\exp$.

- From [Exponential and logarithmic functions](#/item/book-functions-equations-proof?chapter=exponential-and-logarithmic-functions), use the real exponential and logarithm, their continuity, their inverse identities and their algebraic laws on positive inputs. We import these real-function facts; this investigation does not construct the real exponential from completeness.
- In the [book overview](#/item/book-functions-equations-proof), read §9, especially “Cauchy’s additive equation with regularity”. Its complete proof derives rational values and then uses rational density and continuity at zero. We will reuse that argument after changing coordinates.
- For repairs, use “6. Rational numbers are dense” in [Ordered fields and the architecture of the real numbers](#/item/book-proof-safe-real-analysis?chapter=ordered-fields-and-number-systems), and §§1–2, 4–5 of [Continuity, uniform control, and extension](#/item/book-proof-safe-real-analysis?chapter=continuity-and-uniform-continuity) for continuity at a point, its sequential criterion, composition and relative domains.
- Use rational arithmetic and the irrationality of $\\sqrt2$. The small quadratic-field calculation needed for the return task is proved below. [Field extensions and minimal polynomials](#/item/book-algebra-patterns-structure?chapter=field-extensions-minimal-polynomials), §§1 and 6, and “2. First examples” in [Galois groups and the subgroup–subfield correspondence](#/item/book-algebra-patterns-structure?chapter=galois-groups-correspondence) offer further context; general Galois theory is not required.

The existing [regularity project](#/item/book-functions-equations-proof?chapter=project-prove-a-new-result) proves an exponential law on additive inputs by propagating differentiability and solving an ODE. Here continuity at one scale is enough after a logarithmic change of variables. No derivative or ODE theorem is needed.

**Preparation check.** State why $\\log T(e^u)$ is defined for every real $u$; explain why $e^{u+v}=e^ue^v$; and say what extra condition lets equality on rational inputs extend to real inputs.

**Repair key.** The exponential is positive and the codomain of $T$ is positive, so the logarithm is defined. The second identity is the real-exponential addition law. To pass from dense rational inputs to all real inputs one needs the appropriate continuity or another proved regularity argument; density by itself is insufficient.

<a id="section-34-af-scale-1-positive-scaling-and-finite-evidence"></a>
## AF-SCALE-1 — Positive scaling and finite evidence {#section-36-af-scale-1-positive-scaling-and-finite-evidence}

Suppose $T:(0,\\infty)\\to(0,\\infty)$ obeys the composition law for all positive inputs and is continuous at $1$.

1. Prove that there is a real $a$ such that $T(x)=x^a$ for every $x>0$. Prove the converse as well.
2. Under these hypotheses, an exact calibration gives $T(2)=4$. Identify $a$ and predict $T(3)$ and $T(1/2)$.
3. A second analyst has only the three exact records $1\\mapsto1$, $2\\mapsto4$, $3\\mapsto9$. Explain why these records alone do not establish the composition law. For a nonzero real $c$, investigate
   $$
   S(x)=x^2\\exp\\!\\bigl(c\\log x(\\log x-\\log2)(\\log x-\\log3)\\bigr).
   $$
   Check all three records and test multiplicativity at the pair $(2,3)$.

Write the theorem, proof, predictions and evidence boundary before reading the key.

<a id="section-48-hints"></a>
### Hints {#section-50-hints}

First find $T(1)$. Replace a positive input by $e^u$ and turn products of output values into sums with a logarithm. Track exactly where continuity at $1$ becomes continuity at $0$.

For the finite-record audit, the perturbation exponent has three prescribed zeros. At $x=6$, use $\\log6=\\log2+\\log3$.

<a id="section-54-a-power-law-from-continuity-at-one-scale"></a>
## A power law from continuity at one scale {#section-56-a-power-law-from-continuity-at-one-scale}

Since $T(1)=T(1)^2$ and $T(1)>0$, we have $T(1)=1$. Define

$$
H:\\mathbb R\\to\\mathbb R,\\qquad H(u)=\\log T(e^u).
$$

This is defined on all of $\\mathbb R$. For every real $u,v$,

$$
H(u+v)=\\log T(e^ue^v)
=\\log\\bigl(T(e^u)T(e^v)\\bigr)=H(u)+H(v).
$$

As $u\\to0$, continuity of the exponential gives $e^u\\to1$, continuity of $T$ at $1$ gives $T(e^u)\\to1$, and continuity of the logarithm at $1$ gives $H(u)\\to0=H(0)$. Thus $H$ is continuous at zero.

Apply the additive Cauchy argument already proved in the overview. Writing $a=H(1)$, its integer and rational steps give $H(q)=aq$ for rational $q$. To expose the density step in this application, fix $u\\in\\mathbb R$ and choose rationals $q_j\\to u$. Then

$$
H(u)-aq_j=H(u-q_j)\\longrightarrow0.
$$

The right side tends to zero by continuity at zero, while $aq_j\\to au$. Hence $H(u)=au$. Substituting $u=\\log x$ gives

$$
T(x)=\\exp(a\\log x)=x^a\\qquad(x>0).
$$

Conversely, for every real $a$, this formula has positive outputs, is continuous at $1$, and satisfies $(xy)^a=x^ay^a$ for positive $x,y$. This proves the classification in both directions.

Under the law and continuity assumptions, $2^a=4$, so $a=\\log4/\\log2=2$. Therefore $T(3)=9$ and $T(1/2)=1/4$. The calibration identifies a parameter inside a proved family; it does not prove that an unknown response belongs to that family.

<a id="section-87-why-finite-calibration-does-not-prove-the-law"></a>
## Why finite calibration does not prove the law {#section-89-why-finite-calibration-does-not-prove-the-law}

For every real $c$, the displayed $S$ is positive and continuous on $(0,\\infty)$. At $x=1,2,3$, one factor in the perturbation exponent is zero, so $S(1)=1$, $S(2)=4$ and $S(3)=9$.

Write $b=\\log2$ and $d=\\log3$. Both are positive. At $x=6$,

$$
\\log6(\\log6-\\log2)(\\log6-\\log3)
=(b+d)db=bd(b+d).
$$

Consequently

$$
S(6)=36\\exp\\!\\bigl(c\\log2\\log3\\log6\\bigr),
\\qquad S(2)S(3)=36.
$$

For $c\\ne0$, the exponent is nonzero, so these values differ. Thus a positive continuous function can agree with all three records and fail the composition law. This example removes the universal law, not continuity.

The classification proof uses regularity. We do not construct an unregularized solution on all positive reals here. The later return task deliberately changes the domain to make a different failure boundary explicit without invoking a basis of $\\mathbb R$ over $\\mathbb Q$.

<a id="section-109-af-scale-2-signed-inputs-and-the-point-zero"></a>
## AF-SCALE-2 — Signed inputs and the point zero {#section-111-af-scale-2-signed-inputs-and-the-point-zero}

Now let $\\mathbb R^*=\\mathbb R\\setminus\\{0\\}$. Suppose $T:\\mathbb R^*\\to\\mathbb R^*$ is continuous at $1$ and satisfies

$$
T(xy)=T(x)T(y)\\qquad(x,y\\in\\mathbb R^*).
$$

Classify every such map, prove the converse, and identify the map selected by the exact calibration $T(-2)=-8$. Predict $T(4)$ and $T(-1/2)$.

Then change the codomain explicitly to $\\mathbb R$ and consider extensions $\\widetilde T:\\mathbb R\\to\\mathbb R$ that retain the old nonzero-input values and satisfy the same multiplicative law for all real inputs. Find every permitted value of $\\widetilde T(0)$, first algebraically and then under continuity at zero. Treat all real exponents and both sign branches, including exponent zero. Distinguish “extend the domain to include zero” from the particular assignment $\\widetilde T(0)=0$.

<a id="section-121-hints"></a>
### Hints {#section-123-hints}

For positive $x$, write $x=(\\sqrt x)^2$. What does the nonzero codomain imply? Next evaluate $T((-1)^2)$ and factor a negative input as $(-1)|x|$.

If $z=\\widetilde T(0)$, use both $z=z^2$ and $z=zT(x)$. For continuity, compare limits from the positive and negative sides.

<a id="section-127-complete-signed-classification-and-extension-key"></a>
## Complete signed classification and extension key {#section-129-complete-signed-classification-and-extension-key}

As before, $T(1)=1$. If $x>0$, then $T(x)=T(\\sqrt x)^2>0$, because $T(\\sqrt x)\\ne0$. The positive restriction therefore satisfies the preceding theorem. There is a real $a$ such that $T(x)=x^a$ for $x>0$.

Let $\\varepsilon=T(-1)$. Since $\\varepsilon^2=T(1)=1$, we have $\\varepsilon\\in\\{1,-1\\}$. For $x<0$,

$$
T(x)=T(-1)T(|x|)=\\varepsilon|x|^a.
$$

Thus every solution has the form

$$
T_{a,\\varepsilon}(x)=
\\begin{cases}
|x|^a,&x>0,\\\\
\\varepsilon|x|^a,&x<0.
\\end{cases}
$$

Conversely, each displayed map is multiplicative: positive magnitudes multiply, and two negative inputs contribute $\\varepsilon^2=1$. It is continuous on each component of $\\mathbb R^*$, in particular at $1$. This verifies every claimed solution. No zero-valued branch is allowed by the original codomain $\\mathbb R^*$.

The negative value $T(-2)=-8$ forces $\\varepsilon=-1$ and $2^a=8$, hence $a=3$. The resulting map is $T(x)=x^3$ on $\\mathbb R^*$. Its predictions are $T(4)=64$ and $T(-1/2)=-1/8$.

For the general extension, $z=z^2$ forces $z=0$ or $z=1$. The choice $z=0$ always preserves multiplicativity. The choice $z=1$ additionally forces $T(x)=1$ for every nonzero $x$, by $z=zT(x)$; this is exactly the branch $a=0,\\varepsilon=1$. It also suffices, giving the constant-one map on all of $\\mathbb R$.

Continuity at zero imposes further conditions:

| Nonzero-input branch | Two-sided behavior as $x\\to0$ | Continuous multiplicative extension |
| --- | --- | --- |
| $a>0$, either $\\varepsilon$ | $T(x)\\to0$ | Unique value $\\widetilde T(0)=0$ |
| $a=0,\\ \\varepsilon=1$ | $T(x)=1$ | Unique value $\\widetilde T(0)=1$ |
| $a=0,\\ \\varepsilon=-1$ | Right limit $1$, left limit $-1$ | None |
| $a<0$, either $\\varepsilon$ | $\\lvert T(x)\\rvert\\to\\infty$ | No finite real value works |

In particular, the literal zero-value extension is continuous at zero exactly when $a>0$. An extension taking its zero-input value to $1$ is a different possibility, restricted to the constant-one branch. If the codomain had remained $\\mathbb R^*$, the value $0$ would be forbidden and only that constant-one extension would remain possible.

For the calibrated cubic branch, the unique continuous extension is $\\widetilde T(0)=0$, giving $x^3$ on all real inputs.

<a id="section-166-af-scale-r-a-dense-domain-return"></a>
## AF-SCALE-R — A dense-domain return {#section-168-af-scale-r-a-dense-domain-return}

For later return work, change the domain again. Let

$$
K=\\mathbb Q(\\sqrt2)=\\{a+b\\sqrt2:a,b\\in\\mathbb Q\\},
\\qquad K_+=K\\cap(0,\\infty).
$$

Define $\\sigma:K\\to K$ by $\\sigma(a+b\\sqrt2)=a-b\\sqrt2$, and set

$$
F:K_+\\to(0,\\infty),\\qquad F(x)=|\\sigma(x)|.
$$

1. Prove that the representation is unique, that $K$ is a field, and that $\\sigma$ is a multiplicative involution. Explain why $\\sigma$ itself need not map $K_+$ into $K_+$.
2. Prove that $F$ is well-defined, positive and multiplicative, and agrees with $x\\mapsto x$ on every positive rational input. Show nevertheless that it is not $x^a$ on $K_+$ for any real $a$.
3. For $n\\ge1$, set $x_n=1+(\\sqrt2-1)^{2n}$. Prove $x_n\\in K_+$, $x_n\\to1$, and $F(x_n)\\to+\\infty$. Give the first three exact input/output pairs.
4. Explain why $K_+$ is countable and dense in $(0,\\infty)$ but is not the whole positive real domain. Decide whether a continuous multiplicative map on all positive reals can agree with $F$ on $K_+$.
5. State exactly what this construction establishes and what it does not establish about dropping regularity in the all-real theorem.

<a id="section-187-hints"></a>
### Hints {#section-189-hints}

Represent $a+b\\sqrt2$ by its rational pair $(a,b)$. Multiplication is $(a,b)(c,d)=(ac+2bd,ad+bc)$; conjugation changes the sign of the second coordinate.

For the sequence, conjugation sends $\\sqrt2-1$ to $-(\\sqrt2+1)$. The even exponent matters. To disprove continuity at one point, a single domain sequence whose images have the wrong behavior is sufficient.

<a id="section-193-a-constructive-key-on-a-proper-dense-domain"></a>
## A constructive key on a proper dense domain {#section-195-a-constructive-key-on-a-proper-dense-domain}

Uniqueness of the representation follows from irrationality of $\\sqrt2$: if two representations differ, a nonzero rational coefficient of $\\sqrt2$ would make $\\sqrt2$ rational. Addition and multiplication stay in $K$. For nonzero $a+b\\sqrt2$, its norm $N=a^2-2b^2$ is nonzero: otherwise either both coefficients vanish or $\\sqrt2$ is rational. Hence

$$
(a+b\\sqrt2)^{-1}=\\frac aN-\\frac bN\\sqrt2.
$$

These facts prove that $K$ is a field. The pair multiplication formula shows directly that $\\sigma(xy)=\\sigma(x)\\sigma(y)$; also $\\sigma(\\sigma(x))=x$. Thus nonzero $x$ has nonzero conjugate. But $\\sigma(1+\\sqrt2)=1-\\sqrt2<0$, so $\\sigma$ is not a map from $K_+$ to itself.

The absolute value makes $F(x)>0$ for $x\\in K_+$. Since products of positive inputs remain positive,

$$
F(xy)=|\\sigma(x)\\sigma(y)|=F(x)F(y).
$$

For rational $r>0$, $\\sigma(r)=r$, so $F(r)=r$. If $F(x)=x^a$ on $K_+$, the value $F(2)=2$ forces $a=1$. Yet

$$
F(1+\\sqrt2)=|1-\\sqrt2|=\\sqrt2-1\\ne1+\\sqrt2.
$$

This rules out every power-law exponent on this domain.

Now $0<\\sqrt2-1<1$, so $x_n>1$ and $x_n\\to1$. Applying conjugation and using the even power gives

$$
F(x_n)=\\left|1+(-\\sqrt2-1)^{2n}\\right|
=1+(\\sqrt2+1)^{2n}\\longrightarrow+\\infty.
$$

The input sequence belongs to $K_+$ for every $n$. Since $F(1)=1$, the sequential criterion proves discontinuity at $1$. The first three pairs are

| $n$ | $x_n$ | $F(x_n)$ |
| --- | --- | --- |
| $1$ | $4-2\\sqrt2$ | $4+2\\sqrt2$ |
| $2$ | $18-12\\sqrt2$ | $18+12\\sqrt2$ |
| $3$ | $100-70\\sqrt2$ | $100+70\\sqrt2$ |

These finite rows illustrate the algebraic identity. They do not replace its proof or the geometric-limit argument for every $n$.

The map $\\mathbb Q^2\\to K$, $(a,b)\\mapsto a+b\\sqrt2$, shows that $K$ is countable. Since $\\mathbb Q_+\\subset K_+$ and positive rationals are dense, $K_+$ is dense in $(0,\\infty)$. The positive real numbers are uncountable, as follows from the Cantor argument in [Advanced proof techniques and synthesis](#/item/book-functions-equations-proof?chapter=chapter-14). Thus $K_+$ is a proper subset of $(0,\\infty)$. Density does not make the domains equal.

If a continuous map on all positive reals agreed with $F$, its values on $x_n\\to1$ would have to tend to its value $F(1)=1$, contradicting the displayed divergence. In particular, no continuous multiplicative extension can agree with $F$.

There is an instructive repair on the existing domain too. If this multiplicative $F$ were continuous at $1$, choose positive rationals $r_j\\to x\\in K_+$. Then $r_j/x\\to1$ inside $K_+$ and

$$
r_j=F(r_j)=F(x)F(r_j/x)\\longrightarrow F(x),
$$

so $F(x)=x$. Our explicit value at $1+\\sqrt2$ contradicts that conclusion. Agreement on dense inputs becomes decisive only with the relevant regularity.

This is a constructive discontinuous multiplicative function on the countable dense domain $K_+$. It is not a function on all positive reals, and changing the domain means it is not an all-real counterexample obtained merely by deleting continuity from the first theorem. No extension to an unregularized all-real function, no basis of $\\mathbb R$ over $\\mathbb Q$, and no choice-based construction is asserted here.

<a id="section-248-self-review-and-next-questions"></a>
## Self-review and next questions {#section-250-self-review-and-next-questions}

Use this public rubric on each distinct task. Keep the theorem and its hypotheses beside the model record; a numerical fit alone cannot supply them.

| Evidence in your work | Focused repair |
| --- | --- |
| Every domain, codomain and universal input quantifier is stated | Write the types before taking a logarithm, a square root or an absolute value |
| The logarithmic transform is additive on all real inputs and continuous at zero | Track exponential, $T$ and logarithm continuity separately |
| Rational identities are upgraded by an explicit limit step | Reconstruct the overview's Cauchy argument; density alone is not a continuity theorem |
| Both directions of each classification are checked | Substitute the proposed family into the original law, including two negative inputs |
| Calibration is distinguished from the universal law | Recompute $S(6)$ and compare it with $S(2)S(3)$ |
| Both sign branches and every exponent-zero/zero-input case appear | Derive $z=z^2=zT(x)$ before inspecting one-sided limits |
| The conjugation map is $K\\to K$, while $F$ has positive outputs | Test $\\sigma(1+\\sqrt2)$ before claiming that conjugation preserves positivity |
| The discontinuity proof uses an actual domain sequence | Prove the geometric limits; do not substitute a finite table for them |
| The dense domain is correctly described as proper and countable | Separate density from cardinality and say which all-real claims remain unproved |

A suitable next question is whether a different explicitly stated regularity hypothesis can replace continuity, or how a multivariable scale law changes the parameter family. Those are further investigations: they need their own hypotheses, proofs and feedback, and are not supplied by this chapter.
`;export{e as default};