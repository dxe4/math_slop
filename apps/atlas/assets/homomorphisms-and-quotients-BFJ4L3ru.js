var e=`---
parent_id: course-abstract-algebra-proof
chapter_id: homomorphisms-and-quotients
---

# Module 4 — Homomorphisms and quotients

**Question.** When a map forgets information but preserves multiplication, can we describe exactly what it forgot? Its kernel records the lost distinctions; a quotient makes those distinctions into equalities.

**Entry check.** The map $\\varphi:\\mathbb Z\\to\\mathbb Z/6\\mathbb Z$, $k\\mapsto[2k]$, has image $\\{[0],[2],[4]\\}$ and kernel $3\\mathbb Z$. If you found $6\\mathbb Z$, solve $2k\\equiv0\\pmod6$ rather than copying the modulus.

A **homomorphism** $\\varphi:G\\to K$ satisfies $\\varphi(ab)=\\varphi(a)\\varphi(b)$. Since $\\varphi(e)^2=\\varphi(e)$, cancellation in $K$ gives $\\varphi(e)=e$. Then $e=\\varphi(aa^{-1})=\\varphi(a)\\varphi(a^{-1})$, so $\\varphi(a^{-1})=\\varphi(a)^{-1}$. Its kernel $N=\\{g:\\varphi(g)=e\\}$ is a subgroup. Moreover $\\varphi(gng^{-1})=\\varphi(g)e\\varphi(g)^{-1}=e$, so $gNg^{-1}=N$ (apply this also with $g^{-1}$). Such a subgroup is **normal**.

If $N\\trianglelefteq G$, the left cosets form a group under $(aN)(bN)=abN$. To check representative independence, write $a'=an$ and $b'=bm$ with $n,m\\in N$. Then
$$
a'b'=anbm=ab(b^{-1}nb)m.
$$
Normality places $b^{-1}nb$ in $N$, so $a'b'N=abN$. Associativity descends from $G$, $N$ is the identity, and $a^{-1}N$ is the inverse of $aN$. Conversely, if this representative formula is well-defined for a subgroup $H$, comparing $(hH)(gH)$ with $(eH)(gH)$ for $h\\in H$ gives $hgH=gH$ and therefore $g^{-1}hg\\in H$. Repeating for all $g$ yields normality. A quotient **set** always exists; this multiplication exists only under that condition.

**Concrete failure.** In $S_3$, let $H=\\{e,(12)\\}$. We have $eH=(12)H$, yet with $b=(13)$ the proposed products give $(13)H=\\{(13),(123)\\}$ and $(12)(13)H=(132)H=\\{(132),(23)\\}$, distinct left cosets. The result depends on which representative of $H$ was chosen.

## The first isomorphism theorem

For any homomorphism $\\varphi:G\\to K$, its kernel $N$ is normal, and
$$
\\bar\\varphi:G/N\\longrightarrow\\operatorname{im}\\varphi,\\qquad gN\\longmapsto\\varphi(g)
$$
is an isomorphism. If $gN=hN$, then $h^{-1}g\\in N$, so $\\varphi(h)^{-1}\\varphi(g)=e$; this proves well-definedness. The same implication reversed proves injectivity. The map is a homomorphism because $\\bar\\varphi((gN)(hN))=\\varphi(gh)=\\varphi(g)\\varphi(h)$, and it is onto the *image* by definition. Calling it onto all of $K$ would additionally require $\\varphi$ to be surjective.

For example, the sign homomorphism $S_3\\to\\{\\pm1\\}$ has kernel $A_3$ and image $\\{\\pm1\\}$, so $S_3/A_3\\cong C_2$. [Workshop 2 in the course overview](#/item/course-abstract-algebra-proof) computes a different kernel-image pair.

## Guided practice

### 1. Starter — A kernel

Find the kernel of $\\psi:\\mathbb Z\\to\\mathbb Z/10\\mathbb Z$, $k\\mapsto[5k]$.

**Hint.** Solve $10\\mid5k$.

**Reasoning.** This is equivalent to $2\\mid k$, so $\\ker\\psi=2\\mathbb Z$. The image is $\\{[0],[5]\\}$, consistent with the theorem's two-element quotient.

### 2. Core — Conjugate a kernel element

Prove directly that $gng^{-1}\\in\\ker\\varphi$ if $n\\in\\ker\\varphi$.

**Hint.** Apply $\\varphi$ to the whole product, keeping the factor order.

**Reasoning.** $\\varphi(gng^{-1})=\\varphi(g)\\varphi(n)\\varphi(g)^{-1}=\\varphi(g)e\\varphi(g)^{-1}=e$. This inclusion for every $g$, plus its version using $g^{-1}$, gives equality $gNg^{-1}=N$.

### 3. Transfer — A familiar quotient

Use a map, rather than coset counting alone, to identify $(\\mathbb Z/12\\mathbb Z)/\\langle[4]\\rangle$.

**Hint.** Reduce a residue modulo 4.

**Reasoning.** $[k]_{12}\\mapsto[k]_4$ is well-defined because changing $k$ by 12 leaves its class modulo 4 fixed. Its kernel is $\\{[0],[4],[8]\\}=\\langle[4]\\rangle$ and its image is all $\\mathbb Z/4\\mathbb Z$. The first isomorphism theorem supplies the identification.

### 4. Proof audit — A codomain error

“Every homomorphism induces $G/\\ker\\varphi\\cong K$.” Is the canonical induced map $g\\ker\\varphi\\mapsto\\varphi(g)$, with codomain $K$, always an isomorphism? Repair the statement.

**Hint.** Include $\\mathbb Z\\to\\mathbb Z$, $k\\mapsto2k$.

**Reasoning.** This map has trivial kernel but image $2\\mathbb Z\\ne\\mathbb Z$, so its canonical induced map into $K=\\mathbb Z$ is not surjective. The theorem's target is $\\operatorname{im}\\varphi$; replace it by $K$ only after proving surjectivity. This does not deny the separate abstract isomorphism $\\mathbb Z\\cong2\\mathbb Z$.
`;export{e as default};