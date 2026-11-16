# Repair every direct-image intersection without losing an output

*Hard · [Set theory](index.md)*

Fix g:$\{1,2,3,4,5,6\}\to \{0,1,2\}$ with ordered outputs $0,0,1,1,2,2$. Choose any restricted domain $D\subseteq \{1,2,3,4,5,6\}$ satisfying BOTH goals: retain every codomain value, $g(D)=\{0,1,2\}$; and make $g(A\cap B)=g(A)\cap g(B)$ for EVERY pair $A,B\subseteq D$. The second goal concerns all subsets of your chosen D, not one selected pair. Enter D as an ordinary integer set, optionally in braces; order and repeated equivalent members do not change it. Use {} for empty. The field permits at most $100$ entries, $80$ digits per entry and $2,048$ text characters. In your optional explanation, justify both goals separately and compare direct images with the preimage identity that holds for every function. This domain-repair interaction is newly authored; see Jiří Lebl, Basic Analysis §0.3, Propositions $0.3$.$15$–$16$ and Definition $0.3$.$17$ for the underlying concepts.

*Source: Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §0.3, Propositions 0.3.15–16 and Definition 0.3.17; related Exercise 0.3.4(b) (https://www.jirka.org/ra/html/sec\_basicset.html). Mathematical background reference for images, intersections and injectivity. Euler authors the fixed-map domain-repair interaction and explanations; this citation does not claim copied source prose or a figure. CC BY-SA 4.0 is selected from the source’s dual licence for adapted components; new Euler educational material uses the same licence: https://creativecommons.org/licenses/by-sa/4.0/*

```answer
{"answer":{"kind":"finite_image_domain_with_open_reasoning","expected_constraints":{"model":"paired_fibers_full_image"},"checker_scope":"Checks the entire submitted finite restricted domain for the fixed map. Accepts exactly domains containing one member of each fiber {1,2},{3,4},{5,6}, equivalently injectivity on D together with full image {0,1,2}. This establishes the requested equality for every pair of subsets of that finite domain. Empty or otherwise insufficient valid domains are incorrect, while syntax/resource/out-of-domain entries are invalid. Optional general arguments remain unassessed."}}
```

<details>
<summary>Hint 1</summary>

Separate the two goals. Keeping every output requires enough inputs; intersection equality for all pairs can fail if you keep two different inputs with the same output.

</details>

<details>
<summary>Hint 2</summary>

Test the singleton subsets {x} and {z} for two distinct inputs sharing an output. Then ask which inputs can be kept while still reaching all three outputs.

</details>

<details>
<summary>Worked solution</summary>

A condition for every pair of subsets can be repaired structurally, while output retention imposes a separate requirement.

1. For any restricted domain D, injectivity of g on D is equivalent to image-intersection equality for every pair $A,B\subseteq D$. This is a universal condition on all subsets of the chosen finite domain, not one observed equality.
2. For necessity, if distinct x,z in D have $g(x)=g(z)$, take $A=\{x\}, B=\{z\}$. The image of their empty intersection is empty, while the two images share g(x). Thus universal equality fails.
3. For sufficiency, take y in $g(A)\cap g(B)$. Then $y=g(a)=g(b)$ for some $a\in A$ and $b\in B$. Injectivity on D gives a=b, so that shared input belongs to $A\cap B$. The reverse inclusion follows; the other inclusion always holds.
4. The three fibers are $\{1,2\}, \{3,4\}, \{5,6\}$. Injectivity requires at most one input from each pair. Retaining every codomain value separately requires at least one input from each pair. Together these give exactly one from each pair.
5. All eight domains are accepted: $\{1,3,5\}, \{1,3,6\}, \{1,4,5\}, \{1,4,6\}, \{2,3,5\}, \{2,3,6\}, \{2,4,5\}, \{2,4,6\}$. Reordered or repeated entries represent the same ordinary set.
6. A smaller injective domain, such as $\{1,3\}$, does preserve every intersection but misses output $2$ and fails the extra retention goal. An onto domain such as $\{1,2,3,5\}$ retains all outputs but has a collision, so it fails universal equality. Cardinality $3$ alone is also insufficient: $\{1,2,3\}$ both collides and misses output $2$.
7. For every function, preimages preserve intersections without injectivity and without an inverse function. The changed requirement here concerns DIRECT images on a chosen restricted domain, so the distinction matters.
8. The checker establishes the finite structured properties for this fixed map and your submitted D. It does not assess the optional general necessity/sufficiency argument or certify unrestricted proofs.

</details>
