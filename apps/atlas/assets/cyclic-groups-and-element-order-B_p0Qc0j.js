var e=`---
parent_id: course-abstract-algebra-proof
chapter_id: cyclic-groups-and-element-order
---

# Module 2 — Cyclic groups and element order

**Question.** How much of a group can one repeated move generate? Periodicity turns powers into arithmetic modulo an integer, but the integer must be proved to be the first return time.

**Entry check.** List multiples of $8$ modulo $12$: $0,8,4,0,\\ldots$. The first positive return to 0 is at step 3. If the list is unfamiliar, review [modular arithmetic](#/item/deep-dive-congruences-crt) before using the general formula.

For $g\\in G$, integer powers use $g^0=e$ and $g^{-n}=(g^{-1})^n$. Associativity and the inverse law give $g^{r+s}=g^rg^s$. Thus $\\langle g\\rangle=\\{g^k:k\\in\\mathbb Z\\}$ is a subgroup: $g^r(g^s)^{-1}=g^{r-s}$. The **order** $|g|$ is the least positive $m$ with $g^m=e$, if one exists; otherwise it is infinite.

If $|g|=m$, division with remainder writes $k=qm+r$, $0\\le r<m$, so $g^k=g^r$. Minimality makes $e,g,\\ldots,g^{m-1}$ distinct: $g^i=g^j$ with $i<j<m$ would imply $g^{j-i}=e$. Hence $g^a=g^b$ exactly when $m\\mid(a-b)$. An **operation-preserving map** between groups sends a product to the product of the images; it is called a homomorphism. A bijective homomorphism is an **isomorphism**. The map $[k]\\mapsto g^k$ is well-defined because changing $k$ by a multiple of $m$ leaves $g^k$ unchanged; it preserves addition as multiplication because $g^{r+s}=g^rg^s$, and is bijective by the preceding argument. Thus it is an isomorphism $\\mathbb Z/m\\mathbb Z\\to\\langle g\\rangle$. For infinite order, the analogous map from $\\mathbb Z$ is an isomorphism. Module 4 develops homomorphisms and their kernels systematically.

## Order of a power

If $g$ has finite order $m$, then
$$
|g^k|=\\frac{m}{\\gcd(m,k)}.
$$
Let $d=\\gcd(m,k)$, $m=dm'$, $k=dk'$ with $\\gcd(m',k')=1$. The order of $g^k$ is the least positive $t$ for which $m\\mid kt$, equivalently $m'\\mid k't$. Bézout's identity (or Euclid's lemma) and coprimality imply $m'\\mid t$; $t=m'$ works. The formula also handles $k=0$, since $\\gcd(m,0)=m$. This argument depends on finite $m$; it does not assign an “infinite gcd” in the infinite-order case.

In additive $\\mathbb Z/12\\mathbb Z$, $|[8]|=12/\\gcd(12,8)=3$. The generators are exactly the residues coprime to 12. An isomorphism preserves order because $\\varphi(g^n)=\\varphi(g)^n$ in both directions. Consequently $C_4$ cannot be isomorphic to $C_2\\times C_2$: the former has an element of order 4, the latter does not.

## Guided practice

### 1. Starter — A return time

Find the order of $[9]$ in additive $\\mathbb Z/15\\mathbb Z$ and list its subgroup.

**Hint.** Use the gcd, then check by repeated addition.

**Reasoning.** $15/\\gcd(15,9)=5$; the subgroup is $\\{[0],[9],[3],[12],[6]\\}$. The next multiple is $[45]=[0]$, and none of the four preceding positive multiples is zero.

### 2. Core — Generators of a cyclic subgroup

If $|g|=18$, for which $k$ does $g^k$ generate $\\langle g\\rangle$?

**Hint.** A generator must itself have order 18.

**Reasoning.** The formula gives $|g^k|=18$ exactly when $\\gcd(18,k)=1$. Modulo 18 the choices are $1,5,7,11,13,17$. Counting distinct residues is justified because powers depend only on $k$ modulo 18.

### 3. Transfer — An invariant with a limit

Do $C_6$ and $C_2\\times C_3$ differ as groups? Give an explicit map or a genuine distinguishing invariant.

**Hint.** The pair $(1,1)$ has what order?

**Reasoning.** Its order is $\\operatorname{lcm}(2,3)=6$, so order does not distinguish them. The map $[k]_6\\mapsto([k]_2,[k]_3)$ is a homomorphism. If both coordinates vanish, 2 and 3 divide $k$, hence 6 divides $k$, so it is injective; equal finite sizes make it surjective. Thus the groups are isomorphic.

### 4. Proof audit — Least versus any exponent

“Since $g^{12}=e$, $g$ has order 12.” Diagnose the claim.

**Hint.** Use $g=e$ as a test.

**Reasoning.** The equation only shows that the order divides 12: divide 12 by the least positive order and use the distinct-power argument. The identity has order 1 yet satisfies $e^{12}=e$. To conclude order 12, rule out every proper divisor as an order.
`;export{e as default};