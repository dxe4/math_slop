
# Homotopy Type Theory

Homotopy type theory (HoTT) combines intensional type theory with ideas from homotopy theory. It supports foundations in which types may carry higher path structure rather than being restricted to sets. This chapter introduces the univalence axiom, higher inductive types, and the connection between type theory and homotopy theory.

## Types as spaces

In HoTT, types are interpreted as spaces and terms as points. The identity type $\text{Id}_A(a, b)$ (or $a =_A b$) represents the space of paths from $a$ to $b$ in $A$.

**Definition 15.1 (path).** A *path* $p: a =_A b$ is an element of the identity type. Paths can be composed, inverted, and whiskered, satisfying the groupoid laws up to higher paths.

**Definition 15.2 (homotopy).** For functions $f, g: A \to B$, a *homotopy* $H: f \sim g$ is a function $H: \prod_{x:A} (f(x) =_B g(x))$ assigning to each $x$ a path from $f(x)$ to $g(x)$.

## The univalence axiom

**Definition 15.3 (equivalence).** Write $\operatorname{isEquiv}(f)$ when every homotopy fiber $\sum_{a:A}(f(a)=b)$ is contractible, and define

$$A\simeq B\;:=\;\sum_{f:A\to B}\operatorname{isEquiv}(f).$$

Having a quasi-inverse $g:B\to A$ with homotopies $fg\sim\mathrm{id}_B$ and $gf\sim\mathrm{id}_A$ characterizes equivalences, but raw quasi-inverse data is generally not itself a proposition. The right side of univalence uses the structured equivalence type $A\simeq B$.

**Definition 15.4 (univalence).** The *univalence axiom* asserts that for types $A, B$:

$$(A =_{\mathcal{U}} B) \simeq (A \simeq B).$$

That is, paths between types in the universe $\mathcal{U}$ correspond to equivalences between types.

**Consequences of univalence.**
- **Function extensionality:** If $f \sim g$, then $f = g$.
- **Propositional extensionality:** Equivalent propositions are equal.
- **Structure identity principle:** For suitably defined univalent notions of structure, an isomorphism of groups, rings, and similar structures induces an identity. This conclusion uses both univalence and the fact that the operations and laws transport along the underlying equivalence.

## Higher inductive types

**Definition 15.5 (higher inductive type).** A *higher inductive type* (HIT) is defined by generators for points and paths. The circle $S^1$ is the HIT with:
- A point $\text{base}: S^1$.
- A path $\text{loop}: \text{base} =_{S^1} \text{base}$.

**Theorem 15.6 (cited).** $\pi_1(S^1) \cong \mathbb{Z}$.

**Proof architecture (encode--decode).** Circle recursion defines a family $\mathrm{code}:S^1\to\mathcal U$ with $\mathrm{code}(\mathrm{base})=\mathbb Z$ and transport along $\mathrm{loop}$ equal to the successor equivalence of $\mathbb Z$. Transporting $0$ along a based path gives

$$\mathrm{encode}:(\mathrm{base}=x)\to\mathrm{code}(x).$$

Conversely, integer powers of $\mathrm{loop}$ define $\mathrm{decode}:\mathbb Z\to(\mathrm{base}=\mathrm{base})$, and circle/path induction proves the two maps inverse. Thus the loop space at the base is equivalent to $\mathbb Z$, yielding $\pi_1(S^1)\cong\mathbb Z$. The universal property alone does not identify the loop space; the encode--decode argument supplies that step.

## Truncation levels

**Definition 15.7 ($n$-type).** A type $A$ is a *$(-2)$-type* (contractible) if there exists $a: A$ such that $\prod_{x:A} (a = x)$. Inductively, $A$ is a *$(n+1)$-type* if for all $x, y: A$, the type $x =_A y$ is an $n$-type.

- $(-1)$-types are *propositions* (at most one element).
- $0$-types are *sets* (identity types are propositions).
- $1$-types are *groupoids*.

