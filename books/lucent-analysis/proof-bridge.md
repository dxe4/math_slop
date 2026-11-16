# 1. A bridge to proof

[Course guide and university alignment](course-guide.md)

## Objectives

By the end of this chapter, you should be able to translate mathematical claims into quantifiers, negate those claims correctly, distinguish a function from its formula, and choose between direct proof, contraposition, contradiction, and induction.

Calculus often begins with a computation. Analysis asks why that computation is justified and which assumptions make it valid. A picture can suggest a statement, and a numerical experiment can disprove a universal claim by producing a genuine counterexample. Neither a convincing picture nor many successful examples proves a statement about every real number.

## Statements, quantifiers, and sets

A mathematical proposition has a truth value. The expression “x > 0” becomes a proposition only after x is specified or quantified. For a set A, “∀x ∈ A, P(x)” means P holds for every element; “∃x ∈ A, P(x)” means at least one element has the property. An existential proof must identify a witness or establish its existence logically.

Quantifier order matters. The assertion “∀x ∈ ℝ, ∃y ∈ ℝ, y > x” is true: choose y = x + 1. The assertion “∃y ∈ ℝ, ∀x ∈ ℝ, y > x” is false: taking x = y contradicts it. The first permits y to depend on x; the second demands one y that works simultaneously.

Negation reverses quantifiers and negates the final condition. Thus the negation of “∀x ∈ A, ∃y ∈ B, P(x,y)” is “∃x ∈ A, ∀y ∈ B, not P(x,y).” Also, the negation of x < y is x ≥ y, not x > y. These distinctions become essential in limit definitions.

We write A ⊆ B when every element of A belongs to B. The intersection A ∩ B contains elements in both sets; the union A ∪ B contains elements in at least one. To prove A = B, prove the two inclusions. An empty domain makes a universal statement vacuously true: there is no element that violates it.

## Functions and proof choices

A function f: A → B assigns each element of its domain A exactly one element of its codomain B. Its image is f(A) = {f(x): x ∈ A}, which may be smaller than B. It is injective if f(x) = f(y) implies x = y, and surjective if f(A) = B. A bijection has both properties. Changing a domain or codomain can change these properties even when the formula stays fixed.

A direct proof of P ⇒ Q assumes P and derives Q. Contraposition proves not Q ⇒ not P. Contradiction assumes the desired statement is false and derives an impossibility. These are logical methods, not stylistic decorations: write down which assumption you are using.

**Theorem 1.1.** Let A, B, C be sets, and let f: A → B and g: B → C be injective functions. Then g ∘ f: A → C is injective.

**Proof.** Take arbitrary x,y ∈ A and suppose g(f(x)) = g(f(y)). Since f(x),f(y) ∈ B and g is injective, f(x) = f(y). Since f is injective, x = y. This is precisely the definition of injectivity of the composition. ∎

Notice that every hypothesis has a job. An illustration with arrows may explain the argument, but the proof covers every pair of elements, including pairs that no finite drawing could display.

## Induction

For this course ℕ = {1,2,3,…}. Mathematical induction proves a proposition P(n) for every n ∈ ℕ by establishing P(1), then proving P(n) ⇒ P(n+1) for an arbitrary n ∈ ℕ. The second step must use an unspecified n, not several selected examples.

**Example.** For every n ∈ ℕ, 1 + 2 + ⋯ + n = n(n+1)/2. The base case is 1 = 1·2/2. If the identity holds at n, adding n+1 gives n(n+1)/2 + (n+1) = (n+1)(n+2)/2, exactly the identity at n+1. Induction completes the proof.

## Exercises

1. Negate: “For every x ∈ ℝ there exists n ∈ ℕ such that n > x.” Do not decide its truth yet.
2. For f(x) = x², determine injectivity and surjectivity for f: ℝ → ℝ and for f: [0,∞) → [0,∞).
3. Prove that if an integer n has odd square, then n is odd.
4. Prove by induction that 2ⁿ ≥ n+1 for every integer n ≥ 0.

<details>
<summary>Hints</summary>

1. Reverse both quantifiers.
2. Check negative outputs and opposite inputs.
3. Use contraposition and the definition of an even integer.
4. After doubling, compare 2n+2 with n+2.

