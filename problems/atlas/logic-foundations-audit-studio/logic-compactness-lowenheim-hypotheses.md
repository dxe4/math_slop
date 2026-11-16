# Audit compactness and Löwenheim–Skolem hypotheses

*Difficulty 4 of 5 · [Logic and foundations audit studio](index.md) · exercise 7 of 11*

Let T be a first-order theory in a countable language. First suppose T has finite models of arbitrarily large size. Explain how compactness yields an infinite model. Next, if M is an infinite model of T and A is a countable subset of M, state the relevant downward Löwenheim–Skolem conclusion. Name assumptions that would be lost if this were carelessly stated for arbitrary logics or languages.

<details>
<summary>Hint 1</summary>

Add one sentence for each finite lower bound on domain size

</details>

<details>
<summary>Hint 2</summary>

Every finite subtheory needs only one sufficiently large finite model

</details>

<details>
<summary>Hint 3</summary>

The elementary substructure should contain the selected parameter set

</details>

<details>
<summary>Hint 4</summary>

Language cardinality affects the size bound

</details>

<details>
<summary>Worked solution</summary>

Expand T by sentences θ_n saying there are at least n distinct elements. Any finite subset mentions only finitely many bounds, so an arbitrarily large finite model of T satisfies all bounds in that subset. Compactness gives a model of $T\cup {\theta_n:n\ge 1}$; it is infinite. For the second part, downward Löwenheim–Skolem gives a countable elementary substructure N≺M containing A (more generally size at most max(|A|,|L|,ℵ₀)). The statement depends on first-order semantics and elementarity; stronger logics may fail compactness or Löwenheim–Skolem. For an uncountable language, one cannot promise a countable substructure by this bound. The theorem does not say N contains externally all subsets of its elements.

**Answer.** Compactness realizes all finite size bounds at once; downward LS gives a countable N≺M containing A because both A and the first-order language are countable.

</details>

*Tags: compactness, Löwenheim-Skolem, hypotheses*