**Definition 15.8 (propositional truncation).** The *propositional truncation* $\|A\|_{-1}$ is the HIT with a constructor $|\cdot|: A \to \|A\|_{-1}$ and a path constructor making $\|A\|_{-1}$ a proposition.

## Common errors

**Error: treating HoTT as merely a programming language.** HoTT is also a foundation for mathematics. Univalence does not compute by the ordinary intensional reduction rules, but cubical type theories provide computational interpretations of univalence and related higher constructions. Claims that no computational interpretation is known are therefore obsolete unless restricted to a specified calculus.

**Error: confusing propositional equality with definitional equality.** In HoTT, $a = b$ is a type that may have many elements (paths). Definitional equality is a metatheoretic conversion judgement rather than another internal path type.

**Error: assuming all types are sets.** In HoTT, only $0$-types are sets. Many important types (universes, HITs) have nontrivial higher structure.

## Worked example 1: paths in a contractible type

Suppose $A$ has a centre $c$ and contraction $h:\Pi x:A.(c=x)$. For $x,y:A$, define the proposed centre of their path type to be $h(x)^{-1}\cdot h(y)$. For any $p:x=y$, identity elimination on $p$ gives the naturality equation
$$h(x)\cdot p=h(y).$$
In the reflexive case, the equation is the right-unit law for composition; this supplies the branch required by the eliminator. Compose with $h(x)^{-1}$ and use the associative, inverse and unit path laws from identity elimination. The result identifies $p$ with $h(x)^{-1}\cdot h(y)$. Hence every path equals the proposed centre, proving contractibility of $x=y$.

The proof contains higher equalities between paths. Their existence was justified by elimination and the resulting path algebra, not by assuming all proof terms are automatically equal. Contractibility supplies the extra information needed here. Without it, an arbitrary type can have path spaces with nontrivial structure. The centre and contraction are therefore mathematical hypotheses, not decorative terminology.

## Worked example 2: a universe need not be a set

Let Bool have distinct points false and true. Distinctness can be proved by a type family assigning unit to false and empty type to true: an equality from false to true would transport unit's inhabitant into empty type. The identity map on Bool is an equivalence. Boolean negation is another equivalence because applying it twice returns the input, as checked in the two constructor cases.

The two equivalences differ. An equality between their underlying functions would, by applying those functions at true, give true equal to false, contradicting the preceding no-confusion argument. Univalence supplies paths in the universe corresponding to the two equivalences. If the universe were a set, its path type between Bool and itself would be a proposition, so those paths would be equal. Applying the canonical map from type paths to equivalences would then make the two equivalences equal, a contradiction.

This proves a specific conclusion under univalence and the stated Boolean datatype: the universe containing Bool is not a set. It does not assert that Bool itself has nontrivial loops, nor that every individual type in the universe is non-set-like. The distinction is between a type and the universe whose identity structure records its equivalences.

## Worked example 3: suspension of two points

Write the suspension of the two-point type as poles $N,S$ with paths $m_0,m_1:N=S$. Define a map $F$ to the circle by sending both poles to base, sending $m_0$ to reflexivity and $m_1$ to loop. The suspension recursor supplies the map from exactly those point and path data. Define $G$ back from the circle by sending base to $N$ and loop to $m_1\cdot m_0^{-1}$. The circle recursor supplies this map.

The composite $FG$ sends base to base and its loop to loop composed with the inverse of reflexivity. The unit and inverse path laws identify that with loop. Circle induction therefore constructs a homotopy from $FG$ to the identity, with reflexivity as its point component and that path equality as coherence for the generating loop.

For the other composite $GF$, choose the homotopy component at $N$ to be reflexivity and the component at $S$ to be $m_0$. The meridian coherence condition says that the image meridian followed by the component at $S$ equals the component at $N$ followed by the original meridian. For $m_0$, both sides are $m_0$ after unit laws. For $m_1$, the left side is $(m_1\cdot m_0^{-1})\cdot m_0$, which cancels to $m_1$, matching the right side. Suspension induction now supplies the homotopy. The two maps and homotopies establish the claimed equivalence.