</details>

<details>
<summary>Solutions</summary>

1. There exists x ∈ ℝ such that every n ∈ ℕ satisfies n ≤ x.
2. On ℝ the function is neither injective, since f(1) = f(−1), nor surjective, since −1 has no preimage. On [0,∞) it is bijective: equal squares of nonnegative numbers give equal inputs, and each y ≥ 0 has preimage √y.
3. If n is even, n = 2k for some integer k, so n² = 2(2k²) is even. Contraposition gives the claim.
4. At n = 0, 1 ≥ 1. If 2ⁿ ≥ n+1, then 2ⁿ⁺¹ ≥ 2n+2 ≥ n+2 because n ≥ 0. Induction proves the assertion.

</details>

## Proof workshop: choosing a witness and repairing an argument

Consider the statement: for every real x and every positive ε, there is a rational q with |x−q|<ε. The order of choices matters. The rational q may depend on both x and ε. The statement does **not** promise one rational q that approximates every real x simultaneously.

Here is a constructive route. Choose a natural n with 1/n<ε. By the integer-order property, there is an integer m with m≤nx<m+1. Then q=m/n is rational and 0≤x−q<1/n<ε. Notice how the Archimedean choice of n turns an arbitrary tolerance into a grid spacing. This proof will be revisited after completeness supplies the Archimedean property.

An attempted proof of “the sum of two even integers is even” says: “2+4=6; 4+8=12; the pattern continues.” These computations suggest the claim but do not cover arbitrary inputs. The repair starts with arbitrary even integers a=2j and b=2k, where j,k are integers. Then a+b=2(j+k), and j+k is an integer. The final expression has the form required by the definition. The key step is choosing arbitrary representatives, not collecting more examples.

Proof by contradiction is often useful when an assumption cannot be exploited directly. To prove √2 irrational, suppose √2=p/q with integers p,q in lowest terms and q≠0. Squaring gives p²=2q², so p² is even. An odd integer has odd square, hence p is even: p=2r. Substitution gives q²=2r², so q is even too. This contradicts the lowest-terms choice. The proof depends on the parity lemma and on being able to choose a reduced fraction; it is not merely the observation that a decimal expansion looks irregular.

**A proof-reading checklist.** Identify the exact domain of each variable, the order of quantifiers, the witness or arbitrary object introduced, and the line that uses each hypothesis. If the final line only says “therefore true,” ask what definition makes it true.

```exercise
{"id":"analysis-proof-witness","type":"choice","prompt":"Which statement exactly negates: for every positive ε there exists a natural N such that every n≥N satisfies |aₙ−L|<ε?","options":[{"label":"There is a positive ε such that every N has some n≥N with |aₙ−L|≥ε.","correct":true,"feedback":"Yes. One fixed tolerance must fail arbitrarily far out."},{"label":"For every positive ε and every N, all n≥N fail the inequality.","correct":false,"feedback":"This is much stronger than negation; only one bad late index is needed for each N."},{"label":"There is a positive ε and one index n with |aₙ−L|≥ε.","correct":false,"feedback":"A single early exception does not prevent convergence."}],"hints":["Reverse each quantifier in order: ∀ε, ∃N, ∀n becomes ∃ε, ∀N, ∃n."]}
```

```exercise
{"id":"analysis-proof-repair","type":"written","prompt":"Repair this argument: ‘Every increasing real sequence converges. Its plotted values keep moving right, so they must settle at a point.’ State the missing hypothesis and give a counterexample without it.","hints":["A sequence can keep moving right forever.","Find the theorem in the sequences chapter and name the set whose supremum it uses."],"rubric":["States bounded above as a necessary additional hypothesis for this theorem","Gives a concrete increasing unbounded counterexample","Explains that completeness supplies the supremum and monotonicity puts the tail near it","Does not treat the plotted sample as proof"],"solution":"The claim needs boundedness above. The sequence aₙ=n is increasing and diverges. If an increasing sequence is bounded above, completeness gives L=sup{aₙ}; for every ε>0 some term exceeds L−ε, and every later term lies between that term and L, so the sequence converges to L."}
```