Every step uses the stipulated higher inductive recursors and their path computation principles. A picture of two poles and two edges suggests the result but does not provide these coherence data. The explicit construction also shows why the types are equivalent rather than literally identical constructor syntax. Univalence can further turn that equivalence into a path of types in an appropriate universe.

## The canonical map in univalence

Identity elimination already defines a map from $A=B$ to $A\simeq B$: at reflexivity use the identity equivalence. Call it $\operatorname{idtoequiv}$. Univalence asserts that **this map** is an equivalence. Merely exhibiting some unspecified equivalence between the two displayed types would omit the canonical-map compatibility needed to interpret transported structures.

An inverse, conventionally written $\operatorname{ua}$, sends an equivalence to a path in the universe. Its inverse laws provide propositional equalities relating the result to the original equivalence. Whether a theory gives additional definitional computation for that operation depends on its presentation. Opaque univalence in an intensional theory and a cubical computational rule should not be conflated.

For a group, a carrier equivalence alone forgets multiplication, identity and inverse operations. A group isomorphism includes preservation equations for those operations. The structure identity principle uses those equations to identify the transported operations, and uses proposition-valued laws to identify their proof components. The source statement's structural hypothesis is therefore essential. Unrelated group structures on equivalent carrier types do not become equal merely from the carriers' equivalence.

## Truncation controls elimination

An element of $\|A\|_{-1}$ says that $A$ is inhabited while hiding distinctions between its possible witnesses. The universal elimination rule targets propositions: given a proposition $P$ and a map $A\to P$, it supplies a map $\|A\|_{-1}\to P$ with its stipulated computation behaviour. An unrestricted map back to $A$ is not supplied merely by that rule when $A$ can carry general data.

For example, to conclude a proposition from a hidden witness, show that every actual witness yields that proposition. The truncation recursor then makes the conclusion independent of which witness was hidden. To produce a particular element of a data type, additional structure can matter: an already supplied point makes a constant choice possible, and if the target itself is a proposition the ordinary elimination rule applies. Thus hidden witnesses are not categorically unusable; their interface controls the legitimate conclusion.

The dependent-pair choice construction in Chapter 13 projects explicit witnesses. Replacing its premise by a product of propositional truncations changes the problem. A principle extracting simultaneous choices from those truncated premises is not the same term as projection. This connects the homotopical language to the earlier distinction between data-bearing and proposition-valued existence.

The circle fundamental-group theorem and the derivation of function extensionality from univalence are deeper cited inputs in this chapter. Their retained proof architectures identify dependencies; they do not claim a complete development of encode–decode or the weak-function-extensionality argument. The elementary contractibility, Boolean-universe and suspension constructions above are supplied in full under the stated eliminators.

## Practice exercises

### Exercise 1
<a id="homotopy-type-theory-ex-1"></a>
Using the cited weak-function-extensionality dependency chain, show how univalence yields function extensionality.

<details><summary>Hint 1</summary>

Use the two cited weak-function-extensionality theorems as inputs.

</details>
<details><summary>Hint 2</summary>

Invert the canonical equality-to-homotopy map.

</details>
<details><summary>Solution</summary>

The standard proof is a dependency chain. Univalence first implies **weak function extensionality**: a dependent product of contractible types is contractible (HoTT Book, §4.9, Theorem 4.9.4). Weak function extensionality then implies that the canonical map $(f=g)\to(f\sim g)$ is an equivalence (Theorem 4.9.5). Applying its inverse to $H:f\sim g$ gives $f=g$. An arbitrary homotopy $H$ does not by itself define the self-equivalence of the function type used in the former argument.

</details>

### Exercise 2
<a id="homotopy-type-theory-ex-2"></a>
Prove that the type of paths in a contractible type is contractible.

<details><summary>Hint 1</summary>

Choose the path through the contractible centre.

</details>
<details><summary>Hint 2</summary>

Naturality of the contraction and path cancellation contract every other path to it.

</details>
<details><summary>Solution</summary>

Let $A$ have centre $c$ and contraction $h:\prod_x(c=x)$. For fixed $x,y$, the path $h(x)^{-1}\cdot h(y)$ is the centre of $x=y$. Path induction reduces the assertion that every $p:x=y$ equals this centre to reflexivity at $c$. Thus $x=y$ is contractible; the coherence comes from identity elimination, not merely from choosing two paths. The contraction naturality equation is h(x) followed by p equals h(y); left composition by the inverse of h(x), associativity and cancellation identify p with the chosen centre. Worked Example 1 supplies the complete identity-elimination argument.

</details>

### Exercise 3
<a id="homotopy-type-theory-ex-3"></a>
Construct the suspension $\Sigma A$ of a type $A$ as a higher inductive type.

<details><summary>Hint 1</summary>

Specify point generators first.

</details>
<details><summary>Hint 2</summary>

Supply one north-to-south path for each input point.

</details>
<details><summary>Solution</summary>

$\Sigma A$ has two points $\text{N}, \text{S}$ and for each $a: A$, a path $\text{merid}(a): \text{N} = \text{S}$.

</details>

### Exercise 4
<a id="homotopy-type-theory-ex-4"></a>
Show that $\Sigma S^0 \simeq S^1$.

<details><summary>Hint 1</summary>

Use the two explicit recursors in Worked Example 3.

</details>
<details><summary>Hint 2</summary>

Verify coherence separately for each meridian.

</details>
<details><summary>Solution</summary>

$S^0$ has two points, so its suspension has two poles and two meridians between them. Choose one meridian as a path identifying the poles; composing the other with its inverse yields one generating loop. HIT induction defines maps $\Sigma S^0\to S^1$ and $S^1\to\Sigma S^0$, and the computation rules give homotopies showing they are inverse. Hence $\Sigma S^0\simeq S^1$; the types are not literally identified by the constructor descriptions. Explicitly, send both suspension poles to circle base, its first meridian to reflexivity and second to loop. Send circle loop back to the second meridian followed by the inverse of the first. The composite homotopy at the south pole is the first meridian; its second-meridian coherence cancels the inverse/forward first-meridian pair. The other composite preserves the circle loop by unit laws. These data satisfy the higher inductive recursors as developed in Worked Example 3.

</details>

### Exercise 5
<a id="homotopy-type-theory-ex-5"></a>
Explain why the univalence axiom implies that isomorphic groups are equal.

<details><summary>Hint 1</summary>

Transport the operations as well as the carrier.

</details>
<details><summary>Hint 2</summary>

The homomorphism equations identify those transported operations.

</details>
<details><summary>Solution</summary>

A group is an underlying set-level type together with operations and proposition-valued laws. Univalence turns the underlying equivalence of a group isomorphism into a path of carrier types; function extensionality and the homomorphism equations identify the transported operations, while proof irrelevance handles the laws. This is the structure identity principle for groups. Univalence of carriers alone would not identify arbitrary, unrelated structures on them.

</details>

### Exercise 6
<a id="homotopy-type-theory-ex-6"></a>
Distinguish a homotopy $f\sim g$ from a path $f=g$, and state the principle relating them here.

<details><summary>Hint 1</summary>

Write the type of the pointwise evidence.

</details>
<details><summary>Hint 2</summary>

Function extensionality supplies the reverse direction to pointwise evaluation.

</details>
<details><summary>Solution</summary>

A homotopy is a dependent function assigning a path $f(x)=g(x)$ at every input. A path $f=g$ belongs to the identity type of the function type itself. Congruence produces pointwise paths from a function path. Function extensionality makes the canonical map an equivalence, supplying the converse on homotopies. In this chapter it is obtained through the explicitly cited consequence of univalence; it is not a definitional identification of the two printed types.

</details>

### Exercise 7
<a id="homotopy-type-theory-ex-7"></a>
Reconstruct the contradiction obtained by assuming that a univalent universe containing Bool is a set.

<details><summary>Hint 1</summary>

Use the identity and negation self-equivalences.

</details>
<details><summary>Hint 2</summary>

Equal underlying functions would agree at true.

</details>
<details><summary>Solution</summary>

Univalence turns the two self-equivalences into universe paths from Bool to itself. Setness would identify those paths. Applying $\operatorname{idtoequiv}$ and its inverse laws identifies the equivalences, hence their underlying functions. Evaluation at true then gives true equal to false. Transport in the unit/empty Boolean family refutes that equality. Therefore the assumed setness fails. The conclusion concerns the universe's paths, not a nontrivial loop in Bool itself.

</details>

### Exercise 8
<a id="homotopy-type-theory-ex-8"></a>
Given a proposition $P$ and $f:A\to P$, explain how truncation yields $\|A\|_{-1}\to P$. Why is the same eliminator not a general witness projection?

<details><summary>Hint 1</summary>

The target is required to be proposition-valued.

</details>
<details><summary>Hint 2</summary>

An arbitrary data type need not satisfy that requirement.

</details>
<details><summary>Solution</summary>

Apply the propositional-truncation recursor to $P$, its proof of being a proposition, and $f$. Every actual witness yields the same proposition-level conclusion, so the path constructor's coherence is respected. A target of unrestricted data type may have distinguishable outputs and is not covered by this rule. Additional structure or a selection principle would be needed for that stronger extraction. The rule restricts the interface; it does not forbid special targets that already have a supplied chosen point.

</details>

### Exercise 9
<a id="homotopy-type-theory-ex-9"></a>
In the suspension equivalence, check the homotopy coherence for the second meridian using the chosen component at $S$.

<details><summary>Hint 1</summary>

The composite maps that meridian to $m_1\cdot m_0^{-1}$.

</details>
<details><summary>Hint 2</summary>

The component at $S$ is $m_0$.

</details>
<details><summary>Solution</summary>

The required left side is $(m_1\cdot m_0^{-1})\cdot m_0$. Associativity rewrites it to $m_1\cdot(m_0^{-1}\cdot m_0)$, inverse cancellation gives $m_1\cdot\operatorname{refl}$, and the unit law gives $m_1$. The right side is the reflexive component at $N$ followed by $m_1$, also equal to $m_1$. These higher path equalities supply the generating coherence required by suspension induction.

</details>

### Exercise 10
<a id="homotopy-type-theory-ex-10"></a>
Why is a path between carrier types insufficient by itself to identify arbitrary group structures carried on them?

<details><summary>Hint 1</summary>

The structure includes operations in addition to its carrier.

</details>
<details><summary>Hint 2</summary>

A group isomorphism supplies preservation equations.

</details>
<details><summary>Solution</summary>

Transporting a carrier path also transports its multiplication, identity and inverse. Identifying the resulting structure with a second group requires equations showing those transported operations agree. A group isomorphism supplies the relevant homomorphism conditions, and proposition-valued group laws then have the needed uniqueness of proofs. A bare equivalence of carrier types lacks those operation equations. The structure identity principle therefore needs a suitably defined structured isomorphism, as stated in the chapter.

</details>

## Chapter summary

Identity types support higher paths; contractibility gives a centre and coherent contractions. Univalence identifies the canonical type-path/equivalence map as an equivalence, and structured identity needs operation preservation as well as carrier equivalence. Higher inductive recursors require point and path coherence data, as the suspension example demonstrates. Truncation changes the witness interface by restricting elimination. The final chapter connects foundational judgements to the assumptions behind a proof assistant's checking computation.

## Sources

The Univalent Foundations Program, *Homotopy Type Theory*, supplies the cited function-extensionality chain in §4.9, the structured identity framework and the circle encode–decode theorem. The new worked examples state their own eliminator and univalence assumptions. The classical linear-logic sources and earlier HoTT text are preserved through their native chapter provenance; no computational interpretation is claimed beyond the selected theory's stated rules.

